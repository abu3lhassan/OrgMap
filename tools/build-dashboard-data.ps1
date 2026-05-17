# tools/build-dashboard-data.ps1
# OrgMap Management Dashboard Data Builder
# ASCII-only script to avoid Arabic encoding issues in PowerShell.
#
# Reads local CSV exports from:
# - data_exports/it_tickets.csv
# - data_exports/maintenance_requests.csv
# - data_exports/hr_requests.csv
# - data_exports/procurement_requests.csv
# - data_exports/finance_items.csv
# - data_exports/licenses.csv
#
# Generates:
# - dashboard-data.js
#
# Run:
# powershell -ExecutionPolicy Bypass -File tools\build-dashboard-data.ps1

$RootDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$ExportsDir = Join-Path $RootDir "data_exports"
$OutputFile = Join-Path $RootDir "dashboard-data.js"

function U {
    param([string]$Text)
    return [regex]::Unescape($Text)
}

function Get-CsvRows {
    param([string]$FileName)

    $FilePath = Join-Path $ExportsDir $FileName

    if (Test-Path $FilePath) {
        return @(Import-Csv -Path $FilePath)
    }

    return @()
}

function Test-HasColumn {
    param($Rows, [string]$ColumnName)

    if ($Rows.Count -eq 0) {
        return $false
    }

    $Headers = $Rows[0].PSObject.Properties.Name
    return ($Headers -contains $ColumnName)
}

function Get-DateOrNull {
    param([string]$Value)

    if ([string]::IsNullOrWhiteSpace($Value)) {
        return $null
    }

    try {
        return [datetime]::Parse($Value)
    }
    catch {
        return $null
    }
}

function Get-DaysBetween {
    param($StartDate, $EndDate)

    if ($null -eq $StartDate -or $null -eq $EndDate) {
        return 0
    }

    $days = [math]::Round(($EndDate - $StartDate).TotalDays)

    if ($days -lt 0) {
        return 0
    }

    return $days
}

function Test-OpenStatus {
    param([string]$Status)
    $s = ($Status + "").Trim().ToLower()
    return ($s -eq "open" -or $s -eq "new" -or $s -eq "pending" -or $s -eq "in progress" -or $s -eq "under review" -or $s -eq "opened")
}

function Test-ClosedStatus {
    param([string]$Status)
    $s = ($Status + "").Trim().ToLower()
    return ($s -eq "closed" -or $s -eq "completed" -or $s -eq "done" -or $s -eq "resolved")
}

function Test-CriticalPriority {
    param([string]$Priority)
    $s = ($Priority + "").Trim().ToLower()
    return ($s -eq "critical" -or $s -eq "urgent" -or $s -eq "high" -or $s -eq "p1" -or $s -eq "p0")
}

function Test-HrPendingStatus {
    param([string]$Status)
    $s = ($Status + "").Trim().ToLower()
    return ($s -eq "pending" -or $s -eq "in progress" -or $s -eq "under review" -or $s -eq "open" -or $s -eq "new")
}

function Normalize-HrRequestType {
    param([string]$RequestType)
    $s = ($RequestType + "").Trim().ToLower()
    if ($s -eq "leave") { return "leave" }
    if ($s -eq "vacation") { return "leave" }
    if ($s -eq "permission") { return "permission" }
    if ($s -eq "business_trip") { return "business_trip" }
    if ($s -eq "business trip") { return "business_trip" }
    if ($s -eq "trip") { return "business_trip" }
    if ($s -eq "work_permit") { return "work_permit" }
    if ($s -eq "work permit") { return "work_permit" }
    return $s
}

function Test-ProcurementInProgressStatus {
    param([string]$Status)
    $s = ($Status + "").Trim().ToLower()
    return ($s -eq "new" -or $s -eq "pending" -or $s -eq "in progress" -or $s -eq "under review" -or $s -eq "ordered")
}

function Test-ProcurementPendingApprovalStatus {
    param([string]$Status)
    $s = ($Status + "").Trim().ToLower()
    return ($s -eq "pending approval" -or $s -eq "approval" -or $s -eq "awaiting approval")
}

function Test-ProcurementClosedStatus {
    param([string]$Status)
    $s = ($Status + "").Trim().ToLower()
    return ($s -eq "completed" -or $s -eq "closed" -or $s -eq "cancelled" -or $s -eq "canceled" -or $s -eq "rejected")
}

