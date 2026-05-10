const data = {
  "meta": {
    "version": "v1.0",
    "lastUpdated": "-",
    "notes": "Dummy Data"
  },
  "company": {
    "name": "الشركة",
    "is_cost_center": false,
    "tone": "primary",
    "image": "ologo.png",
    "children": [
      {
        "name": "الادارة التنفيذية",
        "is_cost_center": false,
        "tone": "secondary",
        "type": "executive_root",
        "children": [
          {
            "name": "COO",
            "is_cost_center": false,
            "subtitle": "مدير العمليات",
            "salary": 44000,
            "tone": "vacant",
            "layout": "vertical",
            "children": [
              {
                "name": "المدراء الاقليميون",
                "is_cost_center": false,
                "tone": "secondary",
                "layout": "horizontal",
                "children": [
                  {
                    "name": "مدير اقليمي 1",
                    "salary": 22000,
                    "tone": "dark",
                    "layout": "vertical",
                    "children": [
                      {
                        "name": "مدراء المناطق",
                        "is_cost_center": false,
                        "tone": "dark",
                        "layout": "horizontal",
                        "children": [
                          {
                            "name": "مدير منطقة الرياض 1",
                            "salary": 15000,
                            "tone": "purple",
                            "layout": "vertical",
                            "children": [
                              {
                                "name": "مشرفو المحطات",
                                "is_cost_center": false,
                                "tone": "dark",
                                "layout": "horizontal",
                                "children": [
                                  {
                                    "name": "مشرف محطة الرياض 1",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة الرياض 1",
                                        "subtitle": "Station",
                                        "salary": 0,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 8,
                                        "children": [
                                          {
                                            "name": "مشرف محطة الرياض 1",
                                            "subtitle": "Station Supervisor",
                                            "salary": 7500,
                                            "tone": "dark",
                                            "children": []
                                          },
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "8 Staff",
                                            "salary": 20500,
                                            "tone": "dark",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "name": "مشرف محطة الرياض 2",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة الرياض 2",
                                        "subtitle": "Station",
                                        "salary": 0,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 9,
                                        "children": [
                                          {
                                            "name": "مشرف محطة الرياض 2",
                                            "subtitle": "Station Supervisor",
                                            "salary": 7500,
                                            "tone": "dark",
                                            "children": []
                                          },
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "9 Staff",
                                            "salary": 22000,
                                            "tone": "dark",
                                            "children": []
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
                            "name": "مدير منطقة الرياض 2",
                            "salary": 15000,
                            "tone": "purple",
                            "layout": "vertical",
                            "children": [
                              {
                                "name": "مشرفو المحطات",
                                "tone": "dark",
                                "layout": "horizontal",
                                "children": [
                                  {
                                    "name": "مشرف محطة الخرج",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة الخرج",
                                        "subtitle": "Station",
                                        "salary": 27000,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 7,
                                        "children": [
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "7 Staff",
                                            "salary": 19500,
                                            "tone": "dark",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "name": "مشرف محطة الدوادمي",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة الدوادمي",
                                        "subtitle": "Station",
                                        "salary": 26500,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 7,
                                        "children": [
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "7 Staff",
                                            "salary": 19000,
                                            "tone": "dark",
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
                  },
                  {
                    "name": "مدير اقليمي 2",
                    "salary": 22000,
                    "tone": "dark",
                    "layout": "vertical",
                    "children": [
                      {
                        "name": "مدراء المناطق",
                        "tone": "dark",
                        "layout": "horizontal",
                        "children": [
                          {
                            "name": "مدير منطقة جدة",
                            "salary": 15000,
                            "tone": "purple",
                            "layout": "vertical",
                            "children": [
                              {
                                "name": "مشرفو المحطات",
                                "tone": "dark",
                                "layout": "horizontal",
                                "children": [
                                  {
                                    "name": "مشرف محطة جدة 1",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة جدة 1",
                                        "subtitle": "Station",
                                        "salary": 30000,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 8,
                                        "children": [
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "8 Staff",
                                            "salary": 21500,
                                            "tone": "dark",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "name": "مشرف محطة جدة 2",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة جدة 2",
                                        "subtitle": "Station",
                                        "salary": 32000,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 9,
                                        "children": [
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "9 Staff",
                                            "salary": 23000,
                                            "tone": "dark",
                                            "children": []
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
                            "name": "مدير منطقة مكة",
                            "salary": 15000,
                            "tone": "purple",
                            "layout": "vertical",
                            "children": [
                              {
                                "name": "مشرفو المحطات",
                                "tone": "dark",
                                "layout": "horizontal",
                                "children": [
                                  {
                                    "name": "مشرف محطة مكة 1",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة مكة 1",
                                        "subtitle": "Station",
                                        "salary": 29000,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 8,
                                        "children": [
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "8 Staff",
                                            "salary": 21000,
                                            "tone": "dark",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "name": "مشرف محطة مكة 2",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة مكة 2",
                                        "subtitle": "Station",
                                        "salary": 31000,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 9,
                                        "children": [
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "9 Staff",
                                            "salary": 22500,
                                            "tone": "dark",
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
                  },
                  {
                    "name": "مدير اقليمي 3",
                    "salary": 22000,
                    "tone": "dark",
                    "layout": "vertical",
                    "children": [
                      {
                        "name": "مدراء المناطق",
                        "tone": "dark",
                        "layout": "horizontal",
                        "children": [
                          {
                            "name": "مدير منطقة الشرقية",
                            "salary": 15000,
                            "tone": "purple",
                            "layout": "vertical",
                            "children": [
                              {
                                "name": "مشرفو المحطات",
                                "tone": "dark",
                                "layout": "horizontal",
                                "children": [
                                  {
                                    "name": "مشرف محطة الدمام 1",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة الدمام 1",
                                        "subtitle": "Station",
                                        "salary": 32000,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 9,
                                        "children": [
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "9 Staff",
                                            "salary": 23000,
                                            "tone": "dark",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "name": "مشرف محطة الخبر 1",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة الخبر 1",
                                        "subtitle": "Station",
                                        "salary": 30000,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 8,
                                        "children": [
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "8 Staff",
                                            "salary": 21500,
                                            "tone": "dark",
                                            "children": []
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
                            "name": "مدير منطقة القصيم",
                            "salary": 15000,
                            "tone": "purple",
                            "layout": "vertical",
                            "children": [
                              {
                                "name": "مشرفو المحطات",
                                "tone": "dark",
                                "layout": "horizontal",
                                "children": [
                                  {
                                    "name": "مشرف محطة بريدة",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة بريدة",
                                        "subtitle": "Station",
                                        "salary": 27500,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 7,
                                        "children": [
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "7 Staff",
                                            "salary": 19500,
                                            "tone": "dark",
                                            "children": []
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "name": "مشرف محطة عنيزة",
                                    "salary": 0,
                                    "tone": "dark",
                                    "layout": "vertical",
                                    "children": [
                                      {
                                        "name": "محطة عنيزة",
                                        "subtitle": "Station",
                                        "salary": 26500,
                                        "tone": "dark",
                                        "layout": "vertical",
                                        "station": true,
                                        "station_workers": 7,
                                        "children": [
                                          {
                                            "name": "عمالة المحطة",
                                            "subtitle": "7 Staff",
                                            "salary": 19000,
                                            "tone": "dark",
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
            ]
          },
          {
            "name": "CFO",
            "is_cost_center": false,
            "subtitle": "المدير المالي",
            "salary": 38000,
            "tone": "warning",
            "layout": "vertical",
            "children": [
              {
                "name": "المالية والمحاسبة",
                "is_cost_center": true,
                "tone": "warning",
                "layout": "vertical",
                "children": [
                  {
                    "name": "كبير المحاسبين",
                    "salary": 20000,
                    "tone": "dark",
                    "layout": "horizontal",
                    "children": [
                      {
                        "name": "محاسب 1",
                        "subtitle": "Accountant",
                        "salary": 9000,
                        "tone": "dark",
                        "children": []
                      },
                      {
                        "name": "محاسب 2",
                        "subtitle": "Accountant",
                        "salary": 9000,
                        "tone": "dark",
                        "children": []
                      },
                      {
                        "name": "محاسب 3",
                        "subtitle": "Accountant",
                        "salary": 9000,
                        "tone": "dark",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "الرواتب",
                    "is_cost_center": true,
                    "tone": "dark",
                    "layout": "horizontal",
                    "children": [
                      {
                        "name": "مسؤول رواتب",
                        "subtitle": "Payroll Officer",
                        "salary": 10500,
                        "tone": "dark",
                        "children": []
                      },
                      {
                        "name": "مساعد رواتب",
                        "subtitle": "Payroll Assistant",
                        "salary": 7500,
                        "tone": "dark",
                        "children": []
                      }
                    ]
                  },
                  {
                    "name": "الخزينة",
                    "is_cost_center": true,
                    "tone": "dark",
                    "layout": "vertical",
                    "children": [
                      {
                        "name": "أمين صندوق",
                        "subtitle": "Treasury Officer",
                        "salary": 9000,
                        "tone": "dark",
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "CEO",
            "is_cost_center": false,
            "subtitle": "المدير التنفيذي",
            "salary": 52000,
            "tone": "primary",
            "layout": "horizontal",
            "children": [
              {
                "name": "ادارة الموارد البشرية",
                "is_cost_center": true,
                "tone": "dark",
                "layout": "vertical",
                "children": [
                  {
                    "name": "مدير الموارد البشرية",
                    "salary": 22000,
                    "tone": "purple",
                    "layout": "horizontal",
                    "children": [
                      {
                        "name": "ادارة الخدمات المساندة",
                        "is_cost_center": true,
                        "tone": "dark",
                        "layout": "vertical",
                        "children": [
                          {
                            "name": "مدير الخدمات المساندة",
                            "subtitle": "Support Services Manager",
                            "salary": 15000,
                            "tone": "dark",
                            "children": []
                          },
                          {
                            "name": "منسق خدمات",
                            "subtitle": "Support Coordinator",
                            "salary": 8000,
                            "tone": "dark",
                            "children": []
                          },
                          {
                            "name": "موظف خدمات مساندة",
                            "subtitle": "Officer",
                            "salary": 7000,
                            "tone": "dark",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "ادارة خدمة العملاء",
                        "is_cost_center": true,
                        "tone": "dark",
                        "layout": "vertical",
                        "children": [
                          {
                            "name": "مدير خدمة العملاء",
                            "subtitle": "Customer Service Manager",
                            "salary": 15000,
                            "tone": "dark",
                            "children": []
                          },
                          {
                            "name": "ممثل خدمة عملاء 1",
                            "subtitle": "Customer Service Officer",
                            "salary": 7500,
                            "tone": "dark",
                            "children": []
                          },
                          {
                            "name": "ممثل خدمة عملاء 2",
                            "subtitle": "Customer Service Officer",
                            "salary": 7500,
                            "tone": "dark",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "موظفو الموارد البشرية",
                        "is_cost_center": true,
                        "tone": "dark",
                        "layout": "vertical",
                        "children": [
                          {
                            "name": "أخصائي موارد بشرية 1",
                            "subtitle": "HR Officer",
                            "salary": 9000,
                            "tone": "dark",
                            "children": []
                          },
                          {
                            "name": "أخصائي موارد بشرية 2",
                            "subtitle": "HR Officer",
                            "salary": 9000,
                            "tone": "dark",
                            "children": []
                          },
                          {
                            "name": "مسؤول شؤون موظفين",
                            "subtitle": "Personnel Officer",
                            "salary": 8500,
                            "tone": "dark",
                            "children": []
                          }
                        ]
                      }
                    ],
                    "type": "employee",
                    "nationality_group": "saudi",
                    "status": "active"
                  }
                ]
              },
              {
                "name": "ادارة تقنية المعلومات",
                "is_cost_center": true,
                "tone": "dark",
                "layout": "vertical",
                "children": [
                  {
                    "name": "مدير تقنية المعلومات",
                    "salary": 24000,
                    "tone": "purple",
                    "layout": "horizontal",
                    "children": [
                      {
                        "name": "قسم الدعم الفني",
                        "is_cost_center": true,
                        "tone": "dark",
                        "layout": "vertical",
                        "children": [
                          {
                            "name": "رئيس الدعم الفني",
                            "subtitle": "Support Lead",
                            "salary": 12000,
                            "tone": "dark",
                            "layout": "vertical",
                            "children": [
                              {
                                "name": "تجربة",
                                "subtitle": "موظف تجربة",
                                "type": "employee",
                                "salary": 4000,
                                "tone": "dark",
                                "layout": "vertical",
                                "status": "active",
                                "children": []
                              }
                            ]
                          },
                          {
                            "name": "فني دعم 1",
                            "subtitle": "Support Technician",
                            "salary": 8000,
                            "tone": "dark",
                            "children": [],
                            "type": "employee",
                            "nationality_group": "saudi",
                            "layout": "vertical",
                            "status": "active"
                          },
                          {
                            "name": "فني دعم 2",
                            "subtitle": "Support Technician",
                            "salary": 8000,
                            "tone": "dark",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "قسم كاميرات المراقبة",
                        "is_cost_center": true,
                        "tone": "dark",
                        "layout": "vertical",
                        "children": [
                          {
                            "name": "مشرف CCTV",
                            "subtitle": "CCTV Supervisor",
                            "salary": 11500,
                            "tone": "dark",
                            "children": []
                          },
                          {
                            "name": "فني كاميرات 1",
                            "subtitle": "CCTV Technician",
                            "salary": 7500,
                            "tone": "dark",
                            "children": []
                          },
                          {
                            "name": "فني كاميرات 2",
                            "subtitle": "CCTV Technician",
                            "salary": 7500,
                            "tone": "dark",
                            "children": []
                          }
                        ]
                      },
                      {
                        "name": "قسم البنية التحتية والأنظمة",
                        "is_cost_center": true,
                        "tone": "dark",
                        "layout": "vertical",
                        "children": [
                          {
                            "name": "مهندس أنظمة",
                            "subtitle": "Systems Engineer",
                            "salary": 14000,
                            "tone": "dark",
                            "children": []
                          },
                          {
                            "name": "مسؤول شبكات",
                            "subtitle": "Network Administrator",
                            "salary": 12000,
                            "tone": "dark",
                            "children": []
                          }
                        ]
                      }
                    ],
                    "subtitle": "مدير تقنية المعلومات",
                    "type": "employee",
                    "nationality_group": "saudi",
                    "status": "active"
                  }
                ]
              },
              {
                "name": "قسم المشتريات",
                "is_cost_center": true,
                "tone": "dark",
                "layout": "vertical",
                "children": [
                  {
                    "name": "مدير المشتريات",
                    "salary": 18000,
                    "tone": "purple",
                    "layout": "horizontal",
                    "children": [
                      {
                        "name": "أخصائي مشتريات 1",
                        "subtitle": "Procurement Officer",
                        "salary": 8500,
                        "tone": "dark",
                        "children": []
                      },
                      {
                        "name": "أخصائي مشتريات 2",
                        "subtitle": "Procurement Officer",
                        "salary": 8500,
                        "tone": "dark",
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ],
            "type": "employee",
            "nationality_group": "saudi",
            "status": "active"
          }
        ]
      }
    ]
  }
};
