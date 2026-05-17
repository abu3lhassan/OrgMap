# Finance Dashboard Export Template

## الهدف

هذه الوثيقة تحدد الأعمدة المطلوبة من تصدير المالية حتى تستطيع لوحة المتابعة الإدارية في OrgMap حساب مؤشرات الفواتير والمستخلصات والمدفوعات المتأخرة بدقة.

الملف المطلوب تصديره من المالية يجب أن يكون بصيغة CSV وباسم:

```text
finance_items.csv
```

ويتم حفظه محليًا داخل:

```text
data_exports/finance_items.csv
```

مهم: هذا الملف لا يتم رفعه إلى GitHub، لأنه قد يحتوي على بيانات مالية أو موردين أو مستخلصات أو مبالغ.

---

## نطاق الملف

الملف يمكن أن يحتوي على أكثر من نوع مالي، مثل:

```text
invoice
contractor_payment
claim
advance_payment
```

ومعناها:

| item_type | المعنى |
|---|---|
| invoice | فاتورة |
| contractor_payment | مستخلص مقاول / مورد |
| claim | مطالبة |
| advance_payment | دفعة مقدمة |

---

## الأعمدة المطلوبة

| Column | Required | Description |
|---|---:|---|
| item_id | Yes | الرقم الداخلي للبند المالي |
| item_number | Yes | رقم الفاتورة أو المستخلص أو المطالبة |
| item_type | Yes | نوع البند المالي |
| vendor | Optional | المورد أو المقاول |
| department | Optional | الإدارة المرتبطة |
| amount | Optional | المبلغ |
| status | Yes | حالة البند المالي |
| current_stage | Optional | المرحلة الحالية مثل مراجعة، اعتماد، دفع |
| assigned_to | Optional | معرف المسؤول الحالي |
| assigned_to_name | Optional | اسم المسؤول الحالي |
| received_date | Yes | تاريخ استلام الفاتورة أو المستخلص |
| due_date | Optional | تاريخ الاستحقاق أو الموعد المستهدف |
| approved_date | Optional | تاريخ الاعتماد |
| paid_date | Optional | تاريخ الدفع |
| notes | Optional | ملاحظات مختصرة |

---

## القيم المقبولة لنوع البند

يفضل أن تكون قيمة `item_type` واحدة من التالي:

```text
invoice
contractor_payment
claim
advance_payment
```

---

## القيم المقبولة للحالة

يفضل أن تكون قيمة `status` واحدة من التالي:

```text
new
pending
under review
pending approval
approved
ready for payment
paid
rejected
cancelled
closed
```

المرحلة الأولى من الداشبورد ستحسب:

### الفواتير المعلقة

إذا كان:

```text
item_type = invoice
```

والحالة ليست نهائية.

### المستخلصات المعلقة

إذا كان:

```text
item_type = contractor_payment
```

والحالة ليست نهائية.

### المدفوعات المتأخرة

إذا كان البند غير مدفوع و `due_date` أقدم من تاريخ اليوم.

### الحالات النهائية

تعتبر الحالات التالية نهائية:

```text
paid
rejected
cancelled
closed
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

### الفواتير المعلقة

من `item_type = invoice` والحالة غير نهائية.

### المستخلصات المعلقة

من `item_type = contractor_payment` والحالة غير نهائية.

### المدفوعات المتأخرة

إذا كان البند غير نهائي و `due_date` أقدم من تاريخ اليوم.

### إجمالي المبالغ المعلقة

من `amount` عند توفره.

### جودة البيانات

إذا كان الملف لا يحتوي على:

```text
item_type
status
received_date
```

سيظهر في الداشبورد أن جودة بيانات المالية جزئية.

---

## مثال CSV

```csv
item_id,item_number,item_type,vendor,department,amount,status,current_stage,assigned_to,assigned_to_name,received_date,due_date,approved_date,paid_date,notes
1,INV-0001,invoice,Vendor A,Operations,4500,pending approval,Approval,41,Finance Officer,2026-05-10,2026-05-15,,,
2,CP-0001,contractor_payment,Contractor B,Maintenance,22000,under review,Review,42,Finance Manager,2026-05-09,2026-05-13,,,
3,INV-0002,invoice,Vendor C,IT,7800,paid,Paid,41,Finance Officer,2026-05-01,2026-05-10,2026-05-06,2026-05-09,Paid
4,CP-0002,contractor_payment,Contractor D,Projects,35000,ready for payment,Payment,43,Accountant,2026-05-12,2026-05-16,,,
```

---

## ملاحظات أمان

لا ترفع ملف `finance_items.csv` إلى GitHub.

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

بعد تحديث السكربت في مرحلة لاحقة، سيتم وضع ملف المالية داخل:

```text
data_exports/finance_items.csv
```

ثم تشغيل:

```powershell
powershell -ExecutionPolicy Bypass -File tools\build-dashboard-data.ps1
```

ثم فتح:

```text
management-dashboard.html
```

والتأكد من أرقام المالية.
