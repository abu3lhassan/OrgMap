# Procurement Dashboard Export Template

## الهدف

هذه الوثيقة تحدد الأعمدة المطلوبة من تصدير طلبات المشتريات حتى تستطيع لوحة المتابعة الإدارية في OrgMap حساب مؤشرات المشتريات بدقة.

الملف المطلوب تصديره من نظام أو ملف المشتريات يجب أن يكون بصيغة CSV وباسم:

```text
procurement_requests.csv
```

ويتم حفظه محليًا داخل:

```text
data_exports/procurement_requests.csv
```

مهم: هذا الملف لا يتم رفعه إلى GitHub، لأنه قد يحتوي على بيانات تشغيلية أو مالية أو موردين.

---

## الأعمدة المطلوبة

| Column | Required | Description |
|---|---:|---|
| request_id | Yes | الرقم الداخلي لطلب الشراء |
| request_number | Yes | رقم الطلب الظاهر للمستخدم |
| request_title | Optional | عنوان مختصر للطلب |
| requesting_department | Yes | الإدارة الطالبة |
| status | Yes | حالة طلب الشراء |
| priority | Optional | أولوية الطلب |
| category | Optional | نوع أو تصنيف الطلب |
| amount | Optional | القيمة المتوقعة أو قيمة الطلب |
| vendor | Optional | المورد، إن وجد |
| assigned_to | Optional | رقم أو معرف المسؤول |
| assigned_to_name | Optional | اسم المسؤول الحالي |
| current_stage | Optional | المرحلة الحالية مثل مراجعة، اعتماد، عروض أسعار |
| created_at | Yes | تاريخ إنشاء الطلب |
| due_date | Optional | تاريخ الاستحقاق أو SLA |
| approved_at | Optional | تاريخ الاعتماد |
| closed_at | Optional | تاريخ الإغلاق أو الإكمال |
| notes | Optional | ملاحظات مختصرة |

---

## القيم المقبولة لحالة طلب الشراء

يفضل أن تكون قيمة `status` واحدة من التالي:

```text
new
pending
in progress
under review
pending approval
approved
ordered
completed
closed
cancelled
rejected
```

المرحلة الأولى من الداشبورد ستحسب:

### تحت الإجراء

إذا كانت الحالة:

```text
new
pending
in progress
under review
ordered
```

### بانتظار اعتماد

إذا كانت الحالة:

```text
pending approval
```

### متأخر

إذا كان الطلب غير مغلق و `due_date` أقدم من تاريخ اليوم.

### مغلق أو مكتمل

إذا كانت الحالة:

```text
completed
closed
cancelled
rejected
```

---

## القيم المقبولة للأولوية

يفضل أن تكون قيمة `priority` واحدة من التالي:

```text
low
medium
high
urgent
critical
```

---

## صيغة التاريخ

يفضل استخدام صيغة تاريخ واضحة وثابتة مثل:

```text
YYYY-MM-DD
```

أو:

```text
YYYY-MM-DD HH:mm:ss
```

أمثلة:

```text
2026-05-17
2026-05-17 14:30:00
```

---

## كيف سيتم حساب المؤشرات

لوحة المتابعة الإدارية ستحسب لاحقًا:

### طلبات المشتريات تحت الإجراء

من `status`.

### طلبات بانتظار اعتماد

من `status = pending approval`.

### الطلبات المتأخرة

إذا كان الطلب غير مغلق و `due_date` أقدم من تاريخ اليوم.

### إجمالي قيمة الطلبات المفتوحة

من `amount` عند توفره.

### أكثر إدارة لديها طلبات مشتريات

من `requesting_department`.

### جودة البيانات

إذا كان الملف لا يحتوي على:

```text
requesting_department
status
created_at
```

سيظهر في الداشبورد أن جودة بيانات المشتريات جزئية.

---

## مثال CSV

```csv
request_id,request_number,request_title,requesting_department,status,priority,category,amount,vendor,assigned_to,assigned_to_name,current_stage,created_at,due_date,approved_at,closed_at,notes
1,PR-0001,Office supplies,Operations,pending,medium,Consumables,2500,Vendor A,31,Procurement Officer,Review,2026-05-10,2026-05-15,,,
2,PR-0002,Spare parts,Maintenance,pending approval,high,Spare Parts,12000,Vendor B,32,Procurement Manager,Approval,2026-05-11,2026-05-13,,,
3,PR-0003,IT equipment,IT,completed,medium,Equipment,8500,Vendor C,31,Procurement Officer,Completed,2026-05-05,2026-05-12,2026-05-08,2026-05-10,Delivered
4,PR-0004,Safety tools,Safety,in progress,urgent,Safety,4300,Vendor D,33,Buyer,Quotation,2026-05-14,2026-05-16,,,
```

---

## ملاحظات أمان

لا ترفع ملف `procurement_requests.csv` إلى GitHub.

الملف التفصيلي يبقى في:

```text
data_exports/
```

أو في SharePoint.

الذي يتم رفعه إلى GitHub هو الملف المجمع فقط:

```text
dashboard-data.js
```

---

## أمر تحديث الداشبورد لاحقًا

بعد تحديث السكربت في مرحلة لاحقة، سيتم وضع ملف المشتريات داخل:

```text
data_exports/procurement_requests.csv
```

ثم تشغيل:

```powershell
powershell -ExecutionPolicy Bypass -File tools\build-dashboard-data.ps1
```

ثم فتح:

```text
management-dashboard.html
```

والتأكد من أرقام المشتريات.