function Test-FinanceFinalStatus {
    param([string]$Status)
    $s = ($Status + "").Trim().ToLower()
    return ($s -eq "paid" -or $s -eq "rejected" -or $s -eq "cancelled" -or $s -eq "canceled" -or $s -eq "closed")
}

function Normalize-FinanceItemType {
    param([string]$ItemType)
    $s = ($ItemType + "").Trim().ToLower()
    if ($s -eq "invoice") { return "invoice" }
    if ($s -eq "inv") { return "invoice" }
    if ($s -eq "contractor_payment") { return "contractor_payment" }
    if ($s -eq "contractor payment") { return "contractor_payment" }
    if ($s -eq "contractor") { return "contractor_payment" }
    if ($s -eq "claim") { return "claim" }
    if ($s -eq "advance_payment") { return "advance_payment" }
    if ($s -eq "advance payment") { return "advance_payment" }
    return $s
}

function Test-LicenseClosedStatus {
    param([string]$Status)
    $s = ($Status + "").Trim().ToLower()
    return ($s -eq "cancelled" -or $s -eq "canceled" -or $s -eq "closed")
}

function Analyze-Requests {
    param([string]$FileName, [string]$Label, [string[]]$RecommendedContextColumns)

    $Rows = Get-CsvRows $FileName
    $Open = 0
    $Closed = 0
    $Critical = 0
    $Overdue = 0
    $TotalOpenAge = 0
    $Now = Get-Date

    $HasPriority = Test-HasColumn $Rows "priority"
    $HasDueDate = Test-HasColumn $Rows "due_date"
    $HasContext = $false

    foreach ($Column in $RecommendedContextColumns) {
        if (Test-HasColumn $Rows $Column) {
            $HasContext = $true
        }
    }

    foreach ($Row in $Rows) {
        $Status = $Row.status
        $Priority = $Row.priority
        $DueDate = Get-DateOrNull $Row.due_date
        $CreatedAt = Get-DateOrNull $Row.created_at

        if (Test-OpenStatus $Status) {
            $Open++
            $TotalOpenAge += Get-DaysBetween $CreatedAt $Now

            if ($null -ne $DueDate -and $DueDate -lt $Now) {
                $Overdue++
            }
        }

        if (Test-ClosedStatus $Status) { $Closed++ }

        if ((Test-OpenStatus $Status) -and (Test-CriticalPriority $Priority)) {
            $Critical++
        }
    }

    $AverageAgeDays = 0
    if ($Open -gt 0) { $AverageAgeDays = [math]::Round($TotalOpenAge / $Open) }

    $Missing = @()
    if (-not $HasPriority) { $Missing += "priority" }
    if (-not $HasDueDate) { $Missing += "due_date" }
    if (-not $HasContext) { $Missing += ($RecommendedContextColumns -join " or ") }

    return [ordered]@{
        rows = $Rows.Count
        label = $Label
        open = $Open
        critical = $Critical
        overdue = $Overdue
        closed = $Closed
        averageAgeDays = $AverageAgeDays
        missing = $Missing
    }
}

function Analyze-HrRequests {
    param([string]$FileName)
    $Rows = Get-CsvRows $FileName
    $PendingLeave = 0
    $PendingPermission = 0
    $PendingBusinessTrip = 0
    $PendingWorkPermit = 0

    foreach ($Row in $Rows) {
        $Type = Normalize-HrRequestType $Row.request_type
        $Status = $Row.status
        if (-not (Test-HrPendingStatus $Status)) { continue }

        if ($Type -eq "leave") { $PendingLeave++ }
        elseif ($Type -eq "permission") { $PendingPermission++ }
        elseif ($Type -eq "business_trip") { $PendingBusinessTrip++ }
        elseif ($Type -eq "work_permit") { $PendingWorkPermit++ }
    }

    $Missing = @()
    if (-not (Test-HasColumn $Rows "employee_department")) { $Missing += "employee_department" }
    if (-not (Test-HasColumn $Rows "request_type")) { $Missing += "request_type" }
    if (-not (Test-HasColumn $Rows "status")) { $Missing += "status" }
    if (-not (Test-HasColumn $Rows "created_at")) { $Missing += "created_at" }

    $TotalPending = $PendingLeave + $PendingPermission + $PendingBusinessTrip + $PendingWorkPermit

    return [ordered]@{
        rows = $Rows.Count
        pendingLeave = $PendingLeave
        pendingPermission = $PendingPermission
        pendingBusinessTrip = $PendingBusinessTrip
        pendingWorkPermit = $PendingWorkPermit
        totalPending = $TotalPending
        missing = $Missing
    }
}

