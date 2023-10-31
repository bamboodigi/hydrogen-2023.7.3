import builderData from '~/data/builder.js';

const builderObj = {
  // initalize the starting state
  init: {
    //   // initalize the formData Object based on the product and chooses selected
    formData: function (product) {
      const patchType = builderData.type[builderObj.helpers.get.builderTitle(product).toLowerCase()];

      let formData = {
        type: patchType.name || '',
        formValidation: {
          agreement: false,
        },
        price: {
          amount: parseInt(product.variants.nodes[0].price.amount),
          total: parseInt(product.variants.nodes[0].price.amount),
        },
        upsells: {
          glowBorder: false,
          proIRFontColor: false,
          reflectiveGlowFontColor: false,
        },
        size: {
          current: patchType.config.sizes[0].size || '',
          list: patchType.config.sizes || [],
        },
        bgColor: {
          name: builderObj.data.bgColors[18].name,
          img: builderObj.data.bgColors[18].img,
        },
        text: {
          primary: {
            text: '',
            maxLength: patchType.config.sizes[0].text.primary.maxLength || '',
            lines: patchType.config.sizes[0].text.primary.lines || '',
            placeholder: patchType.config.sizes[0].text.primary.placeholder || '',
          },
          secondary: {
            text: '',
            maxLength: patchType.config.sizes[0].text.secondary?.maxLength || '',
            lines: patchType.config.sizes[0].text.secondary?.lines || '',
            placeholder: patchType.config.sizes[0].text.secondary?.placeholder || '',
          },
          color: {
            name: builderObj.data.fontColors[8].name,
            img: builderObj.data.fontColors[8].img,
          },
        },
        lightsaber: {
          saberType: builderObj.data.saberOptions[0].name,
          hilt: {
            name: builderObj.data.fontColors[7].name,
            color: builderObj.data.fontColors[7].img,
            img: builderObj.data.saberOptions[0].hilt,
          },
          blade: {
            name: builderObj.data.fontColors[11].name,
            color: builderObj.data.fontColors[11].img,
            img: builderObj.data.saberOptions[0].blade,
          },
        },
        img: {
          markType: 'Flag',
          enabled: false,
          name: builderObj.data.imgs["hi-vis"][0].name,
          img: builderObj.data.imgs["hi-vis"][0].img,
          color: {
            name: builderObj.data.fontColors[8].name,
            img: builderObj.data.fontColors[8].img,
            mask: {
              name: builderObj.data.imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").name,
              img: builderObj.data.imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").img,
              glow: builderObj.data.imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").glow,
              icon: builderObj.data.imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").icon,
            }
          },
          type: 'Lazer Cut Flag',
          reversed: false,
          variant: {
            name: '',
            img: '',
          },
        }
      };
     // console.log(formData.type.toLowerCase());
      switch (formData.type.toLowerCase()) {
        case 'id panel':
         // console.log('id panel');
          formData.img.type = 'Lazer Cut Flag';
          formData.img.color.mask.img = builderObj.data.imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").img;
          formData.img.color.mask.name = builderObj.data.imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").name;
          break;
        case 'name tape':
          formData.img.type = 'HiVis Flag';
          break;
        case 'flag':
          formData.img.type = 'Lazer Cut Flag';
          formData.img.color.mask.img = builderObj.data.imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").img;
          formData.img.color.mask.name = builderObj.data.imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").name;
          break;
        case 'light sabers':
          formData.bgColor.name = builderObj.data.bgColors[0].name;
          formData.bgColor.img = builderObj.data.bgColors[0].img;
          break;
        case 'medical patch':
          if (formData.size.current == '1” x 1”') {
         //   console.log('hi')
            formData.img.markType = 'Symbol';
            formData.img.name = builderObj.data.symbols['medical patch']['1 x 1'][0].name;
            formData.img.img = builderObj.data.symbols['medical patch']['1 x 1'][0].img;
            formData.img.icon = builderObj.data.symbols['medical patch']['1 x 1'][0].icon;
            formData.img.glow = builderObj.data.symbols['medical patch']['1 x 1'][0].glow;
          } else {
            formData.img.markType = 'Symbol';
            formData.img.name = builderObj.data.symbols['medical patch']['2 x 2'][0].name;
            formData.img.img = builderObj.data.symbols['medical patch']['2 x 2'][0].img;
            formData.img.icon = builderObj.data.symbols['medical patch']['2 x 2'][0].icon;
            formData.img.glow = builderObj.data.symbols['medical patch']['2 x 2'][0].glow;
          }
          break;
        case 'jacket panel':
          let tempObj = {
            text: '',
            placeholder: 'Text',
            maxLength: 6,
            lines: 1,
          };
          formData.text.secondary = tempObj;
          formData.text.third = tempObj;
          formData.text.fourth = tempObj;
          formData.text.fifth = tempObj;
          formData.text.sixth = tempObj;
          formData.text.seventh = tempObj;
          formData.img.type = 'Lazer Cut Flag';
          formData.img.color.mask.img = builderObj.data.imgs["lazer-cut"]['3x2'].find(value => value.name == "USA").img;
          formData.img.color.mask.name = builderObj.data.imgs["lazer-cut"]['3x2'].find(value => value.name == "USA").name;
          break;
        case 'division jacket panel':
          formData.text.primary.maxLength = 15;
          formData.text.primary.placeholder = '1st Line';
          formData.text.secondary = {
            text: '',
            placeholder: '2nd Line',
            maxLength: 7,
            lines: 1,
          };
          formData.text.third = {
            text: '',
            placeholder: '3rd Line',
            maxLength: 7,
            lines: 1,
          };
          break;
        case 'default':
          formData.img.type = 'HiVis Flag';
          formData.price.total += 4;
          break;
      }
    //  console.log(formData);
      // console.log(formData);
      return formData || {};
    },

    //   // initialize the forms that collect data for the formData object.
    //   forms: function () {

    //   },
    //   // initalize the visualizer style to show custom product formed by the formData object.
    visualizer: function (formData) {
      const bgColor = 'url("' + formData.bgColor.img + '")';
      const textColor = 'url("' + formData.text.color.img + '")';
      const hiltColor = 'url("' + formData.lightsaber.hilt.color + '")';
      const bladeColor = 'url("' + formData.lightsaber.blade.color + '")';
      const symbolColor = 'url("' + formData.img.color.color + '")';
      const img = formData.type.toLowerCase() === "medical patch" ? 'url("' + formData.img.symbol + '")' : 'url("' + formData.img.img + '")';
      const mask = 'url("' + formData.img.color.mask.img + '")';
      const hiltImg = 'url("' + formData.lightsaber.hilt.img + '")';
      const bladeImg = 'url("' + formData.lightsaber.blade.img + '")';

      let obj = {
        canvas: {
          height: '230px'
        },
        patch: {
          backgroundImage: bgColor,
          width: '290px',
          height: 'calc(290px/3)',
          textTransform: 'uppercase',
          padding: '10px',
          WebkitTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
          MozTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
          msTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
          OTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
          transition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
        },
        text: {
          primary: {
            backgroundImage: textColor,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'WMIStencil-Black',
            backgroundClip: 'text',
            width: 'auto',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            lineHeight: '96.66px',
            fontSize: '96.66px',
            marginTop: '8.3333px'
          },
          secondary: {
            backgroundImage: textColor,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'WMIStencil-Black',
            backgroundClip: 'text',
            lineHeight: '34px',
            fontSize: '32px',
          },
        },
        img: {
          flag: {
            // backgroundImage: textColor,
            // maskImage: img,
            // maskSize: 'cover',
            // WebkitMaskImage: img,
            // WebkitMaskSize: 'cover',
            // // aspectRatio: '2/1',
            backgroundImage: img,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          },
          mask: {
            backgroundImage: textColor,
            maskImage: mask,
            maskSize: 'cover',
            WebkitMaskImage: mask,
            WebkitMaskSize: 'cover',
          },
          symbol: {
            backgroundImage: symbolColor,
            maskImage: mask,
            maskSize: 'cover',
            WebkitMaskImage: mask,
            WebkitMaskSize: 'cover',
          },
        },
        lightsaber: {
          hilt: {
            backgroundImage: hiltColor,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: hiltImg,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: hiltImg,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            width: '27%',
            height: '100%',
          },
          blade: {
            backgroundImage: bladeColor,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: bladeImg,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: bladeImg,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            height: '100%',
          }
        }
      };

      switch (formData.type.toLowerCase()) {
        case 'id panel':
          obj.patch.height = 'calc(290px*3)/2)';
          obj.text.primary.fontSize = '96px';
          obj.text.primary.lineHeight = '96px';
          obj.text.primary.marginTop = 'calc(96px/9)';
          obj.text.secondary.lineHeight = '30.8475px';
          obj.text.secondary.fontSize = '36.6316px';
          obj.text.secondary.width = 'auto';
          obj.text.secondary.textAlign = 'center';
          break;
        case 'name tape':
          obj.text.primary.fontSize = '48.6397px';
          obj.text.primary.lineHeight = '48.6397px';
          obj.text.primary.marginTop = '6.07996px';
          break;
        case 'medical patch':
          obj.patch.maskImage = 'none';
          obj.patch.WebkitMaskImage = 'none';
          obj.text.secondary.width = 'auto';
          obj.text.secondary.textAlign = 'center';
          break;
        case 'light sabers':
          obj.patch.height = '58px';
          break;
        case 'flag':
          obj.patch.padding = '0';
          obj.patch.background = 'none';
          obj.text.secondary.width = 'auto';
          obj.text.secondary.textAlign = 'center';
          break;
        case 'jacket panel':
          obj.text.secondary.fontSize = '34px';
          obj.patch.borderRadius = '.5rem'
          break;
        case 'division jacket panel':
          obj.text.secondary.fontSize = '27px';
          obj.text.secondary.lineHeight = '29px';
          obj.text.primary.fontSize = '52px';
          obj.text.primary.lineHeight = '52px';
      }


      return obj;
    },
  },
  // // data object used for the patch builder
  data: {
    sizeOptions: builderData.sizeOptions,
    bgColors: builderData.colors.bgColors,
    fontColors: builderData.colors.fontColors,
    imgs: builderData.imgs,
    symbols: builderData.imgs.symbols,
    markTypeOptions: builderData.markType.types,
    saberOptions: builderData.lightSabers.types,
  },
  //  
  helpers: {
    get: {
      builderTitle: function (product) {
        let result;
        switch (product.handle) {
          case 'medical-patch':
            result = 'medical patch';
            break;
          case 'id-panel':
            result = 'ID panel';
            break;
          case 'name-tape':
            result = 'name tape';
            break;
          case 'call-sign':
            result = 'call sign';
            break;
          case 'quote':
            result = 'quote';
            break;
          case 'quotes':
            result = 'light saber';
            break;
          case 'custom-printed-patch-1':
            result = 'custom printed patch';
            break;
          case 'light-sabers':
            result = 'light sabers'
            break;
          case 'jacket-panel':
            result = 'jacket panel';
            break;
          case 'division-jacket-panel-1':
            result = 'division jacket panel';
            break;
          case 'ranger-tabs':
            result = 'ranger tabs';
            break;
          case 'flag-patch':
            result = 'flag';
            break;
          default:
            result = 'default';
            break;
        }

        // console.log(result);
        return  builderObj.helpers.utility.capitalizeWords(result);
      },
      patchType: function (product) {
        const patchType = builderData.type[builderObj.helpers.get.builderTitle(product).toLowerCase()];
        return builderData.type[builderObj.helpers.get.builderTitle(product).toLowerCase()];
      },
      upsells: function (product, size) {
        const patchType = this.patchType(product);
        console.log(patchType);
        const config = patchType.config;
        console.log(config);

        const sizeObj = config.sizes.find(value => value.size == size);

         console.log(sizeObj);
         return sizeObj?.upsells;
      },
    },
    update: {
      fontSize: function (containerRef, setFontStyle, formData) {
        const textLines = formData.text.primary.lines;
        // console.log(textLines)
        // console.log(formData.text.primary.lines)
        // console.log(formData.type.toLowerCase())
        // console.log(formData.size.current == '6” x 2”')
        const currentLines = formData.text.primary.text.split("\n").length;
        //  console.log(formData.type.toLowerCase().includes("name tape") && formData.type.toLowerCase().includes("flag"))
        // console log that formData.type.toLowercase() contains id panel and formData.size.current == '6” x 2”' is true
        // console.log(formData.type.toLowerCase().includes('id panel') && formData.size.current == '6” x 2”')
        const container = containerRef.current;

        const textElement = container.querySelector('#main-text');
        // console.log(containerRef);
        // console.log(textElement)
        // // Get the container width and height, text width and height, and current font size
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight + 10;
        let textWidth = textElement.offsetWidth;

        // if(textWidth > containerWidth) {
        //   textWidth = containerWidth;
        // }
        const textHeight = textElement.offsetHeight;
        const currentFontSize = parseFloat(getComputedStyle(textElement).fontSize);

        // console.log(textWidth);

        // console.log(containerWidth)
        // console.log(containerHeight)
        // console.log(textWidth)
        // console.log(textHeight)

        // Calculate the new font size based on the container and text size
        let newFontSizeWidth = (containerWidth / textWidth) * currentFontSize;
        let newFontSizeHeight = (containerHeight / textHeight) * currentFontSize;

        // console.log(currentFontSize)
        // console.log(newFontSizeWidth)
        // console.log(newFontSizeHeight)

        if (containerHeight === textHeight) {
          newFontSizeHeight = textHeight;
        }

        let newFontSize = Math.min(newFontSizeWidth, newFontSizeHeight);
        // Limit the font size to a maximum value of 96px
        let maxFontSize = containerHeight;

        // if(formData.type.toLowerCase() == 'division jacket panel'){
        //   maxFontSize = 52;
        // }
        if (newFontSize > maxFontSize) {
          newFontSize = maxFontSize;
        }

        switch (formData.type.toLowerCase()) {
          case 'id panel':
            if (formData.text.primary.text.length == 0) {
              switch (formData.size.current) {
                case '3” x 2”':
                  newFontSize = 97.0787;
                  break;
                case '3.5” x 2”':
                  newFontSize = 83;
                  break;
                case '4” x 2”':
                  newFontSize = 73;
                  break;
                case '5” x 3”':
                  newFontSize = 80;
                  break;
                case '6” x 2”':
                  newFontSize = 48.5468;
                  break;
                case '6” x 3”':
                  newFontSize = 48.556;
                  break;
              }
            }
            break;
          // @@ - This save spot is for setting starting font
          case 'name tape':
            if (formData.text.primary.text.length == 0) {
              switch (formData.size.current) {
                case '8” x 2”':
                  newFontSize = 28.3729;
                  break;
                case '8” x 3”':
                  newFontSize = 43.6253;
                  break;
                case '11” x 3”':
                  newFontSize = 30;
                  break;
              }
            }
            break;
          case 'medical patch':
            if (formData.text.primary.text.length == 0) {
              newFontSize = 47.1714;
            }
            break;
        }


        // Calculate the new margin top based on the font size
        let marginTop = null;
        if (textLines > 1) {
          marginTop = (newFontSize) / 7;
          let newLineHeight = newFontSize * .87;
          setFontStyle(prevStyle => ({ ...prevStyle, fontSize: `${newFontSize}px`, lineHeight: `${newLineHeight}px`, marginTop: `${marginTop}px` }));

        } else {
          marginTop = (newFontSize) / 9;
          setFontStyle(prevStyle => ({ ...prevStyle, fontSize: `${newFontSize}px`, lineHeight: `${newFontSize}px`, marginTop: `${marginTop}px` }));
        }
      },
      fontSizeAdditional: function (containerSecondaryRef, setFontSecondaryStyle, formData) {
        // container
        // textContainer
        // how many lines
        const container = containerSecondaryRef.current;
        const textElement = container.querySelector('#secondary-text');
        const textLines = 1;
        // Get the container width and height, text width and height, and current font size
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const textWidth = textElement.offsetWidth;
        const textHeight = textElement.offsetHeight;
        const currentFontSize = parseFloat(getComputedStyle(textElement).fontSize);


        let newFontSizeWidth = ((containerWidth / textWidth) * currentFontSize);
        let newFontSizeHeight = ((containerHeight / textHeight) * currentFontSize);

        if (containerHeight === textHeight) {
          newFontSizeHeight = textHeight;
        }
        // console.log(containerSecondaryRef);
        // console.log(containerHeight);
        // console.log(textHeight);
        // console.log(containerHeight / textHeight);

        // console.log(containerWidth);
        // console.log(textWidth);
        // console.log(containerWidth / textWidth);

        // console.log(newFontSizeWidth);
        // console.log(newFontSizeHeight);

        let newFontSize = Math.min(newFontSizeWidth, newFontSizeHeight);
        // Limit the font size to a maximum value of 96px
        const maxFontSize = 37;
        const minFontSize = 15;
        if (newFontSize > maxFontSize) {
          newFontSize = maxFontSize;
        }

        if (newFontSize < minFontSize) {
          newFontSize = minFontSize;
        }

        switch (formData.type.toLowerCase()) {
          case 'id panel':
            if (formData.text.secondary.text.length == 0) {
              switch (formData.size.current) {
                case '3” x 2”':
                  newFontSize = 37;
                  break;
                case '3.5” x 2”':
                  newFontSize = 37;
                  break;
                case '4” x 2”':
                  newFontSize = 31.5;
                  break;
                case '5” x 3”':
                  newFontSize = 32.8398;
                  break;
                case '6” x 3”':
                  newFontSize = 31.5;
                  break;
              }
            }
            break;
        }

        let newLineHeight = newFontSize * .8421;



        // Set the font style using setFontStyle()
        setFontSecondaryStyle(prevStyle => ({ ...prevStyle, fontSize: `${newFontSize}px`, lineHeight: `${newLineHeight}px` }));

      },
      // totalPrice function calculates the total price of the product based on the form data
      // It takes a formData object as an argument
      totalPrice: function (formData) {
        // Get the type of the product from the builderObj
        const type = builderObj.helpers.get.builderTitle(product).toLowerCase();

        // Create a priceObj object with the base price and upsell prices for the product
        const priceObj = {
          basePrice: builderData.type[type].basePrice || 0,
          sizeObj: builderData.type[type].config.sizes.find(value => value.size == formData.size.current) || 0,
          sizeUpsell: sizeObj?.sizeUpsell || 0,
          glowInTheDarkUpsell: sizeObj?.glowInTheDark || 0,
          hiVisUpsell: sizeObj?.hiVis || 0,
          badgeUpsell: sizeObj?.badge || 0,
          proIRFontColorUpsell: sizeObj?.proIRFontColor || 0,
          reflectiveGlowFontColorUpsell: sizeObj?.reflectiveGlowFontColor || 0,
          policeIDUpsell: sizeObj?.policeID || 0,
        };

        // Initialize the price variable with the base price
        let price = formData.price.amount;
        let upsells;
        let size = formData.size.current;

        // Add the size upsell to the price
        price += sizeUpsell;

        // Add the glow in the dark upsell to the price if selected
        if (formData.upsells.glowBorder) {
          price += priceObj.glowInTheDarkUpsell;
        }

        // Add the pro IR font color upsell to the price if selected
        if (formData.upsells.proIRFontColor) {
          price += 5;
        }

        // Add the badge or hi-vis upsell to the price if an image is enabled
        if (formData.img.enabled) {
          if (formData.img.type.toLowerCase() == 'lazer cut flag') {
            // Do nothing
          } else if (formData.img.type.toLowerCase() == 'hivis flag') {
            price += priceObj.hiVisUpsell;
          } else {
            price += priceObj.badgeUpsell;
          }

          // Set the total price in the formData object
          formData.price.total = price;
        }
      },
      formElement: function (element, trigger, steps) {
        // console.log(element);
        // console.log(trigger);
        // console.log(steps);
        const foundElement = steps.some(step => {
          return step.input.some(input => {
            return input.id === element.id;
          });
        });

        if(trigger) {
          addElement(element);
        } else {
          removeElement(element);
        }

        function addElement(element) {
          // check if element already exists, if not add element
          if(foundElement){
            console.log('element already exists');
          } else {
            if(element.id === 'glowInTheDark') {
              console.log("ok");
              let lastElement = steps[steps.length -1];
              console.log(lastElement);
              lastElement.input.unshift(element);
              console.log(steps);
            }
          }
        }

        function removeElement(element) {
          // check if element already exists, if so remove element
          if(foundElement){
            if(element.id === 'glowInTheDark') {
              console.log("ok");
              let lastElement = steps[steps.length -1];
              console.log(lastElement);
              lastElement.input.shift();
              console.log(steps);
            }
          } else {
          }
        }
      }
    },
    is: {
      glowBorder: function (type, size, sizeEnabled) {
        let enabled = false;
        if (!this.mini(type,size)) {
          enabled = true;
        }
        return sizeEnabled || enabled;
      },
      flag: function (type, flagEnabled) {
        // determine if type == id panel, lazer cut flag, jacket panel, division jacket panel
        if (type.toLowerCase().includes("id panel")
          // || type.toLowerCase().includes("jacket panel") || type.toLowerCase().includes("division jacket panel")
        ) {
          flagEnabled = true;
        }
        return flagEnabled || false;
      },
      mini: function (type, size, miniEnabled) {
        const [lengthStr, heightStr] = size.split("x").map(str => str.trim());
        const length = parseInt(lengthStr);
        const height = parseInt(heightStr);
        let enabled = false;
      //  console.log(length);
     //   console.log(type);
        if (type.toLowerCase().includes("id panel") && length <= 4) {
          enabled = true;
        }

       // console.log(enabled);
        return enabled;
      },
      largeID: function (type, size, miniEnabled) {
        const [lengthStr, heightStr] = size.split("x").map(str => str.trim());
        const length = parseInt(lengthStr);
        const height = parseInt(heightStr);
        if (type.toLowerCase().includes("id panel") && length > 4) {
          miniEnabled = true;
        }
        return miniEnabled || false;
      },
      additionalText: function (type) {
        if (type.toLowerCase().includes("id panel")) {
          return true;
        }
        return false;
      },
      patchBuilder: (product) => product.tags.includes("custom_patch"),
      patchType: {
        idPanel: (formData) => formData.type.toLowerCase().includes("id panel"),
        nameTape: (formData) => formData.type.toLowerCase().includes("name tape"),
        medicalPatch: (formData) => formData.type.toLowerCase().includes("medical patch"),
        jacketPanel: (formData) => formData.type.toLowerCase() == "jacket panel",
        divisionJacketPanel: (formData) => formData.type.toLowerCase() == ("division jacket panel"),
        flagPatch: (formData) => formData.type.toLowerCase() == ("flag"),
        lightSaber: (formData) => formData.type.toLowerCase().includes("light saber"),
        customPatch: (formData) => formData.type.toLowerCase() == 'custom printed patch',
      },
      flagType: {
        lazerCutFlag: (formData) => formData.img.type.toLowerCase() === "lazer cut flag",
        hiVisFlag: (formData) => formData.img.type.toLowerCase() === "hivis flag",
        upload: (formData) => formData.img.type.toLowerCase() === "upload",
      },
      upsells: {
        glowBorder: function (type, size, sizeEnabled) {
          const [lengthStr, heightStr] = size.split("x").map(str => str.trim());
          const length = parseInt(lengthStr);
          const height = parseInt(heightStr);

          if (type.toLowerCase().includes("id panel") && length <= 4) {
            sizeEnabled = false;
          }
          return sizeEnabled || true;
        },
      },

    },
    utility: {
      classNames: function (...classes) {
        return classes.filter(Boolean).join(' ')
      },
      convertSizeString: function (sizeString) {
        return sizeString.split(" ").join("").split("”").join("");
      },
      capitalizeWords: function(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      },
    }
  },
};


export default builderObj;