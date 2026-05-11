const data = {
  "meta": {
    "version": "v1.0",
    "lastUpdated": "-",
    "notes": "Dummy Data - تحديث أنواع المحطات: مستأجرة / مشغلة / امتياز تجاري"
  },
  "company": {
    "name": "مجلس الإدارة",
    "subtitle": "Board of Directors",
    "type": "company",
    "is_cost_center": false,
    "layout": "vertical",
    "tone": "primary",
    "status": "active",
    "notes": "أعلى الهرم",
    "children": [
      {
        "name": "أعضاء مجلس الإدارة",
        "subtitle": "Board Members",
        "type": "division",
        "is_cost_center": false,
        "layout": "horizontal",
        "tone": "secondary",
        "status": "active",
        "notes": "مجموعة أفقية لأعضاء المجلس",
        "children": [
          {
            "name": "رئيس مجلس الإدارة",
            "subtitle": "رئيس مجلس الإدارة",
            "type": "employee",
            "is_cost_center": false,
            "layout": "horizontal",
            "tone": "secondary",
            "status": "active",
            "children": []
          },
          {
            "name": "نائب رئيس مجلس الإدارة",
            "subtitle": "نائب رئيس مجلس الإدارة",
            "type": "employee",
            "is_cost_center": false,
            "layout": "horizontal",
            "tone": "secondary",
            "status": "active",
            "children": []
          },
          {
            "name": "عضو مجلس الإدارة 1",
            "subtitle": "عضو",
            "type": "employee",
            "is_cost_center": false,
            "layout": "horizontal",
            "tone": "secondary",
            "status": "active",
            "children": []
          },
          {
            "name": "عضو مجلس الإدارة 2",
            "subtitle": "عضو",
            "type": "employee",
            "is_cost_center": false,
            "layout": "horizontal",
            "tone": "secondary",
            "status": "active",
            "children": []
          }
        ]
      },
      {
        "name": "الشركة",
        "subtitle": "Company",
        "type": "division",
        "is_cost_center": false,
        "layout": "vertical",
        "tone": "primary",
        "status": "active",
        "image": "ologo.png",
        "notes": "تحت مجلس الإدارة",
        "children": [
          {
            "name": "الإدارة التنفيذية",
            "subtitle": "Executive Management",
            "type": "executive_root",
            "is_cost_center": false,
            "layout": "vertical",
            "tone": "secondary",
            "status": "active",
            "notes": "تحت الشركة مباشرة؛ CEO فوق الإدارات.",
            "children": [
              {
                "name": "عبدالعزيز البراك",
                "subtitle": "الرئيس التنفيذي CEO",
                "type": "c_level",
                "is_cost_center": false,
                "layout": "horizontal",
                "tone": "primary",
                "status": "active",
                "notes": "عضو مجلس الإدارة - رئيس تنفيذي. تحته CFO و COO والإدارات مباشرة بدون أدوار C-Level إضافية.",
                "children": [
                  {
                    "name": "CFO",
                    "subtitle": "الرئيس المالي",
                    "type": "c_level",
                    "is_cost_center": false,
                    "layout": "vertical",
                    "tone": "warning",
                    "status": "active",
                    "notes": "تحت CEO؛ تحته الإدارة المالية",
                    "children": [
                      {
                        "name": "الإدارة المالية",
                        "subtitle": "Finance Dept",
                        "type": "department",
                        "is_cost_center": true,
                        "layout": "vertical",
                        "tone": "dark",
                        "status": "active",
                        "notes": "تحت CFO؛ المدير ثم الموظفون أفقيًا",
                        "children": [
                          {
                            "name": "المدير المالي",
                            "subtitle": "Finance Director",
                            "type": "manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدير الإدارة؛ الموظفون تحته أفقيًا",
                            "children": [
                              {
                                "name": "موظف 1 - المالية",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 2 - المالية",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 3 - المالية",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "COO - شاغر",
                    "subtitle": "رئيس العمليات التنفيذي",
                    "type": "c_level",
                    "is_cost_center": false,
                    "layout": "vertical",
                    "tone": "vacant",
                    "status": "vacant",
                    "notes": "تحت CEO؛ منصب شاغر، وتحته التشغيل والمدراء الإقليميون والمحطات",
                    "children": [
                      {
                        "name": "إدارة العمليات",
                        "subtitle": "Operations",
                        "type": "department",
                        "is_cost_center": true,
                        "layout": "vertical",
                        "tone": "dark",
                        "status": "active",
                        "notes": "تحت COO؛ مدير العمليات ثم موظفون أفقيًا",
                        "children": [
                          {
                            "name": "مدير العمليات / الافتتاحات",
                            "subtitle": "Operations / Openings Manager",
                            "type": "manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "vacant",
                            "status": "vacant",
                            "notes": "منصب شاغر؛ الموظفون تحته أفقيًا",
                            "children": [
                              {
                                "name": "موظف 1 - العمليات",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 2 - العمليات",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "المدراء الإقليميون",
                        "subtitle": "Regional Managers",
                        "type": "division",
                        "is_cost_center": false,
                        "layout": "horizontal",
                        "tone": "secondary",
                        "status": "active",
                        "notes": "مجموعة عرض للمدراء الإقليميين تحت COO",
                        "children": [
                          {
                            "name": "مدير إقليمي - الرياض",
                            "subtitle": "Regional Manager - الرياض",
                            "type": "regional_manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدراء المناطق تحته أفقيًا",
                            "children": [
                              {
                                "name": "مدير منطقة الرياض 1",
                                "subtitle": "مدير منطقة",
                                "type": "area_manager",
                                "is_cost_center": false,
                                "layout": "horizontal",
                                "tone": "purple",
                                "status": "active",
                                "notes": "مدير منطقة؛ المحطات تحته أفقيًا",
                                "children": [
                                  {
                                    "name": "AJZALA",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة AJZALA",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - AJZALA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - AJZALA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-001",
                                    "city": "الرياض",
                                    "district": "حي تجريبي 1",
                                    "station_workers": 6
                                  },
                                  {
                                    "name": "OWEMER",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة OWEMER",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - OWEMER",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - OWEMER",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-002",
                                    "city": "الدمام",
                                    "district": "حي تجريبي 2",
                                    "station_workers": 7
                                  },
                                  {
                                    "name": "TWAIQ",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة TWAIQ",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - TWAIQ",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - TWAIQ",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-003",
                                    "city": "جدة",
                                    "district": "حي تجريبي 3",
                                    "station_workers": 8
                                  },
                                  {
                                    "name": "ZEER",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة ZEER",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - ZEER",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - ZEER",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-004",
                                    "city": "الخرج",
                                    "district": "حي تجريبي 4",
                                    "station_workers": 9
                                  },
                                  {
                                    "name": "MAWEED",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة MAWEED",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - MAWEED",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - MAWEED",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-005",
                                    "city": "الخبر",
                                    "district": "حي تجريبي 5",
                                    "station_workers": 10
                                  },
                                  {
                                    "name": "ABA ALKHEL",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة ABA ALKHEL",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - ABA ALKHEL",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - ABA ALKHEL",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-006",
                                    "city": "مكة",
                                    "district": "حي تجريبي 6",
                                    "station_workers": 6
                                  },
                                  {
                                    "name": "ABU BKER",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة ABU BKER",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - ABU BKER",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - ABU BKER",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-007",
                                    "city": "المدينة",
                                    "district": "حي تجريبي 7",
                                    "station_workers": 7
                                  },
                                  {
                                    "name": "Al Araid 1",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة Al Araid 1",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - Al Araid 1",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - Al Araid 1",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-008",
                                    "city": "الأحساء",
                                    "district": "حي تجريبي 8",
                                    "station_workers": 8
                                  }
                                ]
                              },
                              {
                                "name": "مدير منطقة الرياض 2",
                                "subtitle": "مدير منطقة",
                                "type": "area_manager",
                                "is_cost_center": false,
                                "layout": "horizontal",
                                "tone": "purple",
                                "status": "active",
                                "notes": "مدير منطقة؛ المحطات تحته أفقيًا",
                                "children": [
                                  {
                                    "name": "RAYA",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة RAYA",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - RAYA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - RAYA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-009",
                                    "city": "الطائف",
                                    "district": "حي تجريبي 9",
                                    "station_workers": 9
                                  },
                                  {
                                    "name": "SADDI",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة SADDI",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - SADDI",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - SADDI",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-010",
                                    "city": "الرياض",
                                    "district": "حي تجريبي 10",
                                    "station_workers": 10
                                  },
                                  {
                                    "name": "SAHLA",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة SAHLA",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - SAHLA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - SAHLA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-011",
                                    "city": "الدمام",
                                    "district": "حي تجريبي 11",
                                    "station_workers": 6
                                  },
                                  {
                                    "name": "LABAN",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة LABAN",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - LABAN",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - LABAN",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-012",
                                    "city": "جدة",
                                    "district": "حي تجريبي 12",
                                    "station_workers": 7
                                  },
                                  {
                                    "name": "HWEDI",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة HWEDI",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - HWEDI",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - HWEDI",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-013",
                                    "city": "الخرج",
                                    "district": "حي تجريبي 13",
                                    "station_workers": 8
                                  },
                                  {
                                    "name": "MANSORA",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة MANSORA",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - MANSORA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - MANSORA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-014",
                                    "city": "الخبر",
                                    "district": "حي تجريبي 14",
                                    "station_workers": 9
                                  },
                                  {
                                    "name": "NASSEM",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة NASSEM",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - NASSEM",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - NASSEM",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-015",
                                    "city": "مكة",
                                    "district": "حي تجريبي 15",
                                    "station_workers": 10
                                  },
                                  {
                                    "name": "Al Araid 2",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة Al Araid 2",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - Al Araid 2",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - Al Araid 2",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-016",
                                    "city": "المدينة",
                                    "district": "حي تجريبي 16",
                                    "station_workers": 6
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "name": "مدير إقليمي - الشرقية",
                            "subtitle": "Regional Manager - الشرقية",
                            "type": "regional_manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدراء المناطق تحته أفقيًا",
                            "children": [
                              {
                                "name": "مدير منطقة الشرقية 1",
                                "subtitle": "مدير منطقة",
                                "type": "area_manager",
                                "is_cost_center": false,
                                "layout": "horizontal",
                                "tone": "purple",
                                "status": "active",
                                "notes": "مدير منطقة؛ المحطات تحته أفقيًا",
                                "children": [
                                  {
                                    "name": "HAMADI",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة HAMADI",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - HAMADI",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - HAMADI",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-017",
                                    "city": "الأحساء",
                                    "district": "حي تجريبي 17",
                                    "station_workers": 7
                                  },
                                  {
                                    "name": "AZIZYA -1",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة AZIZYA -1",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - AZIZYA -1",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - AZIZYA -1",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-018",
                                    "city": "الطائف",
                                    "district": "حي تجريبي 18",
                                    "station_workers": 8
                                  },
                                  {
                                    "name": "ASKAR",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة ASKAR",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - ASKAR",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - ASKAR",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-019",
                                    "city": "الرياض",
                                    "district": "حي تجريبي 19",
                                    "station_workers": 9
                                  },
                                  {
                                    "name": "UM AL-SAHIK",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة UM AL-SAHIK",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - UM AL-SAHIK",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - UM AL-SAHIK",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-020",
                                    "city": "الدمام",
                                    "district": "حي تجريبي 20",
                                    "station_workers": 10
                                  },
                                  {
                                    "name": "SIHAT",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة SIHAT",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - SIHAT",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - SIHAT",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-021",
                                    "city": "جدة",
                                    "district": "حي تجريبي 21",
                                    "station_workers": 6
                                  },
                                  {
                                    "name": "MUBARKYAH",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة MUBARKYAH",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - MUBARKYAH",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - MUBARKYAH",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-022",
                                    "city": "الخرج",
                                    "district": "حي تجريبي 22",
                                    "station_workers": 7
                                  },
                                  {
                                    "name": "SALASL 1",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة SALASL 1",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - SALASL 1",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - SALASL 1",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-023",
                                    "city": "الخبر",
                                    "district": "حي تجريبي 23",
                                    "station_workers": 8
                                  },
                                  {
                                    "name": "RABIYA & NASAAR",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة RABIYA & NASAAR",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - RABIYA & NASAAR",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - RABIYA & NASAAR",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-024",
                                    "city": "مكة",
                                    "district": "حي تجريبي 24",
                                    "station_workers": 9
                                  },
                                  {
                                    "name": "MASHRGEEN",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة MASHRGEEN",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - MASHRGEEN",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - MASHRGEEN",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-025",
                                    "city": "المدينة",
                                    "district": "حي تجريبي 25",
                                    "station_workers": 10
                                  },
                                  {
                                    "name": "RAKA",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة RAKA",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - RAKA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - RAKA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-026",
                                    "city": "الأحساء",
                                    "district": "حي تجريبي 26",
                                    "station_workers": 6
                                  }
                                ]
                              },
                              {
                                "name": "مدير منطقة الشرقية 2",
                                "subtitle": "مدير منطقة",
                                "type": "area_manager",
                                "is_cost_center": false,
                                "layout": "horizontal",
                                "tone": "purple",
                                "status": "active",
                                "notes": "مدير منطقة؛ المحطات تحته أفقيًا",
                                "children": [
                                  {
                                    "name": "SUMAAN",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة SUMAAN",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - SUMAAN",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - SUMAAN",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-027",
                                    "city": "الطائف",
                                    "district": "حي تجريبي 27",
                                    "station_workers": 7
                                  },
                                  {
                                    "name": "AZIZYA -2",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة AZIZYA -2",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - AZIZYA -2",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - AZIZYA -2",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-028",
                                    "city": "الرياض",
                                    "district": "حي تجريبي 28",
                                    "station_workers": 8
                                  },
                                  {
                                    "name": "FAISALYAH",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة FAISALYAH",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - FAISALYAH",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - FAISALYAH",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-029",
                                    "city": "الدمام",
                                    "district": "حي تجريبي 29",
                                    "station_workers": 9
                                  },
                                  {
                                    "name": "JUBAIL-1",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة JUBAIL-1",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - JUBAIL-1",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - JUBAIL-1",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-030",
                                    "city": "جدة",
                                    "district": "حي تجريبي 30",
                                    "station_workers": 10
                                  },
                                  {
                                    "name": "GHADEER",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة GHADEER",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - GHADEER",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - GHADEER",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-031",
                                    "city": "الخرج",
                                    "district": "حي تجريبي 31",
                                    "station_workers": 6
                                  },
                                  {
                                    "name": "SHATI",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة SHATI",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - SHATI",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - SHATI",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-032",
                                    "city": "الخبر",
                                    "district": "حي تجريبي 32",
                                    "station_workers": 7
                                  },
                                  {
                                    "name": "SALASL 2",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة SALASL 2",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - SALASL 2",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - SALASL 2",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-033",
                                    "city": "مكة",
                                    "district": "حي تجريبي 33",
                                    "station_workers": 8
                                  },
                                  {
                                    "name": "YARMOUK",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة YARMOUK",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - YARMOUK",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - YARMOUK",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-034",
                                    "city": "المدينة",
                                    "district": "حي تجريبي 34",
                                    "station_workers": 9
                                  },
                                  {
                                    "name": "JASSER",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة JASSER",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - JASSER",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - JASSER",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-035",
                                    "city": "الأحساء",
                                    "district": "حي تجريبي 35",
                                    "station_workers": 10
                                  },
                                  {
                                    "name": "REZEZA",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة REZEZA",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - REZEZA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - REZEZA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-036",
                                    "city": "الطائف",
                                    "district": "حي تجريبي 36",
                                    "station_workers": 6
                                  }
                                ]
                              },
                              {
                                "name": "مدير منطقة الشرقية 3",
                                "subtitle": "مدير منطقة",
                                "type": "area_manager",
                                "is_cost_center": false,
                                "layout": "horizontal",
                                "tone": "purple",
                                "status": "active",
                                "notes": "مدير منطقة؛ المحطات تحته أفقيًا",
                                "children": [
                                  {
                                    "name": "KHAWARZME",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة KHAWARZME",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - KHAWARZME",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - KHAWARZME",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-037",
                                    "city": "الرياض",
                                    "district": "حي تجريبي 37",
                                    "station_workers": 7
                                  },
                                  {
                                    "name": "SHADGEM",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة SHADGEM",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - SHADGEM",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - SHADGEM",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-038",
                                    "city": "الدمام",
                                    "district": "حي تجريبي 38",
                                    "station_workers": 8
                                  },
                                  {
                                    "name": "KHATHLAN",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة KHATHLAN",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - KHATHLAN",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - KHATHLAN",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-039",
                                    "city": "جدة",
                                    "district": "حي تجريبي 39",
                                    "station_workers": 9
                                  },
                                  {
                                    "name": "JUBAIL-2",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة JUBAIL-2",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - JUBAIL-2",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - JUBAIL-2",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-040",
                                    "city": "الخرج",
                                    "district": "حي تجريبي 40",
                                    "station_workers": 10
                                  },
                                  {
                                    "name": "KHUDARYAH",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة KHUDARYAH",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - KHUDARYAH",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - KHUDARYAH",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-041",
                                    "city": "الخبر",
                                    "district": "حي تجريبي 41",
                                    "station_workers": 6
                                  },
                                  {
                                    "name": "ZOHOR",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة ZOHOR",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - ZOHOR",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - ZOHOR",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-042",
                                    "city": "مكة",
                                    "district": "حي تجريبي 42",
                                    "station_workers": 7
                                  },
                                  {
                                    "name": "DANA",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة DANA",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - DANA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - DANA",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-043",
                                    "city": "المدينة",
                                    "district": "حي تجريبي 43",
                                    "station_workers": 8
                                  },
                                  {
                                    "name": "AJYAD",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة AJYAD",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - AJYAD",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - AJYAD",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-044",
                                    "city": "الأحساء",
                                    "district": "حي تجريبي 44",
                                    "station_workers": 9
                                  },
                                  {
                                    "name": "SEEF",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة SEEF",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - SEEF",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - SEEF",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-045",
                                    "city": "الطائف",
                                    "district": "حي تجريبي 45",
                                    "station_workers": 10
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "name": "مدير إقليمي - الغربية",
                            "subtitle": "Regional Manager - الغربية",
                            "type": "regional_manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدراء المناطق تحته أفقيًا",
                            "children": [
                              {
                                "name": "مدير منطقة الغربية 1",
                                "subtitle": "مدير منطقة",
                                "type": "area_manager",
                                "is_cost_center": false,
                                "layout": "horizontal",
                                "tone": "purple",
                                "status": "active",
                                "notes": "مدير منطقة؛ المحطات تحته أفقيًا",
                                "children": [
                                  {
                                    "name": "Saddi Madinh",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة Saddi Madinh",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - Saddi Madinh",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - Saddi Madinh",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-046",
                                    "city": "الرياض",
                                    "district": "حي تجريبي 46",
                                    "station_workers": 6
                                  },
                                  {
                                    "name": "Al Rahily",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة Al Rahily",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - Al Rahily",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - Al Rahily",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-047",
                                    "city": "الدمام",
                                    "district": "حي تجريبي 47",
                                    "station_workers": 7
                                  },
                                  {
                                    "name": "Jabri",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة Jabri",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - Jabri",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - Jabri",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-048",
                                    "city": "جدة",
                                    "district": "حي تجريبي 48",
                                    "station_workers": 8
                                  },
                                  {
                                    "name": "Yabs",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المستأجرة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة Yabs",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - Yabs",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - Yabs",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "leased",
                                    "station_type_label": "المحطات المستأجرة",
                                    "stationType": "leased",
                                    "station_code": "ST-049",
                                    "city": "الخرج",
                                    "district": "حي تجريبي 49",
                                    "station_workers": 9
                                  },
                                  {
                                    "name": "Tabaa sarea'a",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - المحطات المشغلة؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة Tabaa sarea'a",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - Tabaa sarea'a",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - Tabaa sarea'a",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "operated",
                                    "station_type_label": "المحطات المشغلة",
                                    "stationType": "operated",
                                    "station_code": "ST-050",
                                    "city": "الخبر",
                                    "district": "حي تجريبي 50",
                                    "station_workers": 10
                                  },
                                  {
                                    "name": "All Hail",
                                    "subtitle": "Station",
                                    "type": "station",
                                    "station": true,
                                    "is_cost_center": false,
                                    "salary": 0,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "محطة Placeholder؛ تحتها مشرف وعمال - محطات الامتياز التجاري؛ بيانات Dummy قابلة للتعديل.",
                                    "children": [
                                      {
                                        "name": "مشرف محطة All Hail",
                                        "subtitle": "مشرف محطة",
                                        "type": "station_supervisor",
                                        "is_cost_center": false,
                                        "layout": "horizontal",
                                        "tone": "dark",
                                        "status": "active",
                                        "notes": "Placeholder؛ عدّل الاسم والبيانات لاحقًا",
                                        "children": [
                                          {
                                            "name": "عامل 1 - All Hail",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          },
                                          {
                                            "name": "عامل 2 - All Hail",
                                            "subtitle": "عامل محطة",
                                            "type": "worker",
                                            "is_cost_center": false,
                                            "layout": "vertical",
                                            "tone": "dark",
                                            "status": "active",
                                            "notes": "Placeholder",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ],
                                    "station_kind": "franchise",
                                    "station_type_label": "محطات الامتياز التجاري",
                                    "stationType": "franchise",
                                    "station_code": "ST-051",
                                    "city": "مكة",
                                    "district": "حي تجريبي 51",
                                    "station_workers": 6
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "جميع الإدارات",
                    "subtitle": "All Departments",
                    "type": "division",
                    "is_cost_center": false,
                    "layout": "horizontal",
                    "tone": "secondary",
                    "status": "active",
                    "notes": "كونتينر بصري يجمع الإدارات التي لا تحتاج C-Level Director",
                    "children": [
                      {
                        "name": "إدارة الخدمات المساندة",
                        "subtitle": "Support Services Department",
                        "type": "department",
                        "is_cost_center": true,
                        "layout": "horizontal",
                        "tone": "dark",
                        "status": "active",
                        "notes": "تحت C-Level المسؤول؛ الأقسام تظهر أفقيًا",
                        "children": [
                          {
                            "name": "قسم الموارد البشرية",
                            "subtitle": "HR Department",
                            "type": "division",
                            "is_cost_center": true,
                            "layout": "horizontal",
                            "tone": "dark",
                            "status": "active",
                            "notes": "تحت إدارة الخدمات المساندة",
                            "children": [
                              {
                                "name": "مدير الموارد البشرية",
                                "subtitle": "HR Manager - شاغر",
                                "type": "manager",
                                "is_cost_center": false,
                                "layout": "horizontal",
                                "tone": "vacant",
                                "status": "vacant",
                                "notes": "منصب شاغر؛ الموظفون تحته أفقيًا",
                                "children": [
                                  {
                                    "name": "موظف 1 - الموارد البشرية",
                                    "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                    "type": "employee",
                                    "is_cost_center": false,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "Placeholder",
                                    "children": []
                                  },
                                  {
                                    "name": "موظف 2 - الموارد البشرية",
                                    "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                    "type": "employee",
                                    "is_cost_center": false,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "Placeholder",
                                    "children": []
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "name": "قسم خدمة العملاء",
                            "subtitle": "Customer Service",
                            "type": "division",
                            "is_cost_center": true,
                            "layout": "horizontal",
                            "tone": "dark",
                            "status": "active",
                            "notes": "تحت إدارة الخدمات المساندة",
                            "children": [
                              {
                                "name": "مسؤول خدمة العملاء",
                                "subtitle": "Customer Service Lead - شاغر",
                                "type": "manager",
                                "is_cost_center": false,
                                "layout": "horizontal",
                                "tone": "vacant",
                                "status": "vacant",
                                "notes": "منصب شاغر؛ الموظفون تحته أفقيًا",
                                "children": [
                                  {
                                    "name": "موظف 1 - خدمة العملاء",
                                    "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                    "type": "employee",
                                    "is_cost_center": false,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "Placeholder",
                                    "children": []
                                  },
                                  {
                                    "name": "موظف 2 - خدمة العملاء",
                                    "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                    "type": "employee",
                                    "is_cost_center": false,
                                    "layout": "vertical",
                                    "tone": "dark",
                                    "status": "active",
                                    "notes": "Placeholder",
                                    "children": []
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "إدارة تطوير الأعمال",
                        "subtitle": "Development Dept",
                        "type": "department",
                        "is_cost_center": true,
                        "layout": "vertical",
                        "tone": "dark",
                        "status": "active",
                        "notes": "تحت C-Level المسؤول؛ مدير الإدارة ثم الموظفون أفقيًا",
                        "children": [
                          {
                            "name": "مدير تطوير الأعمال",
                            "subtitle": "Business Development Manager",
                            "type": "manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدير الإدارة؛ الموظفون تحته أفقيًا",
                            "children": [
                              {
                                "name": "موظف 1 - تطوير الأعمال",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 2 - تطوير الأعمال",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "إدارة تقنية المعلومات",
                        "subtitle": "IT Dept",
                        "type": "department",
                        "is_cost_center": true,
                        "layout": "vertical",
                        "tone": "dark",
                        "status": "active",
                        "notes": "تحت C-Level المسؤول؛ مدير الإدارة ثم الموظفون أفقيًا",
                        "children": [
                          {
                            "name": "مدير تقنية المعلومات",
                            "subtitle": "IT Manager",
                            "type": "manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدير الإدارة؛ الموظفون تحته أفقيًا",
                            "children": [
                              {
                                "name": "موظف 1 - تقنية المعلومات",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 2 - تقنية المعلومات",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "إدارة المشاريع",
                        "subtitle": "Project Dept",
                        "type": "department",
                        "is_cost_center": true,
                        "layout": "vertical",
                        "tone": "dark",
                        "status": "active",
                        "notes": "تحت C-Level المسؤول؛ مدير الإدارة ثم الموظفون أفقيًا",
                        "children": [
                          {
                            "name": "مدير المشاريع",
                            "subtitle": "Project Manager",
                            "type": "manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدير الإدارة؛ الموظفون تحته أفقيًا",
                            "children": [
                              {
                                "name": "موظف 1 - المشاريع",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 2 - المشاريع",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 3 - المشاريع",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "إدارة المشتريات",
                        "subtitle": "Procurement Dept",
                        "type": "department",
                        "is_cost_center": true,
                        "layout": "vertical",
                        "tone": "dark",
                        "status": "active",
                        "notes": "تحت C-Level المسؤول؛ مدير الإدارة ثم الموظفون أفقيًا",
                        "children": [
                          {
                            "name": "مدير المشتريات",
                            "subtitle": "Procurement Manager",
                            "type": "manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدير الإدارة؛ الموظفون تحته أفقيًا",
                            "children": [
                              {
                                "name": "موظف 1 - المشتريات",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 2 - المشتريات",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "إدارة الصيانة",
                        "subtitle": "Maintenance Dept",
                        "type": "department",
                        "is_cost_center": true,
                        "layout": "vertical",
                        "tone": "dark",
                        "status": "active",
                        "notes": "تحت C-Level المسؤول؛ مدير الإدارة ثم الموظفون أفقيًا",
                        "children": [
                          {
                            "name": "مدير الصيانة",
                            "subtitle": "Maintenance Manager",
                            "type": "manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدير الإدارة؛ الموظفون تحته أفقيًا",
                            "children": [
                              {
                                "name": "موظف 1 - الصيانة",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 2 - الصيانة",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 3 - الصيانة",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "إدارة الأملاك",
                        "subtitle": "Property Dept",
                        "type": "department",
                        "is_cost_center": true,
                        "layout": "vertical",
                        "tone": "dark",
                        "status": "active",
                        "notes": "تحت C-Level المسؤول؛ مدير الإدارة ثم الموظفون أفقيًا",
                        "children": [
                          {
                            "name": "مدير الأملاك",
                            "subtitle": "Property Manager",
                            "type": "manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدير الإدارة؛ الموظفون تحته أفقيًا",
                            "children": [
                              {
                                "name": "موظف 1 - الأملاك",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 2 - الأملاك",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "إدارة الجودة",
                        "subtitle": "Quality Dept",
                        "type": "department",
                        "is_cost_center": true,
                        "layout": "vertical",
                        "tone": "dark",
                        "status": "active",
                        "notes": "تحت C-Level المسؤول؛ مدير الإدارة ثم الموظفون أفقيًا",
                        "children": [
                          {
                            "name": "مدير الجودة",
                            "subtitle": "Quality Manager",
                            "type": "manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدير الإدارة؛ الموظفون تحته أفقيًا",
                            "children": [
                              {
                                "name": "موظف 1 - الجودة",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 2 - الجودة",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "إدارة السلامة",
                        "subtitle": "Safety Dept",
                        "type": "department",
                        "is_cost_center": true,
                        "layout": "vertical",
                        "tone": "dark",
                        "status": "active",
                        "notes": "تحت C-Level المسؤول؛ مدير الإدارة ثم الموظفون أفقيًا",
                        "children": [
                          {
                            "name": "مدير السلامة",
                            "subtitle": "Safety Manager",
                            "type": "manager",
                            "is_cost_center": false,
                            "layout": "horizontal",
                            "tone": "purple",
                            "status": "active",
                            "notes": "مدير الإدارة؛ الموظفون تحته أفقيًا",
                            "children": [
                              {
                                "name": "موظف 1 - السلامة",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              },
                              {
                                "name": "موظف 2 - السلامة",
                                "subtitle": "يتم تعبئة الاسم والمسمى والراتب والجنسية لاحقًا",
                                "type": "employee",
                                "is_cost_center": false,
                                "layout": "vertical",
                                "tone": "dark",
                                "status": "active",
                                "notes": "Placeholder",
                                "children": []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
