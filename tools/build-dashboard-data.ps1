# tools/build-dashboard-data.ps1
# ASCII-only script to avoid Arabic encoding issues.
# Reads data_exports/it_tickets.csv and generates dashboard-data.js.

$RootDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$ExportsDir = Join-Path $RootDir "data_exports"
$OutputFile = Join-Path $RootDir "dashboard-data.js"
$ItFile = Join-Path $ExportsDir "it_tickets.csv"

function U {
    param([string]$Text)
    return [regex]::Unescape($Text)
}

function Test-OpenStatus {
    param([string]$Status)
    $s = ($Status + "").Trim().ToLower()
    return (
        $s -eq "open" -or
        $s -eq "new" -or
        $s -eq "pending" -or
        $s -eq "in progress" -or
        $s -eq "under review" -or
        $s -eq "opened"
    )
}

function Test-ClosedStatus {
    param([string]$Status)
    $s = ($Status + "").Trim().ToLower()
    return (
        $s -eq "closed" -or
        $s -eq "completed" -or
        $s -eq "done" -or
        $s -eq "resolved"
    )
}

function Test-CriticalPriority {
    param([string]$Priority)
    $s = ($Priority + "").Trim().ToLower()
    return (
        $s -eq "critical" -or
        $s -eq "urgent" -or
        $s -eq "high" -or
        $s -eq "p1" -or
        $s -eq "p0"
    )
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

$Rows = @()

if (Test-Path $ItFile) {
    $Rows = Import-Csv -Path $ItFile
}

$Open = 0
$Closed = 0
$Critical = 0
$Overdue = 0
$TotalOpenAge = 0
$Now = Get-Date

$HasPriority = $false
$HasDueDate = $false
$HasDepartment = $false

if ($Rows.Count -gt 0) {
    $Headers = $Rows[0].PSObject.Properties.Name
    $HasPriority = $Headers -contains "priority"
    $HasDueDate = $Headers -contains "due_date"
    $HasDepartment = $Headers -contains "department"
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

    if (Test-ClosedStatus $Status) {
        $Closed++
    }

    if ((Test-OpenStatus $Status) -and (Test-CriticalPriority $Priority)) {
        $Critical++
    }
}

$AverageAgeDays = 0
if ($Open -gt 0) {
    $AverageAgeDays = [math]::Round($TotalOpenAge / $Open)
}

$Missing = @()
if (-not $HasPriority) { $Missing += "priority" }
if (-not $HasDueDate) { $Missing += "due_date" }
if (-not $HasDepartment) { $Missing += "department" }

$Today = Get-Date -Format "yyyy-MM-dd"

# Arabic strings generated from Unicode escapes.
$title = U "\u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0625\u062f\u0627\u0631\u064a\u0629"
$note = U "\u0647\u0630\u0647 \u0627\u0644\u0644\u0648\u062d\u0629 \u062a\u0639\u0631\u0636 \u0645\u0624\u0634\u0631\u0627\u062a \u0645\u062c\u0645\u0639\u0629 \u0641\u0642\u0637 \u0648\u0644\u0627 \u062a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062a."
$itLabel = U "\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a"
$maintenanceLabel = U "\u0627\u0644\u0635\u064a\u0627\u0646\u0629"
$hrLabel = U "\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629"
$procurementLabel = U "\u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a"
$financeLabel = U "\u0627\u0644\u0645\u0627\u0644\u064a\u0629"
$licensesLabel = U "\u0627\u0644\u0631\u062e\u0635"
$updated = U "\u0645\u062d\u062f\u062b"
$partial = U "\u062c\u0632\u0626\u064a"
$notAvailable = U "\u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631"
$waiting = U "\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"
$undefined = U "\u063a\u064a\u0631 \u0645\u062d\u062f\u062f"
$medium = U "\u0645\u062a\u0648\u0633\u0637"
$high = U "\u0639\u0627\u0644\u064a"

$ItQualityStatus = $updated
$ItQualityMessage = "IT file loaded successfully."

if ($Rows.Count -eq 0) {
    $ItQualityStatus = $notAvailable
    $ItQualityMessage = "data_exports/it_tickets.csv was not found or is empty."
}
elseif ($Missing.Count -gt 0) {
    $ItQualityStatus = $partial
    $ItQualityMessage = "IT file is readable, but these columns are missing: " + ($Missing -join ", ") + "."
}

$BottleneckDepartment = $undefined
if ($Open -gt 0) {
    $BottleneckDepartment = $itLabel
}

$Score = $Open + ($Overdue * 3) + ($Critical * 5)
$Level = $medium
if ($Overdue -gt 0 -or $Critical -gt 0) {
    $Level = $high
}

$BottlenecksJson = "[]"
if ($Open -gt 0) {
    $Reason = "There are $Open open IT tickets based on the export file."
    $BottlenecksJson = @"
[
    {
      "department": "$itLabel",
      "open": $Open,
      "overdue": $Overdue,
      "critical": $Critical,
      "score": $Score,
      "level": "$Level",
      "reason": "$Reason"
    }
  ]
"@
}

$AlertsItems = @()
if ($Open -gt 0) { $AlertsItems += "There are $Open open IT tickets." }
if ($Critical -gt 0) { $AlertsItems += "There are $Critical critical IT tickets." }
if ($Overdue -gt 0) { $AlertsItems += "There are $Overdue overdue IT tickets." }
if ($Rows.Count -eq 0) { $AlertsItems += "IT export file has not been loaded yet." }
$AlertsItems += "Maintenance data is waiting for first export file."
$AlertsItems += "HR data is waiting for first export file."
$AlertsItems += "Finance and license data are not added yet."

$AlertsJson = ($AlertsItems | ConvertTo-Json -Depth 5)
if ($AlertsItems.Count -eq 1) {
    $AlertsJson = "[" + ($AlertsItems[0] | ConvertTo-Json) + "]"
}

$Output = @"
// dashboard-data.js
// Generated by tools/build-dashboard-data.ps1
// Summary indicators only. Do not store sensitive request details here.

window.managementDashboardData = {
  "meta": {
    "title": "$title",
    "version": "v1.0",
    "lastUpdated": "$Today",
    "dataSource": "Excel / CSV exports",
    "note": "$note"
  },
  "summary": {
    "openRequests": $Open,
    "overdueRequests": $Overdue,
    "criticalRequests": $Critical,
    "pendingInvoices": 0,
    "expiringLicenses": 0,
    "bottleneckDepartment": "$BottleneckDepartment"
  },
  "it": {
    "label": "$itLabel",
    "open": $Open,
    "critical": $Critical,
    "overdue": $Overdue,
    "closed": $Closed,
    "averageAgeDays": $AverageAgeDays,
    "status": "$updated"
  },
  "maintenance": {
    "label": "$maintenanceLabel",
    "open": 0,
    "critical": 0,
    "overdue": 0,
    "closed": 0,
    "averageAgeDays": 0,
    "status": "$waiting"
  },
  "hr": {
    "label": "$hrLabel",
    "pendingLeave": 0,
    "pendingPermission": 0,
    "pendingBusinessTrip": 0,
    "pendingWorkPermit": 0,
    "totalPending": 0,
    "status": "$waiting"
  },
  "procurement": {
    "label": "$procurementLabel",
    "inProgress": 0,
    "pendingApproval": 0,
    "overdue": 0,
    "status": "$waiting"
  },
  "finance": {
    "label": "$financeLabel",
    "pendingInvoices": 0,
    "pendingContractorPayments": 0,
    "overduePayments": 0,
    "status": "$waiting"
  },
  "licenses": {
    "label": "$licensesLabel",
    "expiringIn30Days": 0,
    "expiringIn60Days": 0,
    "expired": 0,
    "status": "$waiting"
  },
  "bottlenecks": $BottlenecksJson,
  "alerts": $AlertsJson,
  "dataQuality": {
    "it": {
      "status": "$ItQualityStatus",
      "message": "$ItQualityMessage"
    },
    "maintenance": {
      "status": "$notAvailable",
      "message": "Maintenance export file has not been uploaded yet."
    },
    "hr": {
      "status": "$notAvailable",
      "message": "HR export file has not been uploaded yet."
    },
    "finance": {
      "status": "$notAvailable",
      "message": "Finance export file has not been uploaded yet."
    },
    "licenses": {
      "status": "$notAvailable",
      "message": "Licenses export file has not been uploaded yet."
    }
  }
};
"@

Set-Content -Path $OutputFile -Value $Output -Encoding UTF8

Write-Host "Generated dashboard-data.js"
Write-Host "IT rows: $($Rows.Count)"
Write-Host "IT open: $Open"
Write-Host "IT closed: $Closed"
Write-Host "IT critical: $Critical"
Write-Host "IT overdue: $Overdue"