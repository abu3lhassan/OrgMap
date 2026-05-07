# Interactive Org Map - GitHub Pages Version

هذه نسخة جاهزة للنشر السريع على GitHub Pages.

## الملفات
- `index.html` : الصفحة الرئيسية الجاهزة للنشر

## خطوات النشر على GitHub Pages
1. أنشئ Repository جديد في GitHub.
2. ارفع ملف `index.html` إلى الـ Repository.
3. ادخل إلى:
   - Settings
   - Pages
4. في Source اختر:
   - Deploy from a branch
5. اختر:
   - Branch: `main`
   - Folder: `/root`
6. اضغط Save.
7. انتظر دقيقة أو دقيقتين حتى يظهر رابط النشر.

## التعديل على البيانات
البيانات كلها موجودة داخل `index.html` في كائن JavaScript اسمه `data`.
يمكنك تعديل:
- أسماء الإدارات
- أسماء الموظفين
- الرواتب
- المحطات
- أعداد العمالة

## ملاحظة
هذه نسخة MVP ثابتة وسريعة.
المرحلة التالية المقترحة:
- فصل البيانات إلى ملف `data.json`
- إضافة بحث
- إضافة فلترة
- إضافة تصدير PDF أو Excel
- ربط داخلي مع SharePoint لاحقا