function Analyze-ProcurementRequests {
    param([string]$FileName)
    $Rows = Get-CsvRows $FileName
    $InProgress = 0
    $PendingApproval = 0
    $Overdue = 0
    $Closed = 0
    $Now = Get-Date

    foreach ($Row in $Rows) {
        $Status = $Row.status
        $DueDate = Get-DateOrNull $Row.due_date
        $IsClosed = Test-ProcurementClosedStatus $Status

        if (Test-ProcurementInProgressStatus $Status) { $InProgress++ }
        if (Test-ProcurementPendingApprovalStatus $Status) { $PendingApproval++ }
        if ($IsClosed) { $Closed++ }
        if ((-not $IsClosed) -and $null -ne $DueDate -and $DueDate -lt $Now) { $Overdue++ }
    }

    $Missing = @()
    if (-not (Test-HasColumn $Rows "requesting_department")) { $Missing += "requesting_department" }
    if (-not (Test-HasColumn $Rows "status")) { $Missing += "status" }
    if (-not (Test-HasColumn $Rows "created_at")) { $Missing += "created_at" }

    return [ordered]@{
        rows = $Rows.Count
        inProgress = $InProgress
        pendingApproval = $PendingApproval
        overdue = $Overdue
        closed = $Closed
        missing = $Missing
    }
}

function Analyze-FinanceItems {
    param([string]$FileName)
    $Rows = Get-CsvRows $FileName
    $PendingInvoices = 0
    $PendingContractorPayments = 0
    $OverduePayments = 0
    $Now = Get-Date

    foreach ($Row in $Rows) {
        $Type = Normalize-FinanceItemType $Row.item_type
        $Status = $Row.status
        $DueDate = Get-DateOrNull $Row.due_date
        $IsFinal = Test-FinanceFinalStatus $Status

        if (-not $IsFinal) {
            if ($Type -eq "invoice") { $PendingInvoices++ }
            elseif ($Type -eq "contractor_payment") { $PendingContractorPayments++ }

            if ($null -ne $DueDate -and $DueDate -lt $Now) {
                $OverduePayments++
            }
        }
    }

    $Missing = @()
    if (-not (Test-HasColumn $Rows "item_type")) { $Missing += "item_type" }
    if (-not (Test-HasColumn $Rows "status")) { $Missing += "status" }
    if (-not (Test-HasColumn $Rows "received_date")) { $Missing += "received_date" }

    return [ordered]@{
        rows = $Rows.Count
        pendingInvoices = $PendingInvoices
        pendingContractorPayments = $PendingContractorPayments
        overduePayments = $OverduePayments
        missing = $Missing
    }
}

function Analyze-Licenses {
    param([string]$FileName)

    $Rows = Get-CsvRows $FileName
    $Expiring30 = 0
    $Expiring60 = 0
    $Expired = 0
    $Now = Get-Date
    $Today = $Now.Date
    $In30 = $Today.AddDays(30)
    $In60 = $Today.AddDays(60)

    foreach ($Row in $Rows) {
        $Status = $Row.status
        if (Test-LicenseClosedStatus $Status) { continue }

        $Expiry = Get-DateOrNull $Row.expiry_date
        if ($null -eq $Expiry) { continue }

        $ExpiryDate = $Expiry.Date

        if ($ExpiryDate -lt $Today) {
            $Expired++
        }
        elseif ($ExpiryDate -le $In30) {
            $Expiring30++
            $Expiring60++
        }
        elseif ($ExpiryDate -le $In60) {
            $Expiring60++
        }
    }

    $Missing = @()
    if (-not (Test-HasColumn $Rows "license_name")) { $Missing += "license_name" }
    if (-not (Test-HasColumn $Rows "expiry_date")) { $Missing += "expiry_date" }

    return [ordered]@{
        rows = $Rows.Count
        expiringIn30Days = $Expiring30
        expiringIn60Days = $Expiring60
        expired = $Expired
        missing = $Missing
    }
}

