// Import React hooks and components
import { useState } from 'react';

import {
  Upload,
  AdvancedSelect,
  FormButton,
} from '~/components';

import builderData from '~/data/builder.js';

// Form element to customize the patch
export function Form({ formData, setFormData, productURL, data, config, product, methods, ...props }) {

  const {
    bgColors,
    fontColors,
    imgs,
    symbols,
    markTypeOptions,
    saberOptions,
  } = methods.data;

  const newIRFontName = `Pro IR - +$${formData.price.upsells.proIRFontColor}(USD)`;
  const newReflectiveGlowFontName = `Reflective + Glow-in-the-Dark - +$${formData.price.upsells.reflectiveGlowFontColor}(USD)`;

  const newFontColors = fontColors.map((color) => {
    if (color.name === 'Pro IR') {
      return { ...color, name: newIRFontName };
    }
    if (color.name === 'Reflective + Glow-in-the-Dark') {
      return { ...color, name: newReflectiveGlowFontName };
    }
    return color;
  });

  const patchType = methods.helpers.get.type(product);
  let tempSteps = [
    { name: 'Text', href: '#', status: 'current', step: 1 },
    { name: 'Patch Size', href: '#', status: 'current', step: 2 },
    { name: 'Font & Background Colors', href: '#', status: 'upcoming', step: 3 },
    { name: 'Flag', href: '#', status: 'upcoming', step: 4 },
    { name: 'Almost There', href: '#', status: 'upcoming', step: 5 },
  ];

  const convertSizeString = methods.helpers.utility.convertSizeString;

  let upsells = {};

  // switch (formData.type.toLowerCase()) {
  //   case 'name tape':
  //     tempSteps = builderData.type["name tape"].form.steps;
  //     break;
  //   case 'id panel':
  //     tempSteps = builderData.type["id panel"].form.steps;
  //     break;
  //   case 'medical patch':
  //     tempSteps = builderData.type["medical patch"].form.steps;
  //     break;
  //   case 'flag':
  //     tempSteps = builderData.type["flag"].form.steps;
  //     break;
  //   case 'light sabers':
  //     tempSteps = builderData.type["light sabers"].form.steps;
  //     break;
  //   case 'custom printed patch':
  //     tempSteps = builderData.type["custom printed patch"].form.steps;
  //     break;
  //   case 'jacket panel':
  //     tempSteps = builderData.type["jacket panel"].form.steps;
  //     break;
  //   case 'division jacket panel':
  //     tempSteps = builderData.type["division jacket panel"].form.steps;
  //     break;
  //   default:
  //     break;
  // }

  const type = formData.type.toLowerCase();
  tempSteps = builderData.type[type]?.form.steps || [];

  let tempStepObj = {
    steps: tempSteps,
    currentStep: 1,
    obj: tempSteps[0]
  };

  const [steps, setSteps] = useState(tempSteps);

  const currentStepIndex = steps.findIndex(step => step.status === 'current');
  const [currentStep, setCurrentStep] = useState(currentStepIndex + 1);
  const [currentStepObj, setCurrentStepObj] = useState(steps[currentStepIndex]);

  const [stepForm, setStepForm] = useState(tempStepObj);

  const handleFlagTypeChange = (event) => {
    const selectedType = event.target.value.toLowerCase();

    setFormData((prevFormData) => ({
      ...prevFormData,
      img: {
        ...prevFormData.img,
        type: event.target.value,
      },
      upsells: {
        ...prevFormData.upsells,
        hiVis: selectedType === "hivis flag",
        badge: selectedType === "upload",
      }
    }));
  };

  const handleSaberTypeChange = (event) => {
    const obj = saberOptions.find(value => value.name === event.target.value);
    let newHiltColor = '';
    let newBladeColor = '';

    switch (obj.name.toLowerCase()) {
      case 'kylo ren':
      case 'darth vader':
      case 'count dooku':
        newHiltColor = fontColors[7];
        newBladeColor = fontColors[11];
        break;
      case 'luke skywalker':
      case 'obi wan kenobi':
        newHiltColor = fontColors[7];
        newBladeColor = fontColors[13];
        break;
      case 'mace windu':
        newHiltColor = fontColors[7];
        newBladeColor = fontColors[15];
        break;
      default:
        break;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      lightsaber: {
        ...prevFormData.lightsaber,
        saberType: event.target.value,
        hilt: {
          ...prevFormData.lightsaber.hilt,
          name: newHiltColor.name,
          color: newHiltColor.img,
          img: obj.hilt
        },
        blade: {
          ...prevFormData.lightsaber.blade,
          name: newBladeColor.name,
          color: newBladeColor.img,
          img: obj.blade
        }
      }
    }));
  };


  // Define a function to handle the change of the font text color dropdown menu
  const handleHiltColorChange = (event) => {
    // Find the selected font text color from data array
    let obj = {};
    if (event.name.includes("Pro IR")) {
      obj = fontColors.find(value => value.name.includes('Pro IR'));
      obj.name = 'Pro IR - +$' + formData.price.upsells.proIRFontColor + '(USD)';
    } else if (event.name.includes("Reflective + Glow")) {
      obj = fontColors.find(value => value.name.includes('Reflective + Glow'));
      obj.name = 'Reflective + Glow-in-the-Dark - +$' + formData.price.upsells.reflectiveGlowFontColor + '(USD)';
    } else {
      obj = fontColors.find(value => value.name === event.name);
    }
    var isProIR = false;
    var isReflectiveGlow = false;
    console.log(obj);

    if (event.name.includes("Pro IR")) {
      isProIR = true;
    }
    if (event.name.includes("Reflective + Glow")) {
      isReflectiveGlow = true;
    }

    // Set the form data with the selected font text color and its image
    //setFormData({ ...formData, hiltColorImg: obj.img, proIRFontColor: isProIR, reflectiveGlowFontColor: isReflectiveGlow });
    setFormData({ ...formData, lightsaber: { ...formData.lightsaber, hilt: { ...formData.lightsaber.hilt, name: obj.name, color: obj.img } }, upsells: { ...formData.upsells, proIRFontColor: isProIR, reflectiveGlowFontColor: isReflectiveGlow } });
  };

  // Define a function to handle the change of the font text color dropdown menu
  const handleBladeColorChange = (event) => {
    let obj = {};
    let isProIR = false;
    let isReflectiveGlow = false;

    if (event.name.includes("Pro IR")) {
      obj = fontColors.find(value => value.name.includes('Pro IR'));
      obj.name = `Pro IR - +$${formData.price.upsells.proIRFontColor}(USD)`;
      isProIR = true;
    } else if (event.name.includes("Reflective + Glow")) {
      obj = fontColors.find(value => value.name.includes('Reflective + Glow'));
      obj.name = `Reflective + Glow-in-the-Dark - +$${formData.price.upsells.reflectiveGlowFontColor}(USD)`;
      isReflectiveGlow = true;
    } else {
      obj = fontColors.find(value => value.name === event.name);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      lightsaber: {
        ...prevFormData.lightsaber,
        blade: {
          ...prevFormData.lightsaber.blade,
          name: obj.name,
          color: obj.img
        }
      },
      upsells: {
        ...prevFormData.upsells,
        proIRFontColor: isProIR,
        reflectiveGlowFontColor: isReflectiveGlow
      }
    }));
  };

  // Define a function to handle the change of the font text color dropdown menu
  const handleRingColorChange = (event) => {
    let obj = {};
    let isProIR = false;
    let isReflectiveGlow = false;

    if (event.name.includes("Pro IR")) {
      obj = fontColors.find(value => value.name.includes('Pro IR'));
      obj.name = `Pro IR - +$${formData.price.upsells.proIRFontColor}(USD)`;
      isProIR = true;
    } else if (event.name.includes("Reflective + Glow")) {
      obj = fontColors.find(value => value.name.includes('Reflective + Glow'));
      obj.name = `Reflective + Glow-in-the-Dark - +$${formData.price.upsells.reflectiveGlowFontColor}(USD)`;
      isReflectiveGlow = true;
    } else {
      obj = fontColors.find(value => value.name === event.name);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      img: {
        ...prevFormData.img,
        division: {
          ...prevFormData.img.division,
          ring: {
            ...prevFormData.img.division.ring,
            color: { ...prevFormData.img.division.ring.color, name: obj.name, img: obj.img }
          }
        }
      },
      upsells: {
        ...prevFormData.upsells,
        proIRFontColor: isProIR,
        reflectiveGlowFontColor: isReflectiveGlow
      }
    }));
  };

  // Define a function to handle the change of the text input field
  const handleTextChange = (event) => {
    setFormData({ ...formData, text: { ...formData.text, primary: { ...formData.text.primary, text: event.target.value } } });
  };

  const handleText3Change = (event) => {
    setFormData({ ...formData, text: { ...formData.text, third: { ...formData.text.third, text: event.target.value } } });
  };

  const handleText4Change = (event) => {
    setFormData({ ...formData, text: { ...formData.text, fourth: { ...formData.text.fourth, text: event.target.value } } });
  };

  const handleText5Change = (event) => {
    setFormData({ ...formData, text: { ...formData.text, fifth: { ...formData.text.fifth, text: event.target.value } } });
  }

  const handleText6Change = (event) => {
    setFormData({ ...formData, text: { ...formData.text, sixth: { ...formData.text.sixth, text: event.target.value } } });
  }

  const handleText7Change = (event) => {
    setFormData({ ...formData, text: { ...formData.text, seventh: { ...formData.text.seventh, text: event.target.value } } });
  }

  const maxRows = 2;
  const [rows, setRows] = useState(maxRows);
  // Define a function to handle the change of the additional text input field
  const handleTextAdditionalChange = (event) => {
    setFormData({ ...formData, text: { ...formData.text, secondary: { ...formData.text.secondary, text: event.target.value } } });
  };

  // Define a function to handle the change of the size dropdown menu
  const handleSizeChange = (event) => {
    const obj = patchType.config;


    const objSizes = obj.sizes.find(value => value.size === event.target.value);

    // (objSizes.upsells.size);
    // Get the current size key from the event target value
    const sizeKey = convertSizeString(event.target.value);

    upsells = methods.helpers.get.upsells(product, event.target.value);
    console.log(upsells);

    let sizeObject = "";

    if (methods.helpers.is.patchType.idPanel(formData)) {
      if (methods.helpers.is.mini(formData.type, event.target.value)) {
        sizeObject = imgs['laser-cut']["mini-id"];
      } else {
        sizeObject = imgs['laser-cut']["large-id"];
      }
    } else {
      if (methods.helpers.is.flagPatch.ac1Front(formData)) {
        sizeObject = imgs['laser-cut']['5x3'];
      } else {
        sizeObject = imgs['laser-cut'][sizeKey];
      }
    }
    // Get the corresponding size object from the imgs['laser-cut'] object
    // Get the current mask name from the formData object
    const maskName = formData.img.color.mask.name;
    // Find the mask object in the size object with a name property equal to the current mask name
    const maskObject = sizeObject?.find(value => value.name === maskName) || {};

    if (formData.type.toLowerCase() == "medical patch") {
      if (event.target.value == '3.5” x 2”') {
        setFormData({
          ...formData,
          price: {
            ...formData.price,
            upsells: {
              ...formData.price.upsells,
              size: objSizes.upsells.size,
              glowBorder: objSizes.upsells.glowBorder || 0,
            },
          },
          size: {
            ...formData.size,
            current: event.target.value
          },
          text: {
            ...formData.text,
            primary: {
              ...formData.text.primary,
              lines: objSizes.text.primary.lines,
              maxLength: objSizes.text.primary.maxLength,
              placeholder: objSizes.text.primary.placeholder
            }
          },
          img: {
            ...formData.img,
            name: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").name,
            img: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").img,
            color: {
              ...formData.img.color,
              mask: {
                name: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").name,
                img: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").img,
                glow: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").glow,
                icon: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").icon,
              }
            }
          },
        });
      } else if (event.target.value == '3.5” Hexagonal') {
        setFormData({
          ...formData,
          price: {
            ...formData.price,
            upsells: {
              ...formData.price.upsells,
              size: objSizes.upsells.size,
              glowBorder: objSizes.upsells.glowBorder || 0,
            },
          },
          size: {
            ...formData.size,
            current: event.target.value
          },
          text: {
            ...formData.text,
            primary: {
              ...formData.text.primary,
              lines: objSizes.text.primary.lines,
              maxLength: objSizes.text.primary.maxLength,
              placeholder: objSizes.text.primary.placeholder
            }
          },
          img: {
            ...formData.img,
            name: methods.data.imgs["symbols"]['hex'].find(value => value.name == "Med").name,
            img: methods.data.imgs["symbols"]['hex'].find(value => value.name == "Med").img,
            color: {
              ...formData.img.color,
              mask: {
                name: methods.data.imgs["symbols"]['hex'].find(value => value.name == "Med").name,
                img: methods.data.imgs["symbols"]['hex'].find(value => value.name == "Med").img,
                glow: methods.data.imgs["symbols"]['hex'].find(value => value.name == "Med").glow,
                icon: methods.data.imgs["symbols"]['hex'].find(value => value.name == "Med").icon,
              }
            }
          },
        });
        console.log(methods.data.imgs["symbols"])
      } else {
        setFormData({
          ...formData,
          price: {
            ...formData.price,
            upsells: {
              ...formData.price.upsells,
              size: objSizes.upsells.size,
              glowBorder: objSizes.upsells.glowBorder || 0,

            },
          },
          size: {
            ...formData.size,
            current: event.target.value
          },
          text: {
            ...formData.text,
            primary: {
              ...formData.text.primary,
              lines: objSizes.text.primary.lines,
              maxLength: objSizes.text.primary.maxLength,
              placeholder: objSizes.text.primary.placeholder
            }
          },
          img: {
            ...formData.img,
            name: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").name,
            img: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").img,
            color: {
              ...formData.img.color,
              mask: {
                name: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").name,
                img: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").img,
                glow: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").glow,
                icon: methods.data.imgs["symbols"]['medical patch'].find(value => value.name == "TQ").icon,
              }
            }
          }
        });
      }
    }
    else if (methods.helpers.is.patchType.nameTape(formData)) {
      console.log(event.target.value);
      if (event.target.value == "4” x 1”" || event.target.value == "5” x 1”" || event.target.value == "6” x 1”" || event.target.value == "7.125” x 1”") {
        setFormData({
          ...formData,
          price: {
            ...formData.price,
            upsells: {
              ...formData.price.upsells,
              size: objSizes.upsells.size,
              glowBorder: objSizes.upsells.glowBorder || 0,
              hiVis: objSizes.upsells.hiVis || 0,
              badge: objSizes.upsells.badge || 0,
              proIRFontColor: methods.helpers.get.fontUpsell(event.target.value) || 0,
              reflectiveGlowFontColor: methods.helpers.get.fontUpsell(event.target.value) || 0,
            },
          },
          size: {
            ...formData.size,
            current: event.target.value
          },
          text: {
            ...formData.text,
            primary: {
              ...formData.text.primary,
              lines: objSizes.text.primary.lines,
              maxLength: objSizes.text.primary.maxLength,
              placeholder: objSizes.text.primary.placeholder
            }
          },
          img: {
            ...formData.img,
            color: {
              ...formData.img.color,
              mask: {
                name: maskObject?.name || maskName,
                img: maskObject?.img || formData.img.color.mask.img,
                glow: maskObject?.glow || formData.img.color.mask.glow,
                icon: maskObject?.icon || formData.img.color.mask.icon,
              }
            }
          },
        });
      } else {
        setFormData({
          ...formData,
          upsells: {
            ...formData.upsells,
            hiVis: false,
          },
          price: {
            ...formData.price,
            upsells: {
              ...formData.price.upsells,
              size: objSizes.upsells.size,
              glowBorder: objSizes.upsells.glowBorder || 0,
              hiVis: objSizes.upsells.hiVis || 0,
              badge: objSizes.upsells.badge || 0,
              proIRFontColor: methods.helpers.get.fontUpsell(event.target.value) || 0,
              reflectiveGlowFontColor: methods.helpers.get.fontUpsell(event.target.value) || 0,
            },
          },
          size: {
            ...formData.size,
            current: event.target.value
          },
          text: {
            ...formData.text,
            primary: {
              ...formData.text.primary,
              lines: objSizes.text.primary.lines,
              maxLength: objSizes.text.primary.maxLength,
              placeholder: objSizes.text.primary.placeholder
            }
          },
          img: {
            ...formData.img,
            enabled: false,
            color: {
              ...formData.img.color,
              mask: {
                name: maskObject?.name || maskName,
                img: maskObject?.img || formData.img.color.mask.img,
                glow: maskObject?.glow || formData.img.color.mask.glow,
                icon: maskObject?.icon || formData.img.color.mask.icon,
              }
            }
          },
        });
      }
    }
    else if (methods.helpers.is.patchType.cover(formData)) {
      setFormData({
        ...formData,
        price: {
          ...formData.price,
          upsells: {
            ...formData.price.upsells,
            size: objSizes.upsells.size,
          },
        },
        size: {
          ...formData.size,
          current: event.target.value
        },
      });
    }
    else {
      setFormData({
        ...formData,
        price: {
          ...formData.price,
          upsells: {
            ...formData.price.upsells,
            size: objSizes.upsells.size,
            glowBorder: objSizes.upsells.glowBorder || 0,
            hiVis: objSizes.upsells.hiVis || 0,
            badge: objSizes.upsells.badge || 0,
            proIRFontColor: methods.helpers.get.fontUpsell(event.target.value) || 0,
            reflectiveGlowFontColor: methods.helpers.get.fontUpsell(event.target.value) || 0,
          },
        },
        size: {
          ...formData.size,
          current: event.target.value
        },
        text: {
          ...formData.text,
          primary: {
            ...formData.text.primary,
            lines: objSizes.text.primary.lines,
            maxLength: objSizes.text.primary.maxLength,
            placeholder: objSizes.text.primary.placeholder
          }
        },
        img: {
          ...formData.img,
          color: {
            ...formData.img.color,
            mask: {
              name: maskObject?.name || maskName,
              img: maskObject?.img || formData.img.color.mask.img,
              glow: maskObject?.glow || formData.img.color.mask.glow,
              icon: maskObject?.icon || formData.img.color.mask.icon,
            }
          }
        },
      });
    }
  };

  // Define a function to handle the change of the size dropdown menu
  const handleSidesChange = (event) => {
    console.log(event.target.value);
    const obj = methods.data.fontColors.find(value => value.name.includes('Basic IR'));
    let twoSides = event.target.value == 2 ? true : false;
    const tempColor = formData.img.color;

    if(event.target.value == 2){
      setFormData((prevFormData) =>({
        ...formData,
        upsells: { ...prevFormData.upsells, 
          sides: twoSides },
        sides: {
          ...formData.sides,
          current: event.target.value
        },
        text: {
          ...prevFormData.text,
          color: obj,
        },
      }));
    } else {
    setFormData((prevFormData) =>({
      ...formData,
      upsells: { ...prevFormData.upsells, 
        sides: twoSides },
      sides: {
        ...formData.sides,
        current: event.target.value
      },
      text: {
        ...prevFormData.text,
        color: { ...prevFormData.text.color, name: tempColor.name, img: tempColor.img }
      },
    }));
  }
  };

  // Define a function to handle the change of the font text color dropdown menu
  const handleTextColorChange = (event) => {
    const obj = fontColors.find(value => value.img === event.img);
    const isProIR = event.name.includes("Pro IR");
    const isReflectiveGlow = event.name.includes("Reflective + Glow");

    setFormData((prevFormData) => ({
      ...prevFormData,
      text: {
        ...prevFormData.text,
        color: { ...prevFormData.text.color, name: event.name, img: obj.img }
      },
      upsells: {
        ...prevFormData.upsells,
        proIRFontColor: isProIR,
        reflectiveGlowFontColor: isReflectiveGlow
      }
    }));
  };

  const handleRodColorChange = (event) => {
    const obj = fontColors.find(value => value.img === event.img);
    const isProIR = event.name.includes("Pro IR");
    const isReflectiveGlow = event.name.includes("Reflective + Glow");
    console.log(obj);
    setFormData((prevFormData) => ({
      ...prevFormData,
      rod: {
        ...prevFormData.rod,
        color: obj.img,
        name: event.name,
      },
      upsells: {
        ...prevFormData.upsells,
        proIRFontColor: isProIR,
        reflectiveGlowFontColor: isReflectiveGlow
      }
    }));
  };

  // Define a function to handle the change of the background color dropdown menu
  const handleBgColorChange = (event) => {
    // Find the selected background color from data array
    const obj = bgColors.find(value => value.name === event.name);
    // Set the form data with the selected background color and its image
    // setFormData({ ...formData, bgColor: event.name, bgColorImg: obj.img });
    setFormData({ ...formData, bgColor: { ...formData.bgColor, name: event.name, img: obj.img } });

  };

  // Define a function to handle the change of the hivis flag dropdown menu
  const handleImgChange = (event) => {
    // Find the selected hivis flag from data array
    let obj = {};
    obj = imgs["hi-vis"].find(value => value.name === event.name);

    switch (formData.img.markType.toLowerCase()) {
      case 'flag':
        setFormData({
          ...formData, img: {
            ...formData.img,
            name: event.name,
            img: obj.img
          }
        });
        break;
      case 'symbol':
        ("ok");
        setFormData({
          ...formData, img: {
            ...formData.img, name: event.name,
            img: event.img,
            color: {
              ...formData.img.color, mask: {
                name: event.name,
                img: event.img,
                icon: event.icon,
                glow: event.glow
              }
            }
          }
        });
        break;
    }

  };

  const handleMaskChange = (event) => {
    // Find the selected hivis flag from data array
    let obj = {};
    switch (formData.type.toLowerCase()) {
      case 'medical patch':
        obj = symbols["medical patch"].find(value => value.name === event.name);
        setFormData({ ...formData, img: { ...formData.img, name: event.name, img: obj.img, icon: obj.icon, glow: obj.glow } });
        break;
      case 'jacket panel':
        obj = imgs["laser-cut"]["large-id"].find(value => value.name === event.name);
        //  (obj);
        setFormData({
          ...formData, img: {
            ...formData.img,
            name: event.name,
            color: {
              ...formData.img.color, mask: {
                name: event.name,
                img: obj.img,
                glow: obj.glow,
                icon: obj.icon,
              }
            }
          }
        });
        break;
      default:
        let size = "";
        if (formData.type.toLowerCase() == 'id panel') {
          console.log("id panel")

          switch (formData.size.current) {
            case '3” x 2”':
              //    ("yes");
              size = "mini-id";
              break;
            case '3.5” x 2”':
              //  ("yes");
              size = "mini-id";
              break;
            default:
              size = "large-id";
              console.log(size);
              break;
          }
        } else if (formData.type.toLowerCase() == 'flag') {
          switch (formData.size.current) {
            case 'T.Rex Arms AC1 Front':
              size = "5x3";
              break;
            default:
              size = convertSizeString(formData.size.current);
              break;
          }
        } else {
          //  ("else");
          size = convertSizeString(formData.size.current);
        }

        console.log(size);
        // ( imgs["laser-cut"][size]);
        // ( imgs["laser-cut"]);
        obj = imgs["laser-cut"][size].find(value => value.name === event.name);
        //  (obj);
        setFormData({
          ...formData, img: {
            ...formData.img,
            name: event.name,
            color: {
              ...formData.img.color, mask: {
                name: event.name,
                img: obj.img,
                glow: obj.glow,
                icon: obj.icon,
              }
            }
          }
        });
        // (formData.img.color.mask);
        break;
    }
  };

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    setFormData({
      ...formData, bgColor: {
        ...formData.bgColor,
        img: URL.createObjectURL(file)
      }
    });
    // setFormData(prevStyle => ({ ...prevStyle, backgroundImage: `url("${URL.createObjectURL(file)}")` }));
  }

  // Define a function to handle the change of the comments checkbox
  const handleGlowBorderChange = (event) => {
    const isChecked = event.target.checked;
    const priceChange = isChecked ? 10 : -10;

    setFormData((prevFormData) => ({
      ...prevFormData,
      upsells: { ...prevFormData.upsells, glowBorder: isChecked },
      price: { ...prevFormData.price, total: prevFormData.price.total + priceChange }
    }));
  };
  // Define a function to handle the change of the comments checkbox
  const handleAgreementChange = (event) => {
    setFormData({
      ...formData,
      formValidation: { ...formData.formValidation, agreement: event.target.checked }
    });
  };
  const handleFlagReversedChange = (event) => {
    setFormData({
      ...formData,
      img: { ...formData.img, reversed: event.target.checked }
    });
  };
  const handleFlagTopChange = (event) => {
    setFormData({
      ...formData,
      img: { ...formData.img, flagTop: event.target.checked }
    });
  };

  const handleFlagEnabledChange = (event) => {
    setFormData({
      ...formData,
      upsells: { ...formData.upsells, hiVis: event.target.checked },
      img: { ...formData.img, enabled: event.target.checked }
    });
  };

  const handlePrevious = () => {
    if (stepForm.currentStep > 1) {
      setStepForm({ ...stepForm, currentStep: stepForm.currentStep - 1, obj: stepForm.steps[stepForm.currentStep - 1] });
    }
  };

  const handleNext = () => {
    if (stepForm.currentStep < stepForm.steps.length) {
      setStepForm({ ...stepForm, currentStep: stepForm.currentStep + 1, obj: stepForm.steps[stepForm.currentStep] });
    }
    const glowAmount = formData.price.upsells.glowBorder;
    const glowLabel = `Add a glow in the dark border? + $${glowAmount} USD`;

    let formTempObj = {};
    switch (formData.type.toLowerCase()) {
      case 'id panel':
        formTempObj = {
          id: 'glowBorder',
          label: glowLabel,
          type: 'checkmark',
          placeholder: '',
        };

        methods.helpers.update.formElement(formTempObj, steps, methods.helpers.is.glowBorder(formData.type, formData.size.current));

        break;
      case 'name tape':
        const flagStep = {
          name: "Flag",
          status: 'upcoming',
          input: [
            {
              id: 'flagEnabled',
              label: 'Do you want to add a flag?',
              type: 'checkmark',
              placeholder: '',
            },
            {
              id: 'flagReverse',
              label: 'Do you want to reverse the flag?',
              type: 'checkmark',
              placeholder: '',
            },
            {
              id: 'flag',
              label: 'HiVis Flag',
              type: 'advancedSelect',
            },
          ],
        };

        const isValidSize = ['4” x 1”', '5” x 1”', '5.11 Tac Tec Carrier', '5.11 Tac Tec Carrier Trainer', 'T.Rex Arms AC1'].includes(formData.size.current);
        const index = steps.findIndex(step => step.name === flagStep.name);

        isValidSize && index === -1 ? steps.splice(2, 0, flagStep) : !isValidSize && index !== -1 && steps.splice(2, 1);
        break;
      case 'medical patch':
        formTempObj = {
          id: 'glowBorder',
          label: glowLabel,
          type: 'checkmark',
          placeholder: '',
        };
        if (formData.size.current == '3.5” x 2”') {
          const flagStep = {
            name: "Text",
            status: 'upcoming',
            input: [
              {
                id: 'text',
                label: 'Text',
                type: 'input',
                placeholder: '',
              },
            ],
          };

          if (!steps.some(step => step.name === flagStep.name)) {
            steps.splice(1, 0, flagStep);
          }
          const rodObj = {
            id: 'rodColor',
            label: 'Rod Color',
            type: 'input',
            placeholder: '',
          };
          methods.helpers.update.formElement(formTempObj, steps, methods.helpers.is.glowBorder(formData.type, formData.size.current));
          methods.helpers.update.formElement(rodObj, steps);
        } else if (methods.helpers.is.medical.hex(formData)) {
          methods.helpers.update.formElement(formTempObj, steps);
          if (formData.img.name.toLowerCase() == "med") {
            const flagStep = {
              name: "Text",
              status: 'upcoming',
              input: [
                {
                  id: 'text',
                  label: 'Text',
                  type: 'input',
                  placeholder: '',
                },
                {
                  id: 'rodColor',
                  label: 'Rod Color',
                  type: 'input',
                  placeholder: '',
                },
              ],
            };
            if (!steps.some(step => step.name === flagStep.name)) {
              steps.splice(1, 0, flagStep);
            }
          } else {
            const textStepIndex = steps.findIndex(step => step.name === 'Text');
            console.log(textStepIndex);
            if (textStepIndex >= 0) {
              steps.splice(textStepIndex, 1);
            }
          }
        } else {
          methods.helpers.update.formElement(formTempObj, steps, methods.helpers.is.glowBorder(formData.type, formData.size.current));
          const textStepIndex = steps.findIndex(step => step.name === 'Text');
          if (textStepIndex >= 0) {
            steps.splice(textStepIndex, 1);
          }
          console.log('ok')
        }
        break;
      case 'call sign': 
      let removeObj = {};
        if(methods.helpers.is.callSign.double(formData)) {
          console.log('ok');
          formTempObj = {
            id: 'irOption',
            label: 'IR Option',
            type: 'select',
            placeholder: '',
          };
          removeObj = {
            id: 'textColor',
            label: 'Text Color',
            type: 'advancedSelect',
            placeholder: 'Flat Spice Brown',
          };

          methods.helpers.update.formElement(removeObj, steps);
          methods.helpers.update.formElement(formTempObj, steps, methods.helpers.is.callSign.double(formData) );

        } else {
          removeObj = {
            id: 'irOption',
            label: 'IR Option',
            type: 'select',
            placeholder: '',
          };
          formTempObj = {
            id: 'textColor',
            label: 'Text Color',
            type: 'advancedSelect',
            placeholder: '', 
          }
        }
      break;
    }
  };

  return (
    <>
      <div className="space-y-4">
        {/* <Steps /> */}
        {/*      
            ///////////////////////////////////////
           Pick type -> show when you want a master
            ///////////////////////////////////////
            <div className="col-span-6">
            <label htmlFor="type" className="block text-sm xl:text-lg font-medium">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleTypeChange}
              className="bg-transparent mt-1 block w-full rounded-md border border-contrast py-3 xl:py-4 xl:px-5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 xl:text-lg"
            >
              <option value="">Select a type</option>
              {data[3].values.map((val, index) => {
                const key = index.toString();
                return (
                  <option key={key} value={val.name}>{val.name}</option>
                );
              })}
            </select>
          </div> */}

        <div className="flex justify-end items-center">
          <p className="block text-md mt-0 font-bold">
            Step {stepForm.currentStep} / {stepForm.steps.length}
          </p>
        </div>
        <div className="flex w-full min-h-[15rem] xl:min-h-[16rem]">
          <div className="flex flex-col w-full space-y-6">
            {stepForm.steps[stepForm.currentStep - 1].input.map((input, i) => {
              const childKey = i.toString();
              return (
                <div key={childKey}>
                  {input.id.toLowerCase() == "text" ? (
                    <>
                      <div className="flex justify-between">
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium">
                          Text
                        </label>
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium text-right">
                          {formData.text.primary.text === 'Text' ? formData.text.primary.maxLength + " " : formData.text.primary.maxLength - formData.text.primary.text.replace(/\n/g, '').length + " "}
                          characters left
                        </label>
                      </div>
                      {formData.text.primary.lines > 1 ? (
                        <>
                          <textarea
                            type="text"
                            id="text"
                            name="text"
                            value={formData.text.primary.text}
                            onChange={handleTextChange}
                            autoComplete="off"
                            rows={formData.text.primary.lines}
                            style={{ resize: 'none' }}
                            className="mt-1 block w-full rounded-md border-contrast shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-lg bg-transparent"
                            placeholder={formData.text.primary.placeholder}
                            maxLength={formData.text.primary.maxLength + formData.text.primary.lines - 1}
                            onKeyDown={(e) => {
                              const currentLines = formData.text.primary.text.split("\n").length;
                              const textLines = formData.text.primary.lines;
                              const letterPerLine = formData.text.primary.maxLength / formData.text.primary.lines;
                              const currentLineLength = formData.text.primary.text.split("\n").pop().length;
                              if (currentLines >= textLines && e.key === 'Enter') {
                                e.preventDefault();
                              } else if (currentLineLength >= letterPerLine && currentLines < textLines && e.key == 'Backspace') {
                                // setFormData({ ...formData, text: formData.text.primary.text });
                                setFormData({ ...formData, text: { ...formData.text, primary: { ...formData.text.primary, text: formData.text.primary.text } } });
                              } else if (currentLineLength >= letterPerLine && currentLines < textLines && e.key !== 'Enter') {
                                //    setFormData({ ...formData, text: formData.text.primary.text + '\n' });
                                setFormData({ ...formData, text: { ...formData.text, primary: { ...formData.text.primary, text: formData.text.primary.text + '\n' } } });

                              }
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <input
                            onFocus={(e) => e.preventDefault()}
                            type="text"
                            id="text"
                            name="text"
                            value={formData.text.primary.text}
                            onChange={handleTextChange}
                            autoComplete="off"
                            className="mt-1 py-3 xl:py-4 block w-full rounded-md border-contrast shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-lg bg-transparent"
                            placeholder={formData.text.primary.placeholder}
                            maxLength={formData.text.primary.maxLength}

                          />
                        </>
                      )}
                    </>
                  ) : input.id.toLowerCase() == "text2" ? (
                    <>
                      <div className="flex justify-between">
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium">
                          {input.label}
                        </label>
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium text-right">
                          {formData.text.secondary.text === 'Text' ? formData.text.secondary.maxLength + " " : formData.text.secondary.maxLength - formData.text.secondary.text.replace(/\n/g, '').length + " "}
                          characters left
                        </label>
                      </div>
                      <input
                        onFocus={(e) => e.preventDefault()}
                        type="text"
                        id="text2"
                        name="text"
                        value={formData.text.secondary.text}
                        onChange={handleTextAdditionalChange}
                        autoComplete="off"
                        className="mt-1 py-3 xl:py-4 block w-full rounded-md border-contrast shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-lg bg-transparent"
                        placeholder={formData.text.secondary.placeholder}
                        maxLength={formData.text.secondary.maxLength}

                      />
                    </>
                  ) : input.id.toLowerCase() == "text3" ? (
                    <>
                      <div className="flex justify-between">
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium">
                          {input.label}
                        </label>
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium text-right">
                          {formData.text.third.text === 'Text' ? formData.text.third.maxLength + " " : formData.text.third.maxLength - formData.text.third.text.replace(/\n/g, '').length + " "}
                          characters left
                        </label>
                      </div>
                      <input
                        onFocus={(e) => e.preventDefault()}
                        type="text"
                        id="text3"
                        name="text"
                        value={formData.text.third.text}
                        onChange={handleText3Change}
                        autoComplete="off"
                        className="mt-1 py-3 xl:py-4 block w-full rounded-md border-contrast shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-lg bg-transparent"
                        placeholder={formData.text.third.placeholder}
                        maxLength={formData.text.third.maxLength}

                      />
                    </>
                  ) : input.id.toLowerCase() == "text4" ? (
                    <>
                      <div className="flex justify-between">
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium">
                          {input.label}
                        </label>
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium text-right">
                          {formData.text.fourth.text === 'Text' ? formData.text.fourth.maxLength + " " : formData.text.fourth.maxLength - formData.text.fourth.text.replace(/\n/g, '').length + " "}
                          characters left
                        </label>
                      </div>
                      <input
                        onFocus={(e) => e.preventDefault()}
                        type="text"
                        id="text4"
                        name="text"
                        value={formData.text.fourth.text}
                        onChange={handleText4Change}
                        autoComplete="off"
                        className="mt-1 py-3 xl:py-4 block w-full rounded-md border-contrast shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-lg bg-transparent"
                        placeholder={formData.text.fourth.placeholder}
                        maxLength={formData.text.fourth.maxLength}

                      />
                    </>
                  ) : input.id.toLowerCase() == "text5" ? (
                    <>
                      <div className="flex justify-between">
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium">
                          {input.label}
                        </label>
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium text-right">
                          {formData.text.fifth.text === 'Text' ? formData.text.fifth.maxLength + " " : formData.text.fifth.maxLength - formData.text.fifth.text.replace(/\n/g, '').length + " "}
                          characters left
                        </label>
                      </div>
                      <input
                        onFocus={(e) => e.preventDefault()}
                        type="text"
                        id="text5"
                        name="text"
                        value={formData.text.fifth.text}
                        onChange={handleText5Change}
                        autoComplete="off"
                        className="mt-1 py-3 xl:py-4 block w-full rounded-md border-contrast shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-lg bg-transparent"
                        placeholder={formData.text.fifth.placeholder}
                        maxLength={formData.text.fifth.maxLength}

                      />
                    </>
                  ) : input.id.toLowerCase() == "text6" ? (
                    <>
                      <div className="flex justify-between">
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium">
                          {input.label}
                        </label>
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium text-right">
                          {formData.text.sixth.text === 'Text' ? formData.text.sixth.maxLength + " " : formData.text.sixth.maxLength - formData.text.sixth.text.replace(/\n/g, '').length + " "}
                          characters left
                        </label>
                      </div>
                      <input
                        onFocus={(e) => e.preventDefault()}
                        type="text"
                        id="text6"
                        name="text"
                        value={formData.text.sixth.text}
                        onChange={handleText6Change}
                        autoComplete="off"
                        className="mt-1 py-3 xl:py-4 block w-full rounded-md border-contrast shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-lg bg-transparent"
                        placeholder={formData.text.sixth.placeholder}
                        maxLength={formData.text.sixth.maxLength}

                      />
                    </>
                  ) : input.id.toLowerCase() == "text7" ? (
                    <>
                      <div className="flex justify-between">
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium">
                          {input.label}
                        </label>
                        <label htmlFor="text" className="block text-sm xl:text-lg font-medium text-right">
                          {formData.text.seventh.text === 'Text' ? formData.text.seventh.maxLength + " " : formData.text.seventh.maxLength - formData.text.seventh.text.replace(/\n/g, '').length + " "}
                          characters left
                        </label>
                      </div>
                      <input
                        onFocus={(e) => e.preventDefault()}
                        type="text"
                        id="text7"
                        name="text"
                        value={formData.text.seventh.text}
                        onChange={handleText7Change}
                        autoComplete="off"
                        className="mt-1 py-3 xl:py-4 block w-full rounded-md border-contrast shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-lg bg-transparent"
                        placeholder={formData.text.seventh.placeholder}
                        maxLength={formData.text.seventh.maxLength}

                      />
                    </>
                  ) : input.id.toLowerCase() == "upload" ? (
                    <>
                      <Upload label="Upload" onChange={handleFileInputChange} message={methods.helpers.get.patch.customPatch.uploadInfo(formData.size.current)} />
                    </>
                  ) : input.id.toLowerCase() == "bloodtype" ? (
                    <>
                      {formData.size.current == '6" x 2"' ? (
                        <>
                          <div className="flex justify-between">
                            <label htmlFor="textAdditional" className="block text-sm xl:text-lg font-medium">
                              Blood Type & Allergies
                            </label>
                            <label htmlFor="textAdditional" className="block text-sm xl:text-lg font-medium text-right">
                              {10 - formData.text.secondary.text.replace(/\n/g, '').length + " "}
                              characters left
                            </label>
                          </div>
                          <input
                            onFocus={(e) => e.preventDefault()}
                            type="text"
                            id="textAdditional"
                            name="textAdditional"
                            value={formData.text.secondary.text}
                            onChange={handleTextAdditionalChange}
                            autoComplete="off"
                            className="mt-1 py-3 xl:py-4 block w-full rounded-md border-contrast shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-lg bg-transparent"
                            placeholder="APOS NDKA"
                            maxLength={10}
                          />
                          <div className="flex justify-between">
                            <label htmlFor="textAdditional" className="block text-sm xl:text-lg font-medium">
                              Blood Type & Allergies
                            </label>
                            <label htmlFor="textAdditional" className="block text-sm xl:text-lg font-medium text-right">
                              {formData.text.secondary.maxLength - formData.text.secondary.text.replace(/\n/g, '').length + " "}
                              characters left
                            </label>
                          </div>
                          <textarea
                            type="text"
                            id="textAdditional"
                            name="textAdditional"
                            value={formData.text.secondary.text}
                            onChange={handleTextAdditionalChange}
                            maxLength={formData.text.secondary.maxLength + formData.text.secondary.lines - 1}
                            onKeyDown={(e) => {
                              const currentLines = formData.text.secondary.text.split("\n").length;
                              const textLines = formData.text.secondary.lines;
                              const letterPerLine = formData.text.secondary.maxLength / formData.text.secondary.lines;
                              const currentLineLength = formData.text.secondary.text.split("\n").pop().length;
                              if (currentLines >= textLines && e.key === 'Enter') {
                                e.preventDefault();
                              } else if (currentLineLength >= letterPerLine && currentLines < textLines && e.key == 'Backspace') {
                                //setFormData({ ...formData, textAdditional: formData.text.secondary.text });
                                setFormData({ ...formData, text: { ...formData.text, secondary: { ...formData.text.secondary, text: formData.text.secondary.text } } });

                              } else if (currentLineLength >= letterPerLine && currentLines < textLines && e.key !== 'Enter') {
                                // setFormData({ ...formData, textAdditional: formData.text.secondary.text + '\n' });
                                setFormData({ ...formData, text: { ...formData.text, secondary: { ...formData.text.secondary, text: formData.text.secondary.text + '\n' } } });
                              }
                            }}
                            autoComplete="off"
                            rows={rows}
                            style={{ resize: 'none' }}
                            className="mt-1 block w-full rounded-md border-contrast shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-lg bg-transparent"
                            placeholder={formData.text.secondary.placeholder}
                          />
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between">
                            <label htmlFor="textAdditional" className="block text-sm xl:text-lg font-medium">
                              Blood Type & Allergies
                            </label>
                            <label htmlFor="textAdditional" className="block text-sm xl:text-lg font-medium text-right">
                              {formData.text.secondary.maxLength - formData.text.secondary.text.replace(/\n/g, '').length + " "}
                              characters left
                            </label>
                          </div>
                          <textarea
                            type="text"
                            id="textAdditional"
                            name="textAdditional"
                            value={formData.text.secondary.text}
                            onChange={handleTextAdditionalChange}
                            maxLength={formData.text.secondary.maxLength + formData.text.secondary.lines - 1}
                            onKeyDown={(e) => {
                              const currentLines = formData.text.secondary.text.split("\n").length;
                              const textLines = formData.text.secondary.lines;
                              const letterPerLine = formData.text.secondary.maxLength / formData.text.secondary.lines;
                              const currentLineLength = formData.text.secondary.text.split("\n").pop().length;
                              if (currentLines >= textLines && e.key === 'Enter') {
                                e.preventDefault();
                              } else if (currentLineLength >= letterPerLine && currentLines < textLines && e.key == 'Backspace') {
                                //setFormData({ ...formData, textAdditional: formData.text.secondary.text });
                                setFormData({ ...formData, text: { ...formData.text, secondary: { ...formData.text.secondary, text: formData.text.secondary.text } } });

                              } else if (currentLineLength >= letterPerLine && currentLines < textLines && e.key !== 'Enter') {
                                // setFormData({ ...formData, textAdditional: formData.text.secondary.text + '\n' });
                                setFormData({ ...formData, text: { ...formData.text, secondary: { ...formData.text.secondary, text: formData.text.secondary.text + '\n' } } });
                              }

                            }}
                            autoComplete="off"
                            rows={rows}
                            style={{ resize: 'none' }}
                            className="mt-1 block w-full rounded-md border-contrast shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xl:text-lg bg-transparent"
                            placeholder={formData.text.secondary.placeholder}
                          />
                        </>
                      )}
                    </>
                  ) : input.id.toLowerCase() == "size" ? (
                    <>
                      <label htmlFor="size" className="block text-sm xl:text-lg font-medium">
                        Size
                      </label>
                      <select

                        id="size"
                        name="size"
                        value={formData.size.current}
                        onChange={handleSizeChange}
                        className="bg-transparent mt-1 block w-full rounded-md border border-contrast py-3 xl:py-4 xl:px-5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 xl:text-lg"
                      >
                        <option value="">Select a size</option>
                        {formData.size.list.map((val, index) => {
                          const key = index.toString();
                          return (
                            <option key={key} value={val.size}>{val.size}</option>
                          );
                        })}
                      </select>
                    </>
                  ) : input.id.toLowerCase() == "iroption" ? (
                    <>
                      <label htmlFor="size" className="block text-sm xl:text-lg font-medium">
                        Select IR Option
                      </label>
                      <select
                        id="iroptions"
                        title="IR Options"
                        name="iroptions"
                        value={formData.bgColor.ir.name}
                        onChange={handleIRChange}
                        className="bg-transparent mt-1 block w-full rounded-md border border-contrast py-3 xl:py-4 xl:px-5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 xl:text-lg"
                      >
                        <option value="">Select IR Option</option>
                        <option value={newFontColors.find(value => value.name.includes('Basic IR')).name}>{newFontColors.find(value => value.name.includes('Basic IR')).name}</option>
                        <option value={newFontColors.find(value => value.name.includes('Pro IR')).name}>{newFontColors.find(value => value.name.includes('Pro IR')).name}</option>
                      </select>
                    </>
                  ) : input.id.toLowerCase() == "sides" ? (
                    <>
                      <label htmlFor="size" className="block text-sm xl:text-lg font-medium">
                        Sides
                      </label>
                      <select

                        id="sides"
                        name="sides"
                        value={formData.sides.current}
                        onChange={handleSidesChange}
                        className="bg-transparent mt-1 block w-full rounded-md border border-contrast py-3 xl:py-4 xl:px-5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 xl:text-lg"
                      >
                        <option value="">Select 1 or 2 Sides</option>
                        {formData.sides.options.map((val, index) => {
                          const key = index.toString();
                          return (
                            <option key={key} value={val}>{val}</option>
                          );
                        })}
                      </select>
                    </>
                  ) : input.id.toLowerCase() == "textcolor" ? (
                    <>
                      <AdvancedSelect
                        id="textColor"
                        title="Text Color"
                        name="textColor"
                        value={formData.text.color.name}
                        img={formData.text.color.img}
                        onChange={handleTextColorChange}
                        options={newFontColors}
                      />
                    </>
                  ) : input.id.toLowerCase() == "backgroundcolor" ? (
                    <>
                      <AdvancedSelect
                        id="bgColor"
                        title="Background Color"
                        name="textColor"
                        value={formData.bgColor.name}
                        img={formData.bgColor.img}
                        onChange={handleBgColorChange}
                        options={bgColors}
                      />

                    </>
                  ) : input.id.toLowerCase() == "rodcolor" ? (
                    <>
                      <AdvancedSelect
                        id="rodColor"
                        title="Rod Color"
                        name="rodColor"
                        value={formData.rod.name}
                        img={formData.rod.color}
                        onChange={handleRodColorChange}
                        options={newFontColors}
                      />

                    </>
                  ) : input.id.toLowerCase() == "symbol" ? (
                    methods.helpers.is.medical.hex(formData) ? (<>
                      <AdvancedSelect
                        title={formData.img.markType}
                        name={formData.img.markType}
                        value={formData.img.name}
                        img={formData.img.color.mask.icon}
                        onChange={handleImgChange}
                        options={symbols["hex"]}
                      />
                    </>
                    ) : (
                      <>
                        <AdvancedSelect
                          title={formData.img.markType}
                          name={formData.img.markType}
                          value={formData.img.name}
                          img={formData.img.color.mask.icon}
                          onChange={handleImgChange}
                          options={symbols["medical patch"]}
                        />
                      </>
                    )
                  ) : input.id.toLowerCase() == "flag" ? (
                    <>
                      {
                        methods.helpers.is.patchType.idPanel(formData) ? (
                          methods.helpers.is.flagType.hiVisFlag(formData) ? (
                            <AdvancedSelect
                              title={formData.img.markType}
                              name={formData.img.markType}
                              value={formData.img.name}
                              img={formData.img.img}
                              onChange={handleImgChange}
                              options={imgs["hi-vis"]}
                            />
                          ) : (
                            methods.helpers.is.mini(formData.type, formData.size.current) ? (
                              <AdvancedSelect
                                title={formData.img.markType}
                                name={formData.img.markType}
                                value={formData.img.color.mask.name}
                                img={formData.img.color.mask.icon}
                                onChange={handleMaskChange}
                                options={imgs["laser-cut"]["mini-id"]}
                              />
                            ) : (
                              <AdvancedSelect
                                title={formData.img.markType}
                                name={formData.img.markType}
                                value={formData.img.color.mask.name}
                                img={formData.img.color.mask.icon}
                                onChange={handleMaskChange}
                                options={imgs["laser-cut"]["large-id"]}
                              />
                            )
                          )
                        ) : (
                          methods.helpers.is.flagType.laserCutFlag(formData) ? (
                            <AdvancedSelect
                              title={formData.img.markType}
                              name={formData.img.markType}
                              value={formData.img.color.mask.name}
                              img={formData.img.color.mask.icon}
                              onChange={handleMaskChange}
                              options={imgs["laser-cut"]["3x2"]}
                            />
                          ) : (
                            <AdvancedSelect
                              title={formData.img.markType}
                              name={formData.img.markType}
                              value={formData.img.name}
                              img={formData.img.img}
                              onChange={handleImgChange}
                              options={imgs["hi-vis"]}
                            />
                          )
                        )
                      }
                    </>
                  ) : input.id.toLowerCase() == "flagtype" ? (
                    <>
                      <label htmlFor="type" className="block text-sm xl:text-lg font-medium">
                        Flag Type
                      </label>
                      <div className="relative mt-2">
                        <select
                          id="type"
                          name={formData.img.type}
                          value={formData.img.type}
                          onChange={handleFlagTypeChange}
                          className="bg-transparent mt-1 block w-full rounded-md border border-contrast py-3 xl:py-4 xl:px-5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 xl:text-lg"
                        >
                          <option value="">Select a type</option>
                          {markTypeOptions.map((val, index) => {
                            const key = index.toString();
                            return (
                              <option key={key} value={val}>{val}</option>
                            );
                          })}
                        </select>
                      </div>
                    </>
                  ) : input.id.toLowerCase() == "sabertype" ? (
                    <>
                      <div className="col-span-6">
                        <label htmlFor="type" className="block text-sm xl:text-lg font-medium">
                          Choose Your Saber
                        </label>
                        <select
                          id="type"
                          name={formData.lightsaber.saberType}
                          value={formData.lightsaber.saberType}
                          onChange={handleSaberTypeChange}
                          className="bg-transparent mt-1 block w-full rounded-md border border-contrast py-3 xl:py-4 xl:px-5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 xl:text-lg"
                        >
                          <option value="">Select a type</option>
                          {saberOptions.map((val, index) => {
                            const key = index.toString();
                            return (
                              <option key={key} value={val.name}>{val.name}</option>
                            );
                          })}
                        </select>
                      </div>
                    </>

                  ) : input.id.toLowerCase() == "ringcolor" ? (
                    <>
                      <AdvancedSelect
                        id="ringColor"
                        title="Ring Color"
                        name="ringColor"
                        value={formData.img.division.ring.color.name}
                        img={formData.img.division.ring.color.img}
                        onChange={handleRingColorChange}
                        options={newFontColors}
                      />
                    </>
                  ) : input.id.toLowerCase() == "hiltcolor" ? (
                    <>
                      <AdvancedSelect
                        id="hiltColor"
                        title="Hilt Color"
                        name="hiltColor"
                        value={formData.lightsaber.hilt.name}
                        img={formData.lightsaber.hilt.color}
                        onChange={handleHiltColorChange}
                        options={newFontColors}
                      />
                    </>
                  ) : input.id.toLowerCase() == "bladecolor" ? (
                    <>
                      <AdvancedSelect
                        id="bladeColor"
                        title="Blade Color"
                        name="bladeColor"
                        value={formData.lightsaber.blade.name}
                        img={formData.lightsaber.blade.color}
                        onChange={handleBladeColorChange}
                        options={newFontColors}
                      />
                    </>
                  ) : input.id.toLowerCase() == "flagenabled" ? (
                    <>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="flag-enabled"
                            name="flag-enabled"
                            type="checkbox"
                            checked={formData.img.enabled}
                            onChange={handleFlagEnabledChange}
                            className="bg-transparent h-4 w-4 rounded border-contrast text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="text-sm leading-4">
                          <label htmlFor="agreeLeadTime" className="ml-3 font-medium">
                            Do you want to add a flag?
                          </label>
                        </div>
                      </div>
                    </>
                  ) : input.id.toLowerCase() == "flagreverse" ? (
                    <>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="flag-reversed"
                            name="flag-reversed"
                            type="checkbox"
                            checked={formData.img.reversed}
                            onChange={handleFlagReversedChange}
                            className="bg-transparent h-4 w-4 rounded border-contrast text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="text-sm leading-4">
                          <label htmlFor="agreeLeadTime" className="ml-3 font-medium">
                            Do you want to reverse the flag?
                          </label>
                        </div>
                      </div>
                    </>
                  ) : input.id.toLowerCase() == "flagtop" ? (
                    <>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="flag-reversed"
                            name="flag-reversed"
                            type="checkbox"
                            checked={formData.img.flagTop || false}
                            onChange={handleFlagTopChange}
                            className="bg-transparent h-4 w-4 rounded border-contrast text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="text-sm leading-4">
                          <label htmlFor="agreeLeadTime" className="ml-3 font-medium">
                            Do you want to move the flag to the top?
                          </label>
                        </div>
                      </div>
                    </>
                  ) : input.id.toLowerCase() == "glowborder" ? (
                    <>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="glow-border"
                            name="glow-border"
                            type="checkbox"
                            checked={formData.upsells.glowBorder}
                            onChange={handleGlowBorderChange}
                            className="bg-transparent h-4 w-4 rounded border-contrast text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="text-sm leading-4">
                          <label htmlFor="agreeLeadTime" className="ml-3 font-medium">
                            Add a glow in the dark border? +${formData.price.upsells.glowBorder} USD
                          </label>
                        </div>
                      </div>
                    </>
                  ) : input.id.toLowerCase() == "leadtime" ? (
                    <>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="agreement"
                            name="agreement"
                            type="checkbox"
                            checked={formData.formValidation.agreement}
                            onChange={handleAgreementChange}
                            className="bg-transparent h-4 w-4 rounded border-contrast text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="text-sm leading-4">
                          <label htmlFor="agreeLeadTime" className="ml-3 font-medium">
                            I Agree to the Lead Time
                          </label>
                          <p className="pt-2"><strong>LEAD TIME</strong> - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don't worry, we'll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <FormButton
          formData={formData}
          setFormData={setFormData}
          config={config}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          currentStep={stepForm.currentStep}
          steps={stepForm.steps}
          methods={methods}
          productURL={productURL} />
      </div>
    </>
  );
}
