// dashboard-data.js
// Management Follow-up Dashboard aggregated data
// This file should contain summary indicators only.
// Do not store sensitive request details here.

window.managementDashboardData = {
  meta: {
    title: "لوحة المتابعة الإدارية",
    version: "v1.0",
    lastUpdated: "2026-05-17",
    dataSource: "Excel / CSV exports",
    note: "هذه اللوحة تعرض مؤشرات مجمعة فقط ولا تحتوي على تفاصيل الطلبات."
  },

  summary: {
    openRequests: 0,
    overdueRequests: 0,
    criticalRequests: 0,
    pendingInvoices: 0,
    expiringLicenses: 0,
    bottleneckDepartment: "غير محدد"
  },

  it: {
    label: "تقنية المعلومات",
    open: 9,
    critical: 0,
    overdue: 0,
    closed: 8,
    averageAgeDays: 0,
    status: "محدث"
  },

  maintenance: {
    label: "الصيانة",
    open: 0,
    critical: 0,
    overdue: 0,
    closed: 0,
    averageAgeDays: 0,
    status: "بانتظار البيانات"
  },

  hr: {
    label: "الموارد البشرية",
    pendingLeave: 0,
    pendingPermission: 0,
    pendingBusinessTrip: 0,
    pendingWorkPermit: 0,
    totalPending: 0,
    status: "بانتظار البيانات"
  },

  procurement: {
    label: "المشتريات",
    inProgress: 0,
    pendingApproval: 0,
    overdue: 0,
    status: "بانتظار البيانات"
  },

  finance: {
    label: "المالية",
    pendingInvoices: 0,
    pendingContractorPayments: 0,
    overduePayments: 0,
    status: "بانتظار البيانات"
  },

  licenses: {
    label: "الرخص",
    expiringIn30Days: 0,
    expiringIn60Days: 0,
    expired: 0,
    status: "بانتظار البيانات"
  },

  bottlenecks: [
    {
      department: "تقنية المعلومات",
      open: 9,
      overdue: 0,
      critical: 0,
      score: 9,
      level: "متوسط",
      reason: "يوجد 9 طلبات مفتوحة حسب ملف IT التجريبي."
    }
  ],

  alerts: [
    "تم تحميل بيانات IT التجريبية.",
    "بيانات الصيانة بانتظار أول ملف تصدير.",
    "بيانات HR بانتظار أول ملف تصدير.",
    "بيانات الفواتير والرخص غير مضافة بعد."
  ],

  dataQuality: {
    it: {
      status: "جزئي",
      message: "ملف IT يحتوي على الطلبات المفتوحة والمغلقة، لكنه لا يحتوي على priority أو due_date أو department."
    },
    maintenance: {
      status: "غير متوفر",
      message: "لم يتم رفع ملف الصيانة بعد."
    },
    hr: {
      status: "غير متوفر",
      message: "لم يتم رفع ملف HR بعد."
    },
    finance: {
      status: "غير متوفر",
      message: "لم يتم رفع ملف الفواتير أو المستخلصات بعد."
    },
    licenses: {
      status: "غير متوفر",
      message: "لم يتم رفع ملف الرخص بعد."
    }
  }
};