function Get-Quality {
    param([int]$RowCount, [object[]]$Missing, [string]$FileName)

    $updated = U "\u0645\u062d\u062f\u062b"
    $partial = U "\u062c\u0632\u0626\u064a"
    $notAvailable = U "\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631"

    if ($RowCount -eq 0) {
        return [ordered]@{ status = $notAvailable; message = "$FileName was not found or is empty." }
    }

    if ($Missing.Count -gt 0) {
        return [ordered]@{ status = $partial; message = "File is readable, but these columns are missing: " + ($Missing -join ", ") + "." }
    }

    return [ordered]@{ status = $updated; message = "File loaded successfully." }
}

function New-Bottleneck {
    param([string]$Department, [int]$Open, [int]$Overdue, [int]$Critical, [string]$Reason)

    $medium = U "\u0645\u062a\u0648\u0633\u0637"
    $high = U "\u0639\u0627\u0644\u064a"
    $Score = $Open + ($Overdue * 3) + ($Critical * 5)
    $Level = $medium

    if ($Overdue -gt 0 -or $Critical -gt 0) { $Level = $high }

    return [ordered]@{
        department = $Department
        open = $Open
        overdue = $Overdue
        critical = $Critical
        score = $Score
        level = $Level
        reason = $Reason
    }
}

$title = U "\u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629"
$note = U "\u0647\u0630\u0647 \u0627\u0644\u0644\u0648\u062d\u0629 \u062a\u0639\u0631\u0636 \u0645\u0624\u0634\u0631\u0627\u062a \u0645\u062c\u0645\u0639\u0629 \u0641\u0642\u0637 \u0648\u0644\u0627 \u062a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062a."
$itLabel = U "\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a"
$maintenanceLabel = U "\u0627\u0644\u0635\u064a\u0627\u0646\u0629"
$hrLabel = U "\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629"
$procurementLabel = U "\u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a"
$financeLabel = U "\u0627\u0644\u0645\u0627\u0644\u064a\u0629"
$licensesLabel = U "\u0627\u0644\u0631\u062e\u0635"
$waiting = U "\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"
$undefined = U "\u063a\u064a\u0631 \u0645\u062d\u062f\u062f"

$Today = Get-Date -Format "yyyy-MM-dd"

$It = Analyze-Requests -FileName "it_tickets.csv" -Label $itLabel -RecommendedContextColumns @("department")
$Maintenance = Analyze-Requests -FileName "maintenance_requests.csv" -Label $maintenanceLabel -RecommendedContextColumns @("station", "department")
$Hr = Analyze-HrRequests -FileName "hr_requests.csv"
$Procurement = Analyze-ProcurementRequests -FileName "procurement_requests.csv"
$Finance = Analyze-FinanceItems -FileName "finance_items.csv"
$Licenses = Analyze-Licenses -FileName "licenses.csv"

$ItQuality = Get-Quality -RowCount $It.rows -Missing $It.missing -FileName "data_exports/it_tickets.csv"
$MaintenanceQuality = Get-Quality -RowCount $Maintenance.rows -Missing $Maintenance.missing -FileName "data_exports/maintenance_requests.csv"
$HrQuality = Get-Quality -RowCount $Hr.rows -Missing $Hr.missing -FileName "data_exports/hr_requests.csv"
$ProcurementQuality = Get-Quality -RowCount $Procurement.rows -Missing $Procurement.missing -FileName "data_exports/procurement_requests.csv"
$FinanceQuality = Get-Quality -RowCount $Finance.rows -Missing $Finance.missing -FileName "data_exports/finance_items.csv"
$LicensesQuality = Get-Quality -RowCount $Licenses.rows -Missing $Licenses.missing -FileName "data_exports/licenses.csv"

$OpenTotal = $It.open + $Maintenance.open + $Hr.totalPending + $Procurement.inProgress + $Procurement.pendingApproval
$OverdueTotal = $It.overdue + $Maintenance.overdue + $Procurement.overdue + $Finance.overduePayments
$CriticalTotal = $It.critical + $Maintenance.critical
$PendingFinanceTotal = $Finance.pendingInvoices + $Finance.pendingContractorPayments
$ExpiringLicensesTotal = $Licenses.expiringIn30Days

$Bottlenecks = @()

if ($It.open -gt 0) { $Bottlenecks += New-Bottleneck -Department $itLabel -Open $It.open -Overdue $It.overdue -Critical $It.critical -Reason "There are $($It.open) open IT tickets based on the export file." }
if ($Maintenance.open -gt 0) { $Bottlenecks += New-Bottleneck -Department $maintenanceLabel -Open $Maintenance.open -Overdue $Maintenance.overdue -Critical $Maintenance.critical -Reason "There are $($Maintenance.open) open maintenance requests based on the export file." }
if ($Hr.totalPending -gt 0) { $Bottlenecks += New-Bottleneck -Department $hrLabel -Open $Hr.totalPending -Overdue 0 -Critical 0 -Reason "There are $($Hr.totalPending) HR requests pending based on the export file." }

