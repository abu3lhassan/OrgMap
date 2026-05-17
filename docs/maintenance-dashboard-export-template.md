# Maintenance Dashboard Export Template

## الهدف

هذه الوثيقة تحدد الأعمدة المطلوبة من تصدير تطبيق الصيانة حتى تستطيع لوحة المتابعة الإدارية في OrgMap حساب مؤشرات الصيانة بدقة.

الملف المطلوب تصديره من تطبيق الصيانة يجب أن يكون بصيغة CSV وباسم:

```text
maintenance_requests.csv
```

ويتم حفظه محليًا داخل:

```text
data_exports/maintenance_requests.csv
```

مهم: هذا الملف لا يتم رفعه إلى GitHub، لأنه يحتوي على بيانات تشغيلية خام.

---

## الأعمدة المطلوبة

| Column | Required | Description |
|---|---:|---|
| request_id | Yes | الرقم الداخلي لطلب الصيانة |
| request_number | Yes | رقم الطلب الظاهر للمستخدم |
| description | Optional | وصف مختصر للمشكلة أو الطلب |
| status | Yes | حالة طلب الصيانة |
| priority | Yes | أولوية الطلب |
| department | Optional | الإدارة الطالبة أو المتأثرة |
| station | Optional | اسم أو رمز المحطة المرتبطة بالطلب |
| station_code | Optional | كود المحطة إن وجد |
| category | Optional | نوع العطل أو التصنيف |
| assigned_to | Optional | رقم أو معرف الفني أو المسؤول |
| assigned_to_name | Optional | اسم الفني أو المسؤول |
| created_by | Optional | منشئ الطلب |
| created_at | Yes | تاريخ إنشاء الطلب |
| due_date | Yes | تاريخ الاستحقاق أو SLA |
| closed_at | Optional | تاريخ الإغلاق |
| resolution | Optional | ملخص الحل |

---

## القيم المقبولة لحالة الطلب

يفضل أن تكون قيمة `status` واحدة من التالي:

```text
open
new
pending
in progress
under review
closed
completed
resolved
```

السكربت لاحقًا سيحتسب الحالات المفتوحة إذا كانت:

```text
open
new
pending
in progress
under review
opened
```

ويحتسب الحالات المغلقة إذا كانت:

```text
closed
completed
done
resolved
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
p0
p1
```

وسيتم احتساب الطلب كـ Critical إذا كانت الأولوية:

```text
critical
urgent
high
p0
p1
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

### طلبات الصيانة المفتوحة

من `status`.

### طلبات الصيانة المغلقة

من `status`.

### طلبات الصيانة الحرجة

من `priority`.

### طلبات الصيانة المتأخرة

إذا كان الطلب مفتوحًا و `due_date` أقدم من تاريخ اليوم.

### متوسط عمر طلبات الصيانة المفتوحة

من الفرق بين `created_at` وتاريخ اليوم.

### أكثر محطة أو إدارة عليها ضغط

من `station` أو `department` عند توفرها.

### جودة البيانات

إذا كان الملف لا يحتوي على:

```text
priority
due_date
station أو department
```

سيظهر في الداشبورد أن جودة بيانات الصيانة جزئية.

---

## مثال CSV

```csv
request_id,request_number,description,status,priority,department,station,station_code,category,assigned_to,assigned_to_name,created_by,created_at,due_date,closed_at,resolution
1,MT-0001,Dispenser issue,open,high,Operations,Station 01,ST-001,Dispenser,21,Technician A,Ali,2026-05-10,2026-05-12,,
2,MT-0002,Lighting repair,closed,medium,Operations,Station 02,ST-002,Electrical,22,Technician B,Khalid,2026-05-08,2026-05-11,2026-05-09,Resolved
3,MT-0003,Fuel leak,in progress,critical,Safety,Station 03,ST-003,Safety,23,Technician C,Fahad,2026-05-14,2026-05-14,,
```

---

## ملاحظات أمان

لا ترفع ملف `maintenance_requests.csv` إلى GitHub.

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

بعد تحديث السكربت في مرحلة لاحقة، سيتم وضع ملف الصيانة داخل:

```text
data_exports/maintenance_requests.csv
```

ثم تشغيل:

```powershell
powershell -ExecutionPolicy Bypass -File tools\build-dashboard-data.ps1
```

ثم فتح:

```text
management-dashboard.html
```

والتأكد من أرقام الصيانة.
