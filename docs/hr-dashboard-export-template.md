# HR Dashboard Export Template

## الهدف

هذه الوثيقة تحدد الأعمدة المطلوبة من تصدير تطبيق الموارد البشرية حتى تستطيع لوحة المتابعة الإدارية في OrgMap حساب مؤشرات طلبات HR بدقة.

الملف المطلوب تصديره من تطبيق HR يجب أن يكون بصيغة CSV وباسم:

```text
hr_requests.csv
```

ويتم حفظه محليًا داخل:

```text
data_exports/hr_requests.csv
```

مهم: هذا الملف لا يتم رفعه إلى GitHub، لأنه يحتوي على بيانات تشغيلية وموارد بشرية خام.

---

## أنواع طلبات HR المطلوبة

المرحلة الأولى تركز على الأنواع التالية:

```text
leave
permission
business_trip
work_permit
```

ومعناها:

| request_type | المعنى |
|---|---|
| leave | إجازة |
| permission | استئذان |
| business_trip | رحلة عمل |
| work_permit | إذن عمل |

---

## الأعمدة المطلوبة

| Column | Required | Description |
|---|---:|---|
| request_id | Yes | الرقم الداخلي للطلب |
| request_number | Optional | رقم الطلب الظاهر للمستخدم |
| employee_id | Optional | رقم الموظف |
| employee_name | Optional | اسم الموظف |
| employee_department | Yes | إدارة الموظف |
| request_type | Yes | نوع الطلب |
| status | Yes | حالة الطلب |
| current_approver | Optional | المعتمد أو المسؤول الحالي |
| created_at | Yes | تاريخ إنشاء الطلب |
| approved_at | Optional | تاريخ الاعتماد |
| closed_at | Optional | تاريخ الإغلاق أو الإكمال |
| notes | Optional | ملاحظات مختصرة |

---

## القيم المقبولة لنوع الطلب

يفضل أن تكون قيمة `request_type` واحدة من التالي:

```text
leave
permission
business_trip
work_permit
```

إذا كان تطبيق HR يصدر القيم بالعربي، يمكن لاحقًا إضافة Mapping في السكربت، مثل:

```text
إجازة → leave
استئذان → permission
رحلة عمل → business_trip
إذن عمل → work_permit
```

---

## القيم المقبولة لحالة الطلب

يفضل أن تكون قيمة `status` واحدة من التالي:

```text
pending
in progress
under review
approved
rejected
cancelled
closed
completed
```

السكربت لاحقًا سيحتسب الطلبات تحت الإجراء إذا كانت:

```text
pending
in progress
under review
```

وسيستبعد من المؤشرات التشغيلية الحالات النهائية مثل:

```text
approved
rejected
cancelled
closed
completed
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

### طلبات الإجازات تحت الإجراء

من `request_type = leave` وحالة الطلب غير نهائية.

### طلبات الاستئذان تحت الإجراء

من `request_type = permission` وحالة الطلب غير نهائية.

### طلبات رحلات العمل تحت الإجراء

من `request_type = business_trip` وحالة الطلب غير نهائية.

### طلبات إذن العمل تحت الإجراء

من `request_type = work_permit` وحالة الطلب غير نهائية.

### إجمالي طلبات HR تحت الإجراء

مجموع الأنواع السابقة.

### جودة البيانات

إذا كان الملف لا يحتوي على:

```text
employee_department
request_type
status
created_at
```

سيظهر في الداشبورد أن جودة بيانات HR جزئية.

---

## مثال CSV

```csv
request_id,request_number,employee_id,employee_name,employee_department,request_type,status,current_approver,created_at,approved_at,closed_at,notes
1,HR-0001,1001,Employee A,Operations,leave,pending,HR Manager,2026-05-10,,,
2,HR-0002,1002,Employee B,Maintenance,permission,approved,Line Manager,2026-05-11,2026-05-11,2026-05-11,Approved
3,HR-0003,1003,Employee C,Finance,business_trip,under review,Finance Manager,2026-05-12,,,
4,HR-0004,1004,Employee D,IT,work_permit,in progress,HR Officer,2026-05-13,,,
```

---

## ملاحظات أمان

لا ترفع ملف `hr_requests.csv` إلى GitHub.

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

بعد تحديث السكربت في مرحلة لاحقة، سيتم وضع ملف HR داخل:

```text
data_exports/hr_requests.csv
```

ثم تشغيل:

```powershell
powershell -ExecutionPolicy Bypass -File tools\build-dashboard-data.ps1
```

ثم فتح:

```text
management-dashboard.html
```

والتأكد من أرقام HR.