$ProcurementOpen = $Procurement.inProgress + $Procurement.pendingApproval
if ($ProcurementOpen -gt 0) { $Bottlenecks += New-Bottleneck -Department $procurementLabel -Open $ProcurementOpen -Overdue $Procurement.overdue -Critical 0 -Reason "There are $ProcurementOpen procurement requests in progress or pending approval." }
if ($PendingFinanceTotal -gt 0) { $Bottlenecks += New-Bottleneck -Department $financeLabel -Open $PendingFinanceTotal -Overdue $Finance.overduePayments -Critical 0 -Reason "There are $PendingFinanceTotal pending finance items based on the export file." }
if (($Licenses.expiringIn30Days + $Licenses.expired) -gt 0) { $Bottlenecks += New-Bottleneck -Department $licensesLabel -Open $Licenses.expiringIn30Days -Overdue $Licenses.expired -Critical 0 -Reason "There are $($Licenses.expiringIn30Days) licenses expiring in 30 days and $($Licenses.expired) expired licenses." }

$TopBottleneck = $undefined
if ($Bottlenecks.Count -gt 0) {
    $TopBottleneck = ($Bottlenecks | Sort-Object -Property score -Descending | Select-Object -First 1).department
}

$Alerts = @()
if ($It.open -gt 0) { $Alerts += "There are $($It.open) open IT tickets." }
if ($It.critical -gt 0) { $Alerts += "There are $($It.critical) critical IT tickets." }
if ($It.overdue -gt 0) { $Alerts += "There are $($It.overdue) overdue IT tickets." }
if ($It.rows -eq 0) { $Alerts += "IT export file has not been loaded yet." }

if ($Maintenance.open -gt 0) { $Alerts += "There are $($Maintenance.open) open maintenance requests." }
if ($Maintenance.critical -gt 0) { $Alerts += "There are $($Maintenance.critical) critical maintenance requests." }
if ($Maintenance.overdue -gt 0) { $Alerts += "There are $($Maintenance.overdue) overdue maintenance requests." }
if ($Maintenance.rows -eq 0) { $Alerts += "Maintenance export file has not been loaded yet." }

if ($Hr.totalPending -gt 0) { $Alerts += "There are $($Hr.totalPending) HR requests pending." }
if ($Hr.rows -eq 0) { $Alerts += "HR export file has not been loaded yet." }

if ($Procurement.inProgress -gt 0) { $Alerts += "There are $($Procurement.inProgress) procurement requests in progress." }
if ($Procurement.pendingApproval -gt 0) { $Alerts += "There are $($Procurement.pendingApproval) procurement requests pending approval." }
if ($Procurement.overdue -gt 0) { $Alerts += "There are $($Procurement.overdue) overdue procurement requests." }
if ($Procurement.rows -eq 0) { $Alerts += "Procurement export file has not been loaded yet." }

if ($Finance.pendingInvoices -gt 0) { $Alerts += "There are $($Finance.pendingInvoices) pending invoices." }
if ($Finance.pendingContractorPayments -gt 0) { $Alerts += "There are $($Finance.pendingContractorPayments) pending contractor payments." }
if ($Finance.overduePayments -gt 0) { $Alerts += "There are $($Finance.overduePayments) overdue finance items." }
if ($Finance.rows -eq 0) { $Alerts += "Finance export file has not been loaded yet." }

if ($Licenses.expiringIn30Days -gt 0) { $Alerts += "There are $($Licenses.expiringIn30Days) licenses expiring within 30 days." }
if ($Licenses.expired -gt 0) { $Alerts += "There are $($Licenses.expired) expired licenses." }
if ($Licenses.rows -eq 0) { $Alerts += "Licenses export file has not been loaded yet." }

