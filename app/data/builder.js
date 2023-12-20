const builderData = {
  type: {
    "id panel": {
      name: "ID Panel",
      basePrice: 23,
      config: {
        sizes: [
          {
            size: '3” x 2”',
            text: {
              primary: {
                placeholder: 'Name',
                maxLength: 13,
                lines: 1,
              },
              secondary: {
                placeholder: 'APOS\nNKDA',
                maxLength: 12,
                lines: 2,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 0,
              glowBorder: 0,
              hiVis: 3,
              badge: 25,
            }
          },
          {
            size: '3.5” x 2”',
            text: {
              primary: {
                placeholder: 'Name',
                maxLength: 13,
                lines: 1,
              },
              secondary: {
                placeholder: 'APOS\nNKDA',
                maxLength: 12,
                lines: 2,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 1,
              glowBorder: 0,
              hiVis: 3,
              badge: 25,
            }
          },
          {
            size: '4” x 2”',
            text: {
              primary: {
                placeholder: 'Name',
                maxLength: 13,
                lines: 1,
              },
              secondary: {
                placeholder: 'APOS\nNKDA',
                maxLength: 12,
                lines: 2,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 2,
              glowBorder: 5,
              hiVis: 3,
              badge: 25,
            }
          },
          {
            size: '5” x 3”',
            text: {
              primary: {
                placeholder: 'Name',
                maxLength: 13,
                lines: 1,
              },
              secondary: {
                placeholder: 'APOS\nNKDA',
                maxLength: 12,
                lines: 2,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 8,
              glowBorder: 10,
              hiVis: 5,
              badge: 25,
            }
          },
          {
            size: '6” x 2”',
            text: {
              primary: {
                placeholder: 'Name',
                maxLength: 13,
                lines: 1,
              },
              secondary: {
                placeholder: 'APOS\nNKDA',
                maxLength: 12,
                lines: 2,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 3,
              glowBorder: 10,
              hiVis: 5,
              badge: 25,
            }
          },
          {
            size: '6” x 3”',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 13,
                lines: 1,
              },
              secondary: {
                placeholder: 'APOS\nNKDA',
                maxLength: 12,
                lines: 2,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 8,
              glowBorder: 10,
              hiVis: 5,
              badge: 25,
              tRexArms: true,
              policeID: 19,
            }
          },
          {
            size: 'T.Rex Arms AC1 Front',
            text: {
              primary: {
                placeholder: 'Name',
                maxLength: 12,
                lines: 1,
              },
              secondary: {
                placeholder: 'APOS\nNKDA',
                maxLength: 14,
                lines: 2,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 8,
              hiVis: 5,
              glowBorder: 10,
              badge: 25,
            }
          },
          {
            size: 'DeadBug DV2',
            text: {
              primary: {
                placeholder: 'Name',
                maxLength: 13,
                lines: 1,
              },
              secondary: {
                placeholder: 'APOS\nNKDA',
                maxLength: 12,
                lines: 2,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 8,
              hiVis: 5,
              glowBorder: 10,
              badge: 25,
              tRexArms: true,
              policeID: 19,
            }
          }
        ],
      },
      form: {
        intro: "Our ID panels come in various sizes. You will be able to custom your ID, blood type or allergy, font & background colors. You will be able to choose from a wide variety of flags or upload one yourself. Get through all the steps and see your patch come to life.",
        btnText: "Get Started",
        steps: [
          {
            name: "Patch Size",
            input: [
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: '3" x 2"',
              },
            ],
          },
          {
            name: "Text",
            input: [
              {
                id: 'text',
                label: 'Text',
                type: 'input',
                placeholder: 'Name',
              },
              {
                id: 'bloodType',
                label: 'Blood Type & Allergies',
                type: 'textarea',
                placeholder: 'APOS\nNKDA',
              },
            ],
          },
          {
            name: "Font & Background Colors",
            input: [
              {
                id: 'textColor',
                label: 'Text Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Flag",
            input: [
              {
                id: 'flagType',
                label: 'Flag Type',
                type: 'select',
                placeholder: 'Laser Cut Flag',
              },
              {
                id: 'flag',
                label: 'Flag',
                type: 'advancedSelect',
                placeholder: 'USA',
              },
              {
                id: 'flagReverse',
                label: 'Do you want to reverse the flag?',
                type: 'checkmark',
                placeholder: '',
              },
            ],
          },
          {
            name: "Almost There",
            input: [
              // {
              //   id: 'glowBorder',
              //   label: 'Add a glow in the dark border? +$10 USD',
              //   type: 'checkmark',
              //   placeholder: '',
              // },
              {
                id: "leadTime",
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ]
      },
    },
    "name tape": {
      name: "Name Tape",
      basePrice: 13,
      config: {
        sizes: [
          {
            size: '3” x 1”',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 9,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 0,
              glowBorder: 5,
            }
          },
          {
            size: '4” x 1”',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 10,
                lines: 1,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 1,
              glowBorder: 5,
              hiVis: 4,
            }
          },
          {
            size: '4” x 1.5”',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 10,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 3,
              glowBorder: 5,
            }
          },
          {
            size: '5” x 1”',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 13,
                lines: 1,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 2,
              glowBorder: 5,
              hiVis: 4,
              tacTecCarrier: 2,
              tacTecTrainer: 3,
              tRexArms: 0,
            }
          },
          {
            size: '5” x 1.5”',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 13,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 4,
              glowBorder: 5,
            }
          },
          {
            size: 'T.Rex Arms AC1',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 10,
                lines: 1,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 2,
              glowBorder: 5,
              hiVis: 4,
            }
          },
          {
            size: 'T.Rex Arms AC1 Front',
            text: {
              primary: {
                placeholder: 'Up to \n2 Lines',
                maxLength: 16,
                lines: 2,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 13,
              glowBorder: 10,
            }
          },
          {
            size: 'T.Rex Arms AC1 Back Panel',
            text: {
              primary: {
                placeholder: 'Up to \n2 Lines',
                maxLength: 26,
                lines: 2,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 13,
              glowBorder: 10,
            }
          },
          {
            size: '5.11 Tac Tec Carrier Trainer',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 13,
                lines: 1,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 5,
              glowBorder: 5,
              hiVis: 4,
              tacTecCarrier: 2,
              tacTecTrainer: 3,
              tRexArms: 0,
            }
          },
          {
            size: '5.11 Tac Tec Carrier',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 13,
                lines: 1,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 4,
              glowBorder: 5,
              hiVis: 4,
              tacTecCarrier: 2,
              tacTecTrainer: 3,
              tRexArms: 0,
            }
          },
          {
            size: '6” x 2”',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 10,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 8,
              glowBorder: 10,
              policeBlueLine: 5,
              sheriffBlueLine: 5,
            }
          },
          {
            size: '8” x 2”',
            text: {
              primary: {
                placeholder: 'Up to \n2 Lines',
                maxLength: 30,
                lines: 2,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 9,
              glowBorder: 10,
              tRexArms: 4,
            }
          },
          {
            size: '8” x 3”',
            text: {
              primary: {
                placeholder: 'Up to \n2 Lines',
                maxLength: 26,
                lines: 2,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 14,
              glowBorder: 10,
            }
          },
          {
            size: '8” x 4”',
            text: {
              primary: {
                placeholder: 'Up to \n3 \nLines',
                maxLength: 39,
                lines: 3,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 24,
              glowBorder: 10,
            }
          },
          {
            size: '9” x 3”',
            text: {
              primary: {
                placeholder: 'Up to 2\n Lines of Text',
                maxLength: 26,
                lines: 2,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 15,
              glowBorder: 15,
            }
          },
          {
            size: '10” x 2”',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 13,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 14,
              glowBorder: 10,
            }
          },
          {
            size: '11” x 3”',
            text: {
              primary: {
                placeholder: 'Up to 2 \nLines of Text',
                maxLength: 32,
                lines: 2,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 17,
              glowBorder: 15,
            }
          },
          {
            size: '12” x 4”',
            text: {
              primary: {
                placeholder: 'Up to \n3 \nLines of Text',
                maxLength: 54,
                lines: 3,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 41,
              glowBorder: 20,
            }
          }
        ],
        extra: [
          {
            size: '2.5” x 1”',
            text: {
              primary: {
                placeholder: 'Your Nm',
                maxLength: 7,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 1,
              glowBorder: 5,
            },
            name: "Custom ID Tag",
          },
          {
            size: '5” x 1”',
            text: {
              primary: {
                placeholder: 'Dad',
                maxLength: 4,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 9,
              glowBorder: 7,
            },
            name: "* As Fuck Name Tape",
          },
        ],
      },
      form: {
        intro: "Our Name Tape come in various sizes. For sizes 4 x 1, 5 x1 come with the option to add a flag.",
        btnText: "Get Started",
        steps: [
          {
            name: "Text & Size",
            status: 'current',
            input: [
              {
                id: 'text',
                label: 'Text',
                type: 'input',
                placeholder: '',
              },
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: '',
              },
            ],
          },
          {
            name: "Font & Background Colors",
            status: 'upcoming',
            input: [
              {
                id: 'textColor',
                label: 'Text Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                id: 'glowBorder',
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      }
    },
    "medical patch": {
      name: "Medical Patch",
      basePrice: 10,
      config: {
        sizes: [
          {
            size: '1” x 1”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 0,
              glowBorder: 5,
            }
          },
          {
            size: '2” x 2”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 3,
              glowBorder: 5,
            }
          },
          {
            size: '3.5” x 2”',
            text: {
              primary: {
                placeholder: 'APOS\nNKDA',
                maxLength: 12,
                lines: 2,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 9,
              glowBorder: 5,
            }
          },
        ],
        extra: [
          {
            name: "Hexagonal",
            size: '3.5” x 3.5”',
            maxLength: null,
            lines: null,
            placeholder: null,
            flagEnabled: true,
            upsells: {
              size: 9,
            },
          },
        ]
      },
      form: {
        intro: "Our Medical Patches come in 3 various sizes. You will be able to add blood type or allergy if you choose the 3.5\" x 2\" size.",
        btnText: "Get Started",
        steps: [
          {
            name: "Symbol & Size",
            status: 'current',
            input: [
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: '',
              },
              {
                id: 'symbol',
                label: 'Symbol',
                type: 'advancedSelect',
              },
            ],
          },
          {
            name: "Symbol & Background Colors",
            status: 'upcoming',
            input: [
              {
                id: 'textColor',
                label: 'Symbol Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                id: 'glowBorder',
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      },
    },
    "flag": {
      name: "Flag",
      basePrice: 15,
      config: {
        sizes: [
          {
            size: '3” x 2”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 0,
              hiVis: 5,
              glowBorder: 5,
            },
          },
          {
            size: '3.5” x 2”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 1,
              thinLine: 4,
              hiVis: 5,
              glowBorder: 5,
            },
          },
          {
            size: '5” x 3”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 5,
              tRexArms: 6,
              hiVis: 5,
              glowBorder: 10,
            },
          },
          {
            size: '6” x 3”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 13,
              hiVis: 5,
              glowBorder: 10,
            },
          },
          {
            size: 'T.Rex Arms AC1 Front',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 11,
              glowBorder: 10,
            },
          },
        ],
        extra: [
          {
            name: "Hexagonal",
            size: '3.5” x 3.5”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 3,
            },
          },
        ]
      },
      form: {
        intro: "Our Flag Patches come in Laser Cut or Reflective Hi Vis.",
        btnText: "Get Started",
        steps: [
          {
            name: "Flag",
            input: [
              // {
              //   id: 'flagType',
              //   label: 'Flag Type',
              //   type: 'select',
              //   placeholder: 'Laser Cut Flag',
              // },
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: '',
              },
              {
                id: 'flag',
                label: 'Flag',
                type: 'advancedSelect',
                placeholder: 'USA',
              },
            ],
          },
          {
            name: "Background Colors",
            status: 'upcoming',
            input: [
              {
                id: 'textColor',
                label: 'Flag Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
              {
                id: 'flagReverse',
                label: 'Do you want to reverse the flag?',
                type: 'checkmark',
                placeholder: '',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                id: 'glowBorder',
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      },
    },
    "light sabers": {
      name: "Light Sabers",
      base: 20,
      config: {
        "sizes": [
          {
            size: '5” x 1”',
            maxLength: null,
            lines: null,
            placeholder: null,
            upsells: {
              size: 0,
            },
          },
        ],
      },
      form: {
        intro: "Our Flag Patches come in Laser Cut or Reflective Hi Vis.",
        btnText: "Get Started",
        steps: [
          {
            name: "Hilt, Saber, and Background Colors",
            status: 'current',
            input: [
              {
                id: 'saberType',
                label: 'LightSaber Type',
                type: 'select',
                placeholder: '//',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Lightsaber Colors",
            status: 'upcoming',
            input: [
              {
                id: 'hiltColor',
                label: 'Hilt Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'bladeColor',
                label: 'Blade Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      },
    },
    "custom printed patch": {
      name: "Custom Printed Patch",
      basePrice: 14,
      config: {
        sizes: [
          {
            size: '3” x 2”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 0,
              hiVis: 5,
            },
          },
          {
            size: '3.5” x 2”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 1,
              thinLine: 4,
              hiVis: 5,
            },
          },
          {
            size: '5” x 3”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 5,
              tRexArms: 6,
              hiVis: 5,
            },
          },
          {
            size: '6” x 2”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 9,
              hiVis: 5,
            },
          },
          {
            size: '6” x 3”',
            text: {
              primary: {
                placeholder: null,
                maxLength: null,
                lines: null,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 13,
              hiVis: 5,
            },
          },
        ],
      },
      form: {
        intro: "Our Signature printed patches are constructed with durable, fade resistant ink in either a reflective, or non-reflective format on a honeycomb textured material. This low cost, no minimum budget material is great choice for designs too complex for conventional patch materials.",
        btnText: "Get Started",
        steps: [
          {
            name: "Material Type + Upload",
            status: 'upcoming',
            input: [
              // {
              //   id: 'materialType',
              //   label: 'Material Type',
              //   type: 'select',
              //   placeholder: 'Reflective',
              // },
              {
                id: 'upload',
                label: 'Upload your image',
                type: 'upload',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                id: 'terms',
                label: 'Terms and Conditions',
                type: 'checkmark',
                placeholder: 'I  understand that Copyrighted images, or images determined to contain hateful material are subject to cancellation without notice. But that\'s not a problem, because I\'m not a jerk.',
              },
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      },
    },
    "jacket panel": {
      name: "Jacket Panel",
      base: 31,
      config: {
        "sizes": [
          {
            size: '3.5” x 3.5”',
            text: {
              primary: {
                text: '',
                maxLength: 13,
                lines: 1,
                placeholder: 'Name',
              },
              secondary: {
                text: '',
                maxLength: 6,
                lines: 1,
                placeholder: 'RCSD',
              },
              third: {
                text: '',
                maxLength: 6,
                lines: 1,
                placeholder: 'S1008',
              },
              fourth: {
                text: '',
                maxLength: 6,
                lines: 1,
                placeholder: 'NKA',
              },
              fifth: {
                text: '',
                maxLength: 6,
                lines: 1,
                placeholder: 'SPPROJ',
              },
              sixth: {
                text: '',
                maxLength: 6,
                lines: 1,
                placeholder: 'BPOS',
              },
              seventh: {
                text: '',
                maxLength: 6,
                lines: 1,
                placeholder: '011173',
              },
            },
            flagEnabled: true,
            upsells: {
              size: 0,
              hiVis: 5,
              glowBorder: 5,
            },
          },
          {
            size: '3.6” x 5”',
            text: {
              primary: {
                maxLength: 13,
                lines: 1,
                placeholder: 'Name',
              },
              secondary: {
                maxLength: 6,
                lines: 1,
                placeholder: 'RCSD',
              },
              third: {
                maxLength: 6,
                lines: 1,
                placeholder: 'S1008',
              },
              fourth: {
                maxLength: 6,
                lines: 1,
                placeholder: 'NKA',
              },
              fifth: {
                maxLength: 6,
                lines: 1,
                placeholder: 'SPPROJ',
              },
              sixth: {
                maxLength: 6,
                lines: 1,
                placeholder: 'BPOS',
              },
              seventh: {
                maxLength: 6,
                lines: 1,
                placeholder: '011173',
              },
            },
            flagEnabled: true,
            upsells: {
              size: 0,
              hiVis: 5,
              glowBorder: 5,
            },
          },
          {
            size: '3.5” x 4”',
            text: {
              primary: {
                maxLength: 13,
                lines: 1,
                placeholder: 'Name',
              },
              secondary: {
                maxLength: 6,
                lines: 1,
                placeholder: 'RCSD',
              },
              third: {
                text: '',
                maxLength: 6,
                lines: 1,
                placeholder: 'S1008',
              },
              fourth: {
                text: '',
                maxLength: 6,
                lines: 1,
                placeholder: 'NKA',
              },
              fifth: {
                text: '',
                maxLength: 6,
                lines: 1,
                placeholder: 'SPPROJ',
              },
              sixth: {
                text: '',
                maxLength: 6,
                lines: 1,
                placeholder: 'BPOS',
              },
              seventh: {
                text: '',
                maxLength: 6,
                lines: 1,
                placeholder: '011173',
              },
            },
            flagEnabled: true,
            upsells: {
              size: 0,
              hiVis: 5,
              glowBorder: 5,
            },
          },
          {
            size: '4” x 4.5”',
            text: {
              primary: {
                maxLength: 13,
                lines: 1,
                placeholder: 'Name',
              },
              secondary: {
                maxLength: 6,
                lines: 1,
                placeholder: 'RCSD',
              },
              third: {
                maxLength: 6,
                lines: 1,
                placeholder: 'S1008',
              },
              fourth: {
                maxLength: 6,
                lines: 1,
                placeholder: 'NKA',
              },
              fifth: {
                maxLength: 6,
                lines: 1,
                placeholder: 'SPPROJ',
              },
              sixth: {
                maxLength: 6,
                lines: 1,
                placeholder: 'BPOS',
              },
              seventh: {
                maxLength: 6,
                lines: 1,
                placeholder: '011173',
              },
            },
            flagEnabled: true,
            upsells: {
              size: 0,
              hiVis: 5,
              glowBorder: 5,
            },
          },
          {
            size: '4.6” x 6.2”',
            text: {
              primary: {
                maxLength: 13,
                lines: 1,
                placeholder: 'Name',
              },
              secondary: {
                maxLength: 6,
                lines: 1,
                placeholder: 'RCSD',
              },
              third: {
                maxLength: 6,
                lines: 1,
                placeholder: 'S1008',
              },
              fourth: {
                maxLength: 6,
                lines: 1,
                placeholder: 'NKA',
              },
              fifth: {
                maxLength: 6,
                lines: 1,
                placeholder: 'SPPROJ',
              },
              sixth: {
                maxLength: 6,
                lines: 1,
                placeholder: 'BPOS',
              },
              seventh: {
                maxLength: 6,
                lines: 1,
                placeholder: '011173',
              },
            },
            flagEnabled: true,
            upsells: {
              size: 0,
              hiVis: 5,
              glowBorder: 5,
            },
          },
        ]
      },
      form: {
        intro: "Our Jacket Panels come in various sizes. Choose from different.",
        btnText: "Get Started",
        steps: [
          {
            name: "Text",
            input: [
              {
                id: 'text',
                label: 'Text',
                type: 'input',
                placeholder: 'Name',
              },
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: '3" x 2"',
              },
            ],
          },
          {
            name: "Text",
            input: [
              {
                id: 'text2',
                label: 'Text 2',
                type: 'input',
                placeholder: 'Name',
              },
              {
                id: 'text3',
                label: 'Text 3',
                type: 'input',
                placeholder: 'Name',
              },
            ],
          },
          {
            name: "Text",
            input: [
              {
                id: 'text4',
                label: 'Text 4',
                type: 'input',
                placeholder: 'Name',
              },
              {
                id: 'text5',
                label: 'Text 5',
                type: 'input',
                placeholder: 'Name',
              },
            ],
          },
          {
            name: "Text",
            input: [
              {
                id: 'text6',
                label: 'Text 6',
                type: 'input',
                placeholder: 'Name',
              },
              {
                id: 'text7',
                label: 'Text 7',
                type: 'input',
                placeholder: 'Name',
              },
            ],
          },
          {
            name: "Font & Background Colors",
            input: [
              {
                id: 'textColor',
                label: 'Text Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Flag",
            input: [
              // {
              //   flag: 'flagType',
              //   label: 'Flag Type',
              //   type: 'select',
              //   placeholder: 'Laser Cut Flag',
              // },
              {
                id: 'flag',
                label: 'Flag',
                type: 'advancedSelect',
                placeholder: 'USA',
              },
              {
                id: 'flagReverse',
                label: 'Do you want to reverse the flag?',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: 'flagTop',
                label: 'Do you want to move the flag to the top?',
                type: 'checkmark',
                placeholder: '',
              },
            ],
          },
          {
            name: "Almost There",
            input: [
              {
                id: 'glowBorder',
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: "leadTime",
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ]
      },
    },
    "division jacket panel": {
      name: "Division Jacket Panel",
      base: 36,
      config: {
        "sizes": [
          {
            size: '3.5” x 4”',
            text: {
              primary: {
                maxLength: 15,
                lines: 1,
                placeholder: 'Your Name',
              },
              secondary: {
                maxLength: 7,
                lines: 1,
                placeholder: '2nd Line',
              },
              third: {
                text: '',
                maxLength: 7,
                lines: 1,
                placeholder: '3rd Line',
              },

            },
            flagEnabled: true,
            upsells: {
              size: 0,
            },
          },
        ]
      },
      form: {
        intro: "Our Jacket Panels come in various sizes. Choose from different.",
        btnText: "Get Started",
        steps: [
          {
            name: "Text",
            input: [
              {
                id: 'text',
                label: 'Text',
                type: 'input',
                placeholder: 'Name',
              },
              {
                id: 'textColor',
                label: 'Text Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
            ],
          },
          {
            name: "Text",
            input: [
              {
                id: 'text2',
                label: 'Text 2',
                type: 'input',
                placeholder: 'Name',
              },
              {
                id: 'text3',
                label: 'Text 3',
                type: 'input',
                placeholder: 'Name',
              },
            ],
          },
          {
            name: "Font & Background Colors",
            input: [
              {
                id: 'ringColor',
                label: 'Ring Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Almost There",
            input: [
              {
                id: "leadTime",
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ]
      },
    },
    "trex": {
      name: "T.Rex Arms",
      base: 15,
      config: {
        "sizes": [
          {
            size: 'AC1 Name Tape - 6" x 2"',
            text: {
              primary: {
                maxLength: 10,
                lines: 1,
                placeholder: 'Your Name',
              },
            },
            flagEnabled: false,
            upsells: {
              size: 0,
              hiVis: 4,
              glowBorder: 5,
            },
          },
          {
            size: 'AC1 Cover Panel Set',
            flagEnabled: false,
            upsells: {
              size: 6,
            },
          },
          {
            size: 'AC1 Front Flag',
            flagEnabled: true,
            upsells: {
              size: 11,
              glowBorder: 5,
            },
          },
          {
            size: 'AC1 Front Name Plate',
            text: {
              primary: {
                maxLength: 16,
                lines: 2,
                placeholder: 'Police',
              },
            },
            flagEnabled: true,
            upsells: {
              size: 11,
              glowBorder: 10,
            },
          },
          {
            size: 'AC1 Back Panel Name Tape',
            text: {
              primary: {
                maxLength: 26,
                lines: 2,
                placeholder: 'L.T. Curtis',
              },
            },
            flagEnabled: true,
            upsells: {
              size: 11,
              glowBorder: 10,
            },
          },
          {
            size: 'AC1 ID Panel with HiVis Flag',
            text: {
              primary: {
                maxLength: 12,
                lines: 1,
                placeholder: 'Name',
              },
              secondary: {
                maxLength: 14,
                lines: 2,
                placeholder: 'APOS\nNKDA',
              },
            },
            flagEnabled: true,
            upsells: {
              size: 14,
              hiVis: 7,
              glowBorder: 10,
            },
          },
        ]
      },
      form: {
        intro: "Our T.Rex Arms come in various sizes from blank to Flag to ID Panel.",
        btnText: "Get Started",
        steps: [
          {
            name: "Text",
            input: [
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: 'AC1 Name Tape',
              },
              {
                id: 'text',
                label: 'Text',
                type: 'input',
                placeholder: 'Name',
              },
            ],
          },
          {
            name: "Font & Background Colors",
            input: [
              {
                id: 'textColor',
                label: 'Text Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Almost There",
            input: [
              {
                id: 'glowBorder',
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: "leadTime",
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ]
      },
    },
    "call sign": {
      name: "Call Sign",
      basePrice: 15,
      config: {
        sizes: [
          {
            size: '3” x 2”',
            text: {
              primary: {
                placeholder: 'Text',
                maxLength: 4,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 0,
              glowBorder: 5,
            }
          },
          {
            size: '3” x 2” Two Sided',
            text: {
              primary: {
                placeholder: 'Text',
                maxLength: 4,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 15,
              glowBorder: 0,
            }
          },
          {
            size: '3.5” x 2”',
            text: {
              primary: {
                placeholder: 'Text',
                maxLength: 6,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 0,
              glowBorder: 5,
            }
          },
          {
            size: '3.5” x 2” Two Sided',
            text: {
              primary: {
                placeholder: 'OK',
                maxLength: 5,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 10,
            }
          },
          {
            size: '4” x 2”',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 10,
                lines: 1,
              }
            },
            flagEnabled: true,
            upsells: {
              size: 1,
              glowBorder: 5,
              hiVis: 4,
            }
          },
        ],
      },
      form: {
        intro: "Our Name Tape come in various sizes. For sizes 4 x 1, 5 x1 come with the option to add a flag.",
        btnText: "Get Started",
        steps: [
          {
            name: "Text & Size",
            status: 'current',
            input: [
              {
                id: 'text',
                label: 'Text',
                type: 'input',
                placeholder: '',
              },
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: '',
              },
            ],
          },
          {
            name: "Font & Background Colors",
            status: 'upcoming',
            input: [
              {
                id: 'textColor',
                label: 'Text Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                id: 'glowBorder',
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      }
    },
    "cover": {
      name: "Cover",
      basePrice: 8,
      config: {
        sizes: [
          {
            size: '3” x 1”',
            flagEnabled: false,
            upsells: {
              size: 0,
            }
          },
          {
            size: '4” x 1”',
            flagEnabled: false,
            upsells: {
              size: 1,
            }
          },
          {
            size: '4” x 1.5”',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 10,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 3,
              glowBorder: 5,
            }
          },
          {
            size: '5” x 1”',
            flagEnabled: false,
            upsells: {
              size: 2,
            }
          },
          {
            size: '5” x 1.5”',
            text: {
              primary: {
                placeholder: 'Your Name',
                maxLength: 13,
                lines: 1,
              }
            },
            flagEnabled: false,
            upsells: {
              size: 4,
              glowBorder: 5,
            }
          },
          {
            size: 'T.Rex Arms AC1',
            flagEnabled: false,
            upsells: {
              size: 2,
            }
          },
          {
            size: 'T.Rex Arms AC1 Front',
            flagEnabled: false,
            upsells: {
              size: 13,
            }
          },
          {
            size: 'T.Rex Arms AC1 Back Panel',
            flagEnabled: false,
            upsells: {
              size: 13,
            }
          },
          {
            size: '5.11 Tac Tec Carrier Trainer',
            flagEnabled: false,
            upsells: {
              size: 5,
            }
          },
          {
            size: '5.11 Tac Tec Carrier',
            flagEnabled: false,
            upsells: {
              size: 4,
            }
          },
          {
            size: '6” x 2”',
            flagEnabled: false,
            upsells: {
              size: 8,
            }
          },
          {
            size: '8” x 2”',
            flagEnabled: false,
            upsells: {
              size: 9,
            }
          },
          {
            size: '8” x 3”',
            flagEnabled: false,
            upsells: {
              size: 14,
            }
          },
          {
            size: '8” x 4”',
            flagEnabled: false,
            upsells: {
              size: 24,
            }
          },
          {
            size: '9” x 3”',
            flagEnabled: false,
            upsells: {
              size: 15,
            }
          },
          {
            size: '10” x 2”',
            flagEnabled: false,
            upsells: {
              size: 14,
            }
          },
          {
            size: '11” x 3”',
            flagEnabled: false,
            upsells: {
              size: 17,
            }
          },
          {
            size: '12” x 4”',
            flagEnabled: false,
            upsells: {
              size: 41,
            }
          }
        ],
      },
      form: {
        intro: "Our Covers come in various sizes. Covers are the various sizes of patches we create but no flags, symbols or writing will be on them. They are blank.",
        btnText: "Get Started",
        steps: [
          {
            name: "Size & Color",
            status: 'current',
            input: [
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: '',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. If your order only contains Covers, you can expect a much faster production time. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      }
    },
  },
  colors: {
    bgColors: [
      {
        name: 'Black',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/black.jpg?v=1678555191'
      },
      {
        name: 'Coyote Brown',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/coyote-brown.jpg?v=1678555191'
      },
      {
        name: 'Tan 499',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tan499.jpg?v=1678555191'
      },
      {
        name: 'OD Green',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/od-green.jpg?v=1678555191'
      },
      {
        name: 'Ranger Green',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/ranger-green.jpg?v=1678555191'
      },
      {
        name: 'Wolf Grey',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/wolf-grey.jpg?v=1678555191'
      },
      {
        name: 'Navy Blue',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/navy-blue.jpg?v=1678555191'
      },
      {
        name: 'Black Blue',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/blue-black.jpg?v=1678555190'
      },
      {
        name: 'Blaze Orange',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/blaze-orange.jpg?v=1678555191'
      },
      {
        name: 'Red',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/red.jpg?v=1678555191'
      },
      {
        name: 'Lime Green',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/lime-green.jpg?v=1678555191'
      },
      {
        name: 'Flourescent Pink',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pink.jpg?v=1678555191'
      },
      {
        name: 'Safety Yellow',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/saftey-yellow.jpg?v=1678555190'
      },
      {
        name: 'Purple',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/purple.jpg?v=1678555191'
      },
      { name: 'Multicam', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam.jpg?v=1678555191' },
      { name: 'Multicam Black', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-black.jpg?v=1678555191' },
      { name: 'Multicam Tropic', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-tropic.jpg?v=1678555191' },
      { name: 'Multicam Arid', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-arid.jpg?v=1678555191' },
      { name: 'Multicam Alpine', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-alpine.jpg?v=1678555191' },
      { name: 'Desert MARPAT', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/desert-marpat.jpg?v=1678555191' },
      { name: 'MARPAT', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/marpat.jpg?v=1678555191' },
      { name: 'M05 Woodland', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/marpat.jpg?v=1678555191' },
      { name: 'M81 Woodland', img: 'https://cdn-zeptoapps.com/product-personalizer/images/patchpanel.myshopify.com/Small-RF-M81-Woodland.jpg?v=12330' },
      { name: 'Kryptek Typhon', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/typhon.jpg?v=1678555191' },
      { name: 'Kryptek Mandrake', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/mandrake.jpg?v=1678555191' },
      { name: 'Flourescent Splatter with Hot Pink thread', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/splatter.jpg?v=1678555191' },
      { name: 'Flecktarn', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flactarn.jpg?v=1678555191' },
      { name: 'WZ93 PANTERA', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/wz93.jpg?v=1678555191' },
      { name: 'U.S. Desert Night Camo', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/desert-night.jpg?v=1678555191' },
      { name: 'CADPAT AR', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/cadpat-ar.jpg?v=1678555191' },
      { name: 'CADPAT TW', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/cadpat-tw.jpg?v=1678555191' },
      { name: 'AOR1', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/aor1.jpg?v=1678555191' },
      { name: 'AOR2', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/aor2.jpg?v=1678555191' },
      { name: 'A-TACS IX', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-ix.jpg?v=1678555191' },
      { name: 'A-TACS UCON', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-ucon.jpg?v=1678555191' },
      { name: 'A-TACS LE', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-le.jpg?v=1678555191' },
      { name: 'A-TACS GHOST', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-ghost.jpg?v=1678555191' },
      { name: 'A-TACS FG', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-fg.jpg?v=1678555191' },
      { name: 'PenCott GreenZone', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-greenzone.jpg?v=1678555191' },
      { name: 'PenCott BadLands', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-badlands.jpg?v=1678555191' },
      { name: 'PenCott Sandstorm', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-sandstorm.jpg?v=1678555191' },
      { name: 'PenCott SnowDrift', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-snowdrift.jpg?v=1678555191' },
      { name: 'Blue Plaid', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/blue-plaid.jpg?v=1678555191' },
      { name: 'FlockCam with Orange thread', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flockam-with-orange-thread.jpg?v=1678555191' },
      {
        name: 'Tadpole Tigerstripe',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tadpole-tigerstripe.jpg?v=1678555191'
      },
      {
        name: '6 Colour - Chocolate Chip',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/chocolate-chip.jpg?v=1678555191'
      },
      {
        name: 'WWII FrogSkin Brownside',
        img: 'https://cdn-zeptoapps.com/product-personalizer/images/patchpanel.myshopify.com/Small-RF-WWII-FrogSkin-Brownside.jpg?v=12330'
      },
      {
        name: 'WWII FrogSkin Greenside',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/wwii-frogskin.jpg?v=1678555191'
      },
      {
        name: 'Tie Dye (Limited Time)',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tie-dye.jpg?v=1678555191'
      },
      {
        name: 'Tropical (Limited Time)',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tropical.jpg?v=1678555191'
      }
    ],
    fontColors: [
      { name: 'Basic IR', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/basic-ir.jpg?v=1692905056' },
      { name: 'Pro IR', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pro-ir.jpg?v=1692905056' },
      { name: 'Reflective + Glow-in-the-Dark', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/reflective-glow-in-the-dark.jpg?v=1692905056' },
      { name: 'Glow in the Dark', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/glow-in-the-dark.jpg?v=1692905056' },
      { name: 'Flat Black', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flat-black.jpg?v=1692905056' },
      { name: 'Flat White', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flat-white.jpg?v=1692905056' },
      { name: 'Flat Yellow', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flat-yellow.jpg?v=1692905056' },
      { name: 'Flat Grey', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flat-grey.jpg?v=1692905056' },
      { name: 'Flat Spice Brown', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flat-spice-brown.jpg?v=1692905056' },
      { name: 'Yellow Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/yellow-reflective.jpg?v=1692905056' },
      { name: 'Orange Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/orange-reflective.jpg?v=1692905056' },
      { name: 'Red Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/red-reflective.jpg?v=1692905056' },
      { name: 'Lime Green Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/lime-green-reflective.jpg?v=1692905056' },
      { name: 'Blue Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/blue-reflective.jpg?v=1692905056' },
      { name: 'Silver Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/silver-reflective.jpg?v=1692905056' },
      { name: 'Purple Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/purple-reflective.jpg?v=1692905056' },
    ]
  },
  imgs: {
    "hi-vis": initHiVisFlags(),
    "laser-cut": initLaserCutFlags(),
    symbols: {
      "medical patch": initSymbols(),
      "division jacket panel": {
        bird: {
          name: "Bird",
          img: "https://cdn.shopify.com/s/files/1/2242/5805/files/division-bird-img.png?v=1699398852",
        },
        ring: {
          name: "Ring",
          img: "https://cdn.shopify.com/s/files/1/2242/5805/files/division-ring-img.png?v=1699398852",
        },
      }
    }
  },
  markType: {
    types: [
      "Laser Cut Flag",
      "HiVis Flag"
    ]
  },
  lightSabers: {
    types: [
      {
        name: "Darth Vader",
        hilt: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-darth-vader-hilt.png",
        blade: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-darth-vader-blade.png",
      },
      {
        name: "Obi Wan Kenobi",
        hilt: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-obi-wan-kenobi-hilt.png",
        blade: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-obi-wan-kenobi-blade.png",
      },
      // {
      //   name: "Kylo Ren",
      //   hilt: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-kylo-ren-hilt.png",
      //   blade: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-kylo-ren-blade.png",
      // },
      {
        name: "Luke Skywalker",
        hilt: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-luke-skywalker-hilt.png",
        blade: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-luke-skywalker-blade.png",
      },
      {
        name: "Count Dooku",
        hilt: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-count-dooku-hilt.png",
        blade: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-count-dooku-blade.png",
      },
      {
        name: "Mace Windu",
        hilt: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-mace-windu-hilt.png",
        blade: "https://cdn.shopify.com/s/files/1/2242/5805/files/lightsaber-mace-windu-blade.png",
      },
    ]
  },
  sizeOptions: [
    {
      name: "1” x 1”",
      ratio: "1:1"
    },
    {
      name: "2” x 2”",
      ratio: "1:1"
    },
    {
      name: "3” x 1”",
      ratio: "3:1"
    },
    {
      name: "3” x 1.5”",
      ratio: "2:1"
    },
    {
      name: "3” x 2”",
      ratio: "3:2"
    },
    {
      name: "Ranger Tab",
      ratio: "40:15"
    },
    {
      name: "3.5” Hex",
      ratio: "3:3.5"
    },
    {
      name: "3.5” x 2”",
      ratio: "7:4"
    },
    {
      name: "3.5” x 3.5”",
      ratio: "1:1"
    },
    {
      name: "3.5” x 4”",
      ratio: "7:8"
    },
    {
      name: "3.5” x 4.25”",
      ratio: "7:8.5"
    },
    {
      name: "3.6” x 5”",
      ratio: "18:25"
    },
    {
      name: "4” x 1”",
      ratio: "4:1"
    },
    {
      name: "4” x 1.5”",
      ratio: "8:3"
    },
    {
      name: "4” x 2”",
      ratio: "2:1"
    },
    {
      name: "4” x 4.5”",
      ratio: "8:9"
    },
    {
      name: "HHV Helmet",
      ratio: "4.125:1.75"
    },
    {
      name: "4.6” x 6.2”",
      ratio: "23:31"
    },
    {
      name: "5” x 1”",
      ratio: "5:1"
    },
    {
      name: "5” x 1.5”",
      ratio: "10:3"
    },
    {
      name: "5” x 3”",
      ratio: "5:3"
    },
    {
      name: "5.11 Tac Tec Carrier",
      ratio: "6:1"
    },
    {
      name: "T.Rex Arms AC1",
      ratio: "6:1",
    },
    {
      name: "Tactical Baby Gear",
      ratio: "6:2.5",
    },
    {
      name: "T.Rex Arms AC1 Front",
      ratio: "6:3",
    },
    {
      name: "T.Rex Arms AC1 Back Panel",
      ratio: '8.5:3',
    },
    {
      name: "6” x 2”",
      ratio: "3:1",
    },
    {
      name: "6” x 3”",
      ratio: "2:1",
    },
    {
      name: "Deadbug DV2",
      ratio: "6.25:4.125"
    },
    {
      name: "5.11 Tac Tec Carrier Trainer",
      ratio: "7.125:1"
    },
    {
      name: "8” x 2”",
      ratio: "4:1"
    },
    {
      name: "8” x 3”",
      ratio: "8:3"
    },
    {
      name: "Agilite Plate Carrier",
      ratio: "8:3"
    },
    {
      name: "8” x 4”",
      ratio: "2:1"
    },
    {
      name: "9” x 3”",
      ratio: "3:1"
    },
    {
      name: "GearDynamics Plate Carrier",
      ratio: "9.25:2.25"
    },
    {
      name: "10” x 2”",
      ratio: "5:1"
    },
    {
      name: "11” x 3”",
      ratio: "11:3"
    },
    {
      name: "12” x 4”",
      ratio: "3:1"
    },
  ]
};

initSymbols();

function initSymbols() {
  const folder = "https://cdn.shopify.com/s/files/1/2242/5805/files/";  // If you have a common folder path, you can add it here
  const end = "?v=1698434481j";
  // If there's a common file extension, you can add it here

  let imageList = [
    'symbols-tq-img.png',
    'symbols-star-of-life-img.png',
    'symbols-maple-leaf-img.png',
    'symbols-med-cross-img.png',
    'symbols-o-neg-img.png',
    'symbols-ab-neg-img.png',
    'symbols-ab-pos-img.png',
    'symbols-o-pos-img.png',
    'symbols-b-pos-img.png',
    'symbols-a-pos-img.png',
    'symbols-a-neg-img.png',
    'symbols-star-img.png',
    'symbols-k9-img.png'
  ];

  const formattedArray = imageList.map(image => {
    const name = image.replace("-img.png", "");
    const titleCaseName = name.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const formattedName = titleCaseName.replace("Symbols ", "").replace("Tq", "TQ").replace("Ab", "AB").replace("Pos", "Positive").replace("Neg", "Negative");
    return {
      name: formattedName,
      img: `${folder}${name}-img.png${end}`,
      glow: `${folder}${name}-glow-border.png${end}`,
      icon: `${folder}${name}-icon.png${end}`
    };
  });

  //console.log(formattedArray);

  return formattedArray;
}

function initHiVisFlags() {
  const folder = "https://cdn.shopify.com/s/files/1/2242/5805/files/";  // If you have a common folder path, you can add it here
  const end = "?v=1698434481j";
  // If there's a common file extension, you can add it here

  let imageList = [
    "usa-hivis",
    "state-alabama-hivis",
    "state-alaska-hivis",
    "state-arizona-hivis",
    "state-arkansas-hivis",
    "state-california-hivis",
    "state-colorado-hivis",
    "state-connecticut-hivis",
    "state-delaware-hivis",
    "state-florida-hivis",
    "state-georgia-hivis",
    "state-guam-hivis",
    "state-hawaii-hivis",
    "state-idaho-hivis",
    "state-iowa-hivis",
    "state-kansas-hivis",
    "state-louisiana-hivis",
    "state-maine-hivis",
    "state-maryland-hivis",
    "state-massachusetts-hivis",
    "state-minnesota-hivis",
    "state-mississippi-hivis",
    "state-missouri-hivis",
    "state-montana-hivis",
    "state-nebraska-hivis",
    "state-nevada-hivis",
    "state-new-jersey-hivis",
    "state-new-mexico-hivis",
    "state-new-york-hivis",
    "state-north-carolina-hivis",
    "state-north-dakota-hivis",
    "state-oklahoma-hivis",
    "state-oregon-hivis",
    "state-puerto-rico-hivis",
    "state-rhode-island-hivis",
    "state-south-carolina-hivis",
    "state-south-dakota-hivis",
    "state-texas-hivis",
    "state-us-virgin-islands-hivis",
    "state-utah-hivis",
    "state-virginia-hivis",
    "state-washington-hivis",
    "state-west-virginia-hivis",
    "state-wyoming-hivis",
    "usa-black-and-white-hivis",
    "usa-thin-blue-line-black-and-white-hivis",
    "usa-thin-blue-line-hivis",
    "usa-thin-red-line-black-and-white-hivis",
    "usa-thin-red-line-hivis",
    "service-branches-united-states-air-force-hivis",
    "service-branches-united-states-army-hivis",
    "service-branches-united-states-coast-guard-hivis",
    "service-branches-united-states-marine-corps-hivis",
    "service-branches-united-states-navy-hivis",
    "canada-hivis",
    "province-british-columbia-hivis",
    "province-manitoba-hivis",
    "province-new-brunswick-hivis",
    "province-newfoundland-and-labrador-hivis",
    "province-northwest-territories-hivis",
    "province-nova-scotia-hivis",
    "province-nunavut-hivis",
    "province-prince-edward-island-hivis",
    "province-saskatchewan-hivis",
    "province-yukon-hivis",
    "canada-thin-blue-line-black-and-white-hivis",
    "canada-thin-blue-line-hivis",
    "canada-thin-green-line-black-and-white-hivis",
    "canada-thin-green-line-hivis",
    "canada-thin-red-line-black-and-white-hivis",
    "canada-thin-red-line-hivis",
    "argentina-hivis",
    "armenia-hivis",
    "austrailia-hivis",
    "austria-hivis",
    "belarus-hivis",
    "belgium-hivis",
    "brazil-hivis",
    "cambodia-hivis",
    "canada-black-and-white-hivis",
    "cayman-islands-hivis",
    "chile-hivis",
    "china-hivis",
    "columbia-hivis",
    "croatia-hivis",
    "cuba-hivis",
    "czech-republic-hivis",
    "denmark-hivis",
    "dominican-republic-hivis",
    "egypt-hivis",
    "estonia-hivis",
    "fallout-brotherhood-of-steel",
    "fallout-enclave-hivis",
    "fallout-minute-men-hivis",
    "fallout-new-california-republic",
    "finland-hivis",
    "france-hivis",
    "germany-hivis",
    "greece-hivis",
    "guatemala-hivis",
    "guernsey-channel-islands-hivis",
    "hong-kong-1959-1997-hivis",
    "hong-kong-hivis",
    "hungary-hivis",
    "iceland-hivis",
    "indonesia-hivis",
    "iraq-hivis",
    "ireland-hivis",
    "israel-hivis",
    "italy-hivis",
    "jamaica-hivis",
    "japan-insert",
    "kosovo-hivis",
    "kurdistan-hivis",
    "kuwait-hivis",
    "laos-hivis",
    "latvia-hivis",
    "malaysia-hivis",
    "mexico-hivis",
    "moldova-hivis",
    "netherlands-hivis",
    "new-zealand-hivis",
    "norway-hivis",
    "pakistan-insert",
    "philippines-hivis",
    "pirate-black-beard-hivis",
    "pirate-calico-jack-hivis",
    "pirate-jolly-roger-hivis",
    "poland-hivis",
    "portugal-hivis",
    "quebec-hivis",
    "rhodesia-hivis",
    "romania-hivis",
    "russia-hivis",
    "scotland-hivis",
    "serbia-hivis",
    "singapore-hivis",
    "slovakia-hivis",
    "south-africa-hivis",
    "south-korea-hivis",
    "spain-hivis",
    "star-of-life-hivis",
    "sweden-hivis",
    "switzerland-hivis",
    "taiwan-hivis",
    "thailand-hivis",
    "ukraine-hivis",
    "united-nations-hivis",
    "venezuela-hivis",
    "vietnam-hivis"
  ];

  const formattedArray = imageList.map(image => {
    const name = image;
    const titleCaseName = name.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const formattedName = titleCaseName.replace(" Hivis", "").replace("Usa", "USA").replace(/^(State)\s(.*)$/, '$2 ($1)').replace(/^(Service Branches)\s(.*)$/, '$2 ($1)').replace("Us", "US").replace(/^(Province)\s(.*)$/, '$2 ($1)');
    return {
      name: formattedName,
      img: `${folder}insert-${name}.png${end}`,
      icon: `${folder}insert-${name}.png${end}`,
    };
  });

  return formattedArray;
}


function initLaserCutFlags() {
  const folder = "https://cdn.shopify.com/s/files/1/2242/5805/files/";  // If you have a common folder path, you can add it here
  const end = "?v=1698434481j";
  const sizes = [
    "3 x 2",
    "3.5 x 2",
    "5 x 3",
    "6 x 3",
    "Mini-ID",
    "Large-ID"
  ];    // If there's a common file extension, you can add it here



  let laserObj = {};
  sizes.forEach(size => {
    let imageList = [];
    let key = size.replace(/ /g, "").toLowerCase();
    let iconKey = key;
    // console.log(iconKey);

    switch (iconKey) {
      case '3x2':
        imageList = [
          'acadia.png',
          'alabama.png',
          'alaska.png',
          'antartica.png',
          'aquila.png',
          'argentina.png',
          'arizona.png',
          'arkansas.png',
          'armenia.png',
          'australia.png',
          'austria.png',
          'belgium.png',
          'betsy-ross.png',
          'british-columbia.png',
          'calico-jack.png',
          'california.png',
          'canada.png',
          'chicago.png',
          'chile.png',
          'china.png',
          'christian-flag.png',
          'coast-guard.png',
          'colorado.png',
          'colombia.png',
          'croatia.png',
          'cuba.png',
          'czech-republic.png',
          'denmark.png',
          'egypt.png',
          'european-union.png',
          'finland.png',
          'flordia.png',
          'france.png',
          'frogman.png',
          'gadsden.png',
          'galactic-empire.png',
          'galactic-republic.png',
          'georgia-country.png',
          'georgia-state.png',
          'germany.png',
          'greece.png',
          'guernsey-channel-islands.png',
          'hawaii.png',
          'hong-kong.png',
          'hungary.png',
          'iceland.png',
          'imperial-japan.png',
          'indiana.png',
          'indianapolis.png',
          'indonesia.png',
          'iraq.png',
          'ireland.png',
          'israel.png',
          'italy.png',
          'japan.png',
          'jedi-order.png',
          'jolly-roger.png',
          'jordan.png',
          'kurdistan.png',
          'kuwait.png',
          'kyrgyzstan.png',
          'laos.png',
          'latvia.png',
          'macau.png',
          'malaysia.png',
          'maryland.png',
          'mexico.png',
          'mississippi.png',
          'mythosaur.png',
          'navy-jack.png',
          'netherlands.png',
          'new-england.png',
          'new-mexico.png',
          'new-orleans.png',
          'new-zeland.png',
          'north-carolina.png',
          'norway.png',
          'ohio.png',
          'pakistan.png',
          'philippines.png',
          'poland.png',
          'portugal.png',
          'puerto-rico.png',
          'quebec.png',
          'rebel-alliance.png',
          'russia.png',
          'scotland.png',
          'singapore.png',
          'sons-of-liberty.png',
          'south-africa.png',
          'south-carolina.png',
          'south-korea.png',
          'spain.png',
          'sweden.png',
          'switzerland.png',
          'taiwan.png',
          'tennessee.png',
          'texas.png',
          'thailand.png',
          'tonga.png',
          'trinidad-and-tobago.png',
          'turkey.png',
          'ukraine.png',
          'united-kingdom.png',
          'usa.png',
          'usmc-ega.png',
          'utah.png',
          'vader-wants-you.png',
          'venezuela.png',
          'vietnam.png'
        ];
      case '3.5x2':
        imageList = [
          'acadia.png',
          'alabama.png',
          'alaska.png',
          'antartica.png',
          'argentina.png',
          'armenia.png',
          'australia.png',
          'austria.png',
          'belgium.png',
          'betsy-ross.png',
          'british-columbia.png',
          'calico-jack.png',
          'california-republic.png',
          'canada.png',
          'chicago.png',
          'chile.png',
          'china.png',
          'christian-flag.png',
          'coast-guard.png',
          'colorado.png',
          'columbia.png',
          'croatia.png',
          'cuba.png',
          'czech-republic.png',
          'denmark.png',
          'egypt.png',
          'european-union.png',
          'finland.png',
          'flordia.png',
          'france.png',
          'frogman.png',
          'gadsden.png',
          'galactic-empire.png',
          'galactic-republic.png',
          'georgia-country.png',
          'georgia-state.png',
          'germany.png',
          'greece.png',
          'guernsey-channel-islands.png',
          'hawaii.png',
          'hong-kong.png',
          'hungary.png',
          'iceland.png',
          'imperial-aquila.png',
          'imperial-japan.png',
          'indiana.png',
          'indianapolis.png',
          'indonesia.png',
          'iraq.png',
          'ireland.png',
          'israel.png',
          'italy.png',
          'japan.png',
          'jedi-order.png',
          'jolly-roger.png',
          'jordan.png',
          'kurdistan.png',
          'kuwait.png',
          'kyrgyzstan.png',
          'laos.png',
          'latvia.png',
          'macau.png',
          'malaysia.png',
          'maryland.png',
          'mexico.png',
          'mississippi.png',
          'mythosaur.png',
          'navy-jack.png',
          'netherlands.png',
          'new-england.png',
          'new-mexico.png',
          'new-orleans.png',
          'new-zeland.png',
          'north-carolina.png',
          'norway.png',
          'ohio.png',
          'pakistan.png',
          'philippines.png',
          'poland.png',
          'portugal.png',
          'puerto-rico.png',
          'quebec.png',
          'rebel-alliance.png',
          'russia.png',
          'scotland.png',
          'singapore.png',
          'sons-of-liberty.png',
          'south-africa.png',
          'south-carolina.png',
          'south-korea.png',
          'spain.png',
          'sweden.png',
          'switzerland.png',
          'taiwan.png',
          'tennessee.png',
          'texas.png',
          'thailand.png',
          'tonga.png',
          'trinidad-and-tobago.png',
          'turkey.png',
          'ukraine-standard.png',
          'united-kingdom.png',
          'usa.png',
          'usmc-ega.png',
          'utah.png',
          'vader-wants-you.png',
          'venezuela.png',
          'vietnam.png'
        ];
      case '5x3':
        imageList = [
          'acadia.png',
          'alabama.png',
          'alaska.png',
          'antartica.png',
          'aquila.png',
          'argentina.png',
          'arizona.png',
          'arkansas.png',
          'armenia.png',
          'australia.png',
          'austria.png',
          'belgium.png',
          'betsy-ross.png',
          'black-beard.png',
          'british-columbia.png',
          'calico-jack.png',
          'california.png',
          'canada.png',
          'chicago.png',
          'chile.png',
          'china.png',
          'christian-flag.png',
          'coast-guard.png',
          'colombia.png',
          'colorado.png',
          'colombia.png',
          'croatia.png',
          'cuba.png',
          'czech-republic.png',
          'denmark.png',
          'egypt.png',
          'european-union.png',
          'finland.png',
          'flordia.png',
          'france.png',
          'frogman.png',
          'gadsden.png',
          'galactic-empire.png',
          'galactic-republic.png',
          'georgia-country.png',
          'georgia-state.png',
          'germany.png',
          'greece.png',
          'guernsey-channel-islands.png',
          'hawaii.png',
          'hong-kong.png',
          'hungary.png',
          'iceland.png',
          'imperial-japan.png',
          'indiana.png',
          'indianapolis.png',
          'indonesia.png',
          'iraq.png',
          'ireland.png',
          'israel.png',
          'italy.png',
          'japan.png',
          'jedi-order.png',
          'jolly-roger.png',
          'jordan.png',
          'krygyzstan.png',
          'kurdistan.png',
          'kuwait.png',
          'laos.png',
          'latvia.png',
          'macau.png',
          'malaysia.png',
          'maryland.png',
          'mexico.png',
          'mississippi.png',
          'mythosaur.png',
          'navy-jack.png',
          'netherlands.png',
          'new-england.png',
          'new-mexico.png',
          'new-orleans.png',
          'new-zealand.png',
          'north-carolina.png',
          'norway.png',
          'ohio.png',
          'pakistan.png',
          'philippines.png',
          'poland.png',
          'portugal.png',
          'puerto-rico.png',
          'quebec.png',
          'rebel-alliance.png',
          'russia.png',
          'scotland.png',
          'singapore.png',
          'sons-of-liberty.png',
          'south-africa.png',
          'south-carolina.png',
          'south-korea.png',
          'spain.png',
          'sweden.png',
          'switzerland.png',
          'taiwan.png',
          'tennessee.png',
          'texas.png',
          'thailand.png',
          'tonga.png',
          'trinidad-and-tobago.png',
          'turkey.png',
          'ukraine.png',
          'united-kingdom.png',
          'usa.png',
          'usmc-ega.png',
          'utah.png',
          'vader-wants-you.png',
          'venezuela.png',
          'virginia.png',
        ];
      case '6x3':
        imageList = [
          'acadia.png',
          'alabama.png',
          'alaska.png',
          'antartica.png',
          'aquila.png',
          'argentina.png',
          'arizona.png',
          'arkansas.png',
          'armenia.png',
          'australia.png',
          'austria.png',
          'belgium.png',
          'betsy-ross.png',
          'black-beard.png',
          'british-columbia.png',
          'calico-jack.png',
          'california.png',
          'canada.png',
          'chicago.png',
          'chile.png',
          'china.png',
          'christian-flag.png',
          'coast-guard.png',
          'colombia.png',
          'colorado.png',
          'colombia.png',
          'croatia.png',
          'cuba.png',
          'czech-republic.png',
          'denmark.png',
          'egypt.png',
          'european-union.png',
          'finland.png',
          'flordia.png',
          'france.png',
          'frogman.png',
          'gadsden.png',
          'galactic-empire.png',
          'galactic-republic.png',
          'georgia-country.png',
          'georgia-state.png',
          'germany.png',
          'greece.png',
          'guernsey-channel-islands.png',
          'hawaii.png',
          'hong-kong.png',
          'hungary.png',
          'iceland.png',
          'imperial-japan.png',
          'indiana.png',
          'indianapolis.png',
          'indonesia.png',
          'iraq.png',
          'ireland.png',
          'israel.png',
          'italy.png',
          'japan.png',
          'jedi-order.png',
          'jolly-roger.png',
          'jordan.png',
          'krygyzstan.png',
          'kurdistan.png',
          'kuwait.png',
          'laos.png',
          'latvia.png',
          'macau.png',
          'malaysia.png',
          'maryland.png',
          'mexico.png',
          'mississippi.png',
          'mythosaur.png',
          'navy-jack.png',
          'netherlands.png',
          'new-england.png',
          'new-mexico.png',
          'new-orleans.png',
          'new-zealand.png',
          'north-carolina.png',
          'norway.png',
          'ohio.png',
          'pakistan.png',
          'philippines.png',
          'poland.png',
          'portugal.png',
          'puerto-rico.png',
          'quebec.png',
          'rebel-alliance.png',
          'russia.png',
          'scotland.png',
          'singapore.png',
          'sons-of-liberty.png',
          'south-africa.png',
          'south-carolina.png',
          'south-korea.png',
          'spain.png',
          'sweden.png',
          'switzerland.png',
          'taiwan.png',
          'tennessee.png',
          'texas.png',
          'thailand.png',
          'tonga.png',
          'trinidad-and-tobago.png',
          'turkey.png',
          'ukraine.png',
          'united-kingdom.png',
          'usa.png',
          'usmc-ega.png',
          'utah.png',
          'vader-wants-you.png',
          'venezuela.png',
          'virginia.png',
        ];
        break;
      case 'mini-id':
        imageList = [
          "acadia.png",
          "alabama.png",
          "alaska.png",
          "antartica.png",
          "arizona.png",
          "arkansas.png",
          "australia.png",
          "austria.png",
          "belgium.png",
          "betsy-ross.png",
          "black-beard.png",
          "british-columbia.png",
          "calico-jack.png",
          "california-republic.png",
          "canada.png",
          "chicago.png",
          "chile.png",
          "china.png",
          "coast-guard.png",
          "colorado.png",
          "columbia.png",
          "croatia.png",
          "cuba.png",
          "czech-republic.png",
          "denmark.png",
          "european-union.png",
          "finland.png",
          "florida.png",
          "france.png",
          "frogman.png",
          "galactic-empire.png",
          "galactic-republic.png",
          "georgia-country.png",
          'georgia-state.png',
          "germany.png",
          "greece.png",
          "guernsey-channel-islands.png",
          "hawaii.png",
          "hong-kong.png",
          "hungary.png",
          "iceland.png",
          "imperial-aquila.png",
          "imperial-japan.png",
          "indiana.png",
          "indianapolis.png",
          "indonesia.png",
          "iraq.png",
          "ireland.png",
          "israel.png",
          "italy.png",
          "japan.png",
          "jedi-order.png",
          "jolly-roger.png",
          "jordan.png",
          "kurdistan.png",
          "kuwait.png",
          "latvia.png",
          "malaysia.png",
          "maryland.png",
          "mexico.png",
          "mississippi.png",
          "mythosaur.png",
          "navy-jack.png",
          "netherlands.png",
          "new-england.png",
          "new-mexico.png",
          "new-orleans.png",
          "new-zealand.png",
          "north-carolina.png",
          "norway.png",
          "ohio.png",
          "pakistan.png",
          "philippines.png",
          "poland.png",
          "portugal.png",
          "puerto-rico.png",
          "quebec.png",
          "rebel-alliance.png",
          "russia.png",
          "scotland.png",
          "singapore.png",
          "sons-of-liberty.png",
          "south-africa.png",
          "south-carolina.png",
          "south-korea.png",
          "sweden.png",
          "switzerland.png",
          "taiwan.png",
          "tennessee.png",
          "texas.png",
          "thailand.png",
          "turkey.png",
          "ukraine.png",
          "united-kingdom.png",
          "usa.png",
          "utah.png",
          "vietnam.png",
          "venezuela.png"
        ];
        break;
      case 'large-id':
        imageList = [
          "acadia.png",
          "alabama.png",
          "alaska.png",
          "antartica.png",
          "arizona.png",
          "arkansas.png",
          "australia.png",
          "austria.png",
          "belgium.png",
          "betsy-ross.png",
          "british-columbia.png",
          "calico-jack.png",
          "california-republic.png",
          "canada.png",
          "chicago.png",
          "chile.png",
          "china.png",
          "coast-guard.png",
          "colorado.png",
          "columbia.png",
          "croatia.png",
          "cuba.png",
          "czech-republic.png",
          "denmark.png",
          "european-union.png",
          "finland.png",
          "florida.png",
          "france.png",
          "frogman.png",
          "galactic-empire.png",
          "galactic-republic.png",
          "georgia-country.png",
          "germany.png",
          "greece.png",
          "guernsey-channel-islands.png",
          "hawaii.png",
          "hong-kong.png",
          "hungary.png",
          "iceland.png",
          "imperial-aquila.png",
          "indiana.png",
          "indianapolis.png",
          "indonesia.png",
          "ireland.png",
          "israel.png",
          "italy.png",
          "japan.png",
          "jedi-order.png",
          "jolly-roger.png",
          "jordan.png",
          "kurdistan.png",
          "kuwait.png",
          "latvia.png",
          "malaysia.png",
          "maryland.png",
          "mexico.png",
          "mississippi.png",
          "mythosaur.png",
          "navy-jack.png",
          "netherlands.png",
          "new-england.png",
          "new-mexico.png",
          "new-orleans.png",
          "new-zealand.png",
          "north-carolina.png",
          "norway.png",
          "ohio.png",
          "pakistan.png",
          "philippines.png",
          "poland.png",
          "portugal.png",
          "puerto-rico.png",
          "quebec.png",
          "rebel-alliance.png",
          "russia.png",
          "scotland.png",
          "singapore.png",
          "sons-of-liberty.png",
          "south-africa.png",
          "south-carolina.png",
          "south-korea.png",
          "sweden.png",
          "switzerland.png",
          "taiwan.png",
          "tennessee.png",
          "texas.png",
          "thailand.png",
          "tonga.png",
          "trinidad-and-tobago.png",
          "turkey.png",
          "ukraine.png",
          "united-kingdom.png",
          "usa.png",
          "utah.png",
          "vietnam.png",
          "venezuela.png"
        ];
        break;
    }
    const formattedArray = imageList.map(image => {
      const name = image.replace(".png", "");
      const titleCaseName = name.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      const formattedName = titleCaseName.replace(" Lc ", "").replace("Usa", "USA");
      //  const formattedName = titleCaseName.replace(" Lc ", "").replace("Uk", "UK").replace("Usa", "USA");
      return {
        name: formattedName,
        img: `${folder}${key}-lc-${name}-img.png${end}`,
        glow: `${folder}${key}-lc-${name}-glow-border.png${end}`,
        icon: `${folder}${name}-icon.png${end}`
      };
    });
    laserObj[key] = formattedArray;
  });

  //console.log(laserObj);

  return laserObj;
}

export default builderData;
