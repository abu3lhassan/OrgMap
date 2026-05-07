نسخة Level Up لصفحات GitHub.

المميزات الجديدة:
1. Dashboard قبل الشجرة:
   - إجمالي الرواتب
   - عدد الإدارات
   - عدد الموظفين والمناصب
   - عدد المحطات
   - عدد عمال المحطات
   - متوسط تكلفة المحطة
   - أعلى الفروع تكلفة
   - حالة جودة البيانات

2. Version Log:
   - داخل data.js يوجد meta:
     version, lastUpdated, updatedBy, notes

3. View Modes:
   - Public: بدون رواتب
   - Management: إجماليات فقط
   - HR: تفاصيل كاملة بعد الرمز
   - Finance: تفاصيل كاملة بعد الرمز

4. Compare Tool:
   - compare.html لمقارنة ملفين data.js
   - يعرض المضاف والمحذوف وتغيرات الرواتب والتبعية وفرق الإجمالي

ملاحظة:
الرمز الحالي للرواتب: 1234
لتغييره افتح index.html وابحث عن:
const SALARY_ACCESS_CODE = '1234';