$DashboardData = [ordered]@{
    meta = [ordered]@{
        title = $title
        version = "v1.0"
        lastUpdated = $Today
        dataSource = "Excel / CSV exports"
        note = $note
    }
    summary = [ordered]@{
        openRequests = $OpenTotal
        overdueRequests = $OverdueTotal
        criticalRequests = $CriticalTotal
        pendingInvoices = $PendingFinanceTotal
        expiringLicenses = $ExpiringLicensesTotal
        bottleneckDepartment = $TopBottleneck
    }
    it = [ordered]@{
        label = $itLabel
        open = $It.open
        critical = $It.critical
        overdue = $It.overdue
        closed = $It.closed
        averageAgeDays = $It.averageAgeDays
        status = $ItQuality.status
    }
    maintenance = [ordered]@{
        label = $maintenanceLabel
        open = $Maintenance.open
        critical = $Maintenance.critical
        overdue = $Maintenance.overdue
        closed = $Maintenance.closed
        averageAgeDays = $Maintenance.averageAgeDays
        status = $MaintenanceQuality.status
    }
    hr = [ordered]@{
        label = $hrLabel
        pendingLeave = $Hr.pendingLeave
        pendingPermission = $Hr.pendingPermission
        pendingBusinessTrip = $Hr.pendingBusinessTrip
        pendingWorkPermit = $Hr.pendingWorkPermit
        totalPending = $Hr.totalPending
        status = $HrQuality.status
    }
    procurement = [ordered]@{
        label = $procurementLabel
        inProgress = $Procurement.inProgress
        pendingApproval = $Procurement.pendingApproval
        overdue = $Procurement.overdue
        status = $ProcurementQuality.status
    }
    finance = [ordered]@{
        label = $financeLabel
        pendingInvoices = $Finance.pendingInvoices
        pendingContractorPayments = $Finance.pendingContractorPayments
        overduePayments = $Finance.overduePayments
        status = $FinanceQuality.status
    }
    licenses = [ordered]@{
        label = $licensesLabel
        expiringIn30Days = $Licenses.expiringIn30Days
        expiringIn60Days = $Licenses.expiringIn60Days
        expired = $Licenses.expired
        status = $LicensesQuality.status
    }
    bottlenecks = $Bottlenecks
    alerts = $Alerts
    dataQuality = [ordered]@{
        it = $ItQuality
        maintenance = $MaintenanceQuality
        hr = $HrQuality
        finance = $FinanceQuality
        licenses = $LicensesQuality
    }
}

$Json = $DashboardData | ConvertTo-Json -Depth 20
$Output = @"
// dashboard-data.js
// Generated by tools/build-dashboard-data.ps1
// Summary indicators only. Do not store sensitive request details here.

window.managementDashboardData = $Json;
"@

Set-Content -Path $OutputFile -Value $Output -Encoding UTF8

Write-Host "Generated dashboard-data.js"
Write-Host "IT rows: $($It.rows)"
Write-Host "IT open: $($It.open)"
Write-Host "IT closed: $($It.closed)"
Write-Host "IT critical: $($It.critical)"
Write-Host "IT overdue: $($It.overdue)"
Write-Host "Maintenance rows: $($Maintenance.rows)"
Write-Host "Maintenance open: $($Maintenance.open)"
Write-Host "Maintenance closed: $($Maintenance.closed)"
Write-Host "Maintenance critical: $($Maintenance.critical)"
Write-Host "Maintenance overdue: $($Maintenance.overdue)"
Write-Host "HR rows: $($Hr.rows)"
Write-Host "HR pending leave: $($Hr.pendingLeave)"
Write-Host "HR pending permission: $($Hr.pendingPermission)"
Write-Host "HR pending business trip: $($Hr.pendingBusinessTrip)"
Write-Host "HR pending work permit: $($Hr.pendingWorkPermit)"
Write-Host "HR total pending: $($Hr.totalPending)"
Write-Host "Procurement rows: $($Procurement.rows)"
Write-Host "Procurement in progress: $($Procurement.inProgress)"
Write-Host "Procurement pending approval: $($Procurement.pendingApproval)"
Write-Host "Procurement overdue: $($Procurement.overdue)"
Write-Host "Procurement closed: $($Procurement.closed)"
Write-Host "Finance rows: $($Finance.rows)"
Write-Host "Finance pending invoices: $($Finance.pendingInvoices)"
Write-Host "Finance pending contractor payments: $($Finance.pendingContractorPayments)"
Write-Host "Finance overdue payments: $($Finance.overduePayments)"
Write-Host "Licenses rows: $($Licenses.rows)"
Write-Host "Licenses expiring in 30 days: $($Licenses.expiringIn30Days)"
Write-Host "Licenses expiring in 60 days: $($Licenses.expiringIn60Days)"
Write-Host "Licenses expired: $($Licenses.expired)"
