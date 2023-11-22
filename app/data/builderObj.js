import builderData from '~/data/builder.js';

const builderObj = {
  // initalize the starting state
  init: {
    //   // initalize the formData Object based on the product and chooses selected
    formData: function (product, searchParams) {
      const patchType = builderData.type[builderObj.helpers.get.builderTitle(product).toLowerCase()];
      let formData = {
        type: patchType.name || '',
        id: patchType.name.toLowerCase() || '',
        formValidation: {
          agreement: false,
        },
        price: {
          amount: parseInt(product.variants.nodes[0].price.amount),
          total: parseInt(product.variants.nodes[0].price.amount),
          upsells: {
            size: patchType.config.sizes[0].upsells.size || 0,
            glowBorder: patchType.config.sizes[0].upsells.glowInTheDark || 0,
            hiVis: patchType.config.sizes[0].upsells.hiVis || 0,
            badge: patchType.config.sizes[0].upsells.badge || 0,
            proIRFontColor: builderObj.helpers.get.fontUpsell(patchType.config.sizes[0].size) || 0,
            reflectiveGlowFontColor: builderObj.helpers.get.fontUpsell(patchType.config.sizes[0].size) || 0,
          }
        },
        upsells: {
          glowBorder: false,
          proIRFontColor: false,
          reflectiveGlowFontColor: false,
          hiVis: false,
          badge: false,
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
            maxLength: patchType.config.sizes[0].text?.primary.maxLength || '',
            lines: patchType.config.sizes[0].text?.primary.lines || '',
            placeholder: patchType.config.sizes[0].text?.primary.placeholder || '',
          },
          secondary: {
            text: '',
            maxLength: patchType.config.sizes[0].text?.secondary?.maxLength || '',
            lines: patchType.config.sizes[0].text?.secondary?.lines || '',
            placeholder: patchType.config.sizes[0].text?.secondary?.placeholder || '',
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
          division: {
            bird: {
              color: {
                name: builderObj.data.fontColors[8].name,
                img: builderObj.data.fontColors[8].img,
              },
              mask: {
                name: builderObj.data.imgs.symbols['division jacket panel'].bird.name,
                img: builderObj.data.imgs.symbols['division jacket panel'].bird.img,
              }
            },
            ring: {
              color: {
                name: builderObj.data.fontColors[8].name,
                img: builderObj.data.fontColors[8].img,
              },
              mask: {
                name: builderObj.data.imgs.symbols['division jacket panel'].ring.name,
                img: builderObj.data.imgs.symbols['division jacket panel'].ring.img,
              },
            },
          },
          type: 'Lazer Cut Flag',
          reversed: false,
          variant: {
            name: '',
            img: '',
          },
        }
      };
      let paramsList = [];
      // console.log(formData.type.toLowerCase());
      switch (formData.type.toLowerCase()) {
        case 'id panel':
          // console.log('id panel');
          formData.img.type = 'Lazer Cut Flag';
          formData.img.color.mask.img = builderObj.data.imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").img;
          formData.img.color.mask.name = builderObj.data.imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").name;
          formData.img.enabled = true;
          break;
        case 'name tape':
          formData.img.type = 'HiVis Flag';
          break;
        case 'flag':
          formData.img.type = 'Lazer Cut Flag';
          formData.img.color.mask.img = builderObj.data.imgs["lazer-cut"]['3.5x2'].find(value => value.name == "USA").img;
          formData.img.color.mask.name = builderObj.data.imgs["lazer-cut"]['3.5x2'].find(value => value.name == "USA").name;
          formData.img.color.mask.glow = builderObj.data.imgs["lazer-cut"]['3.5x2'].find(value => value.name == "USA").glow;
          formData.img.color.mask.icon = builderObj.data.imgs["lazer-cut"]['3.5x2'].find(value => value.name == "USA").icon;
          formData.img.enabled = true;
          break;
        case 'light sabers':
          formData.bgColor.name = builderObj.data.bgColors[0].name;
          formData.bgColor.img = builderObj.data.bgColors[0].img;
          formData.img.enabled = true;
          break;
        case 'medical patch':
          formData.img.markType = 'Symbol';
          formData.img.name = builderObj.data.symbols['medical patch'][0].name;
          formData.img.color.mask.name = builderObj.data.symbols['medical patch'][0].name;
          formData.img.color.mask.img = builderObj.data.symbols['medical patch'][0].img;
          formData.img.color.mask.icon = builderObj.data.symbols['medical patch'][0].icon;
          formData.img.color.mask.glow = builderObj.data.symbols['medical patch'][0].glow;
          // if (formData.size.current == '1” x 1”') {
          //   //   console.log('hi')
          //   formData.img.markType = 'Symbol';
          //   formData.img.name = builderObj.data.symbols['medical patch']['1 x 1'][0].name;
          //   formData.img.color.mask.name = builderObj.data.symbols['medical patch']['1 x 1'][0].name;
          //   formData.img.color.mask.img = builderObj.data.symbols['medical patch']['1 x 1'][0].img;
          //   formData.img.color.mask.icon = builderObj.data.symbols['medical patch']['1 x 1'][0].icon;
          //   formData.img.color.mask.glow = builderObj.data.symbols['medical patch']['1 x 1'][0].glow;
          // } else {
          //   formData.img.markType = 'Symbol';
          //   formData.img.name = builderObj.data.symbols['medical patch']['1 x 1'][0].name;
          //   formData.img.color.mask.name = builderObj.data.symbols['medical patch']['2 x 2'][0].name;
          //   formData.img.color.mask.img = builderObj.data.symbols['medical patch']['2 x 2'][0].img;
          //   formData.img.color.mask.icon = builderObj.data.symbols['medical patch']['2 x 2'][0].icon;
          //   formData.img.color.mask.glow = builderObj.data.symbols['medical patch']['2 x 2'][0].glow;
          // }
          formData.img.enabled = true;
          break;
        case 'jacket panel':
          let tempObj = {
            text: '',
            placeholder: 'Text',
            maxLength: 6,
            lines: 1,
          };
          //    formData.text.secondary = tempObj;
          formData.text.third = patchType.config.sizes[0].text?.third || tempObj,
            formData.text.fourth = patchType.config.sizes[0].text?.fourth || tempObj;
          formData.text.fifth = patchType.config.sizes[0].text?.fifth || tempObj;
          formData.text.sixth = patchType.config.sizes[0].text?.sixth || tempObj;
          formData.text.seventh = patchType.config.sizes[0].text?.seventh || tempObj;
          formData.img.type = 'Lazer Cut Flag';
          formData.img.color.mask.img = builderObj.data.imgs["lazer-cut"]['3.5x2'].find(value => value.name == "USA").img;
          formData.img.color.mask.name = builderObj.data.imgs["lazer-cut"]['3.5x2'].find(value => value.name == "USA").name;
          formData.img.color.mask.glow = builderObj.data.imgs["lazer-cut"]['3.5x2'].find(value => value.name == "USA").glow;
          formData.img.color.mask.icon = builderObj.data.imgs["lazer-cut"]['3.5x2'].find(value => value.name == "USA").icon;
          formData.img.enabled = true;
          break;
        case 'division jacket panel':
          formData.text.primary.maxLength = 15;
          formData.text.primary.placeholder = '1st Line';
          formData.img.enabled = true;
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


      formData = builderObj.helpers.update.params.updateFormData(formData, searchParams);

      // console.log(searchParams);
      // const params = builderObj.helpers.utility.paramsStringToObj(searchParams);

      // const filteredParams = builderObj.helpers.update.paramsFilter(params, paramsList);

      // console.log(params);
      // console.log(filteredParams);
      //  formData = builderObj.helpers.update.paramsFormData(formData, filteredParams);

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
      const ringImg = 'url("' + formData.img.division.ring.mask.img + '")';
      const ringColor = 'url("' + formData.img.division.ring.color.img + '")';
      const birdImg = 'url("' + formData.img.division.bird.mask.img + '")';
      const birdColor = 'url("' + formData.img.division.bird.color.img + '")';



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
          division: {
            bird: {
              backgroundImage: textColor,
              maskImage: birdImg,
              maskSize: 'cover',
              WebkitMaskImage: birdImg,
              WebkitMaskSize: 'cover',
            },
            ring: {
              backgroundImage: ringColor,
              maskImage: ringImg,
              maskSize: 'cover',
              WebkitMaskImage: ringImg,
              WebkitMaskSize: 'cover',
            },
          }
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
          obj.img.flag.aspectRatio = '2/1';
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
          obj.patch.padding = '20px';
          obj.text.secondary.width = 'auto';
          obj.text.secondary.textAlign = 'center';
          break;
        case 'jacket panel':
          obj.patch.padding = '12px';
          obj.text.secondary.fontSize = '34px';
          obj.patch.borderRadius = '.5rem';
          obj.img.flag.aspectRatio = '2/1';
          obj.img.mask.maxHeight = '136px';
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
    division: builderData.division,
    symbols: builderData.imgs.symbols,
    markTypeOptions: builderData.markType.types,
    saberOptions: builderData.lightSabers.types,
    type: builderData.type,
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
        return builderObj.helpers.utility.capitalizeWords(result);
      },
      patchType: function (product) {
        const patchType = builderData.type[builderObj.helpers.get.builderTitle(product).toLowerCase()];
        return builderData.type[builderObj.helpers.get.builderTitle(product).toLowerCase()];
      },
      upsells: function (product, size) {
        const patchType = this.patchType(product);
        //      console.log(patchType);
        const config = patchType.config;
        //      console.log(config);

        const sizeObj = config.sizes.find(value => value.size == size);

        //     console.log(sizeObj);
        return sizeObj?.upsells;
      },
      fontUpsell: function (size) {
        const [lengthStr, heightStr] = size.split("x").map(str => str.trim());
        const length = parseInt(lengthStr);
        const height = parseInt(heightStr);
        let max = Math.max(length, height);
        let result = 0;
        if (max <= 5) {
          result = 7;
        } else if (max > 5 && max <= 7) {
          result = 12;
        } else if (max > 7 && max <= 9) {
          result = 17;
        } else {
          result = 25;
        }
        return result;
      },
      addOnObj: function (product) {
        return {
          "glow-border": {
            "name": "Add-on - Glow Border",
            "variants": [
              {
                "id": "gid://shopify/ProductVariant/42893374390430",
                "value": "5"
              },
              {
                "id": "gid://shopify/ProductVariant/42908600729758",
                "value": "10"
              },
              {
                "id": "gid://shopify/ProductVariant/42893374554270",
                "value": "15"
              },
              {
                "id": "gid://shopify/ProductVariant/42908600762526",
                "value": "20"
              }
            ]
          },
          "hivis-flag": {
            "name": "Add-on - HiVis Flag",
            "variants": [
              {
                "id": "gid://shopify/ProductVariant/42893372719262",
                "value": "3"
              },
              {
                "id": "gid://shopify/ProductVariant/42893372752030",
                "value": "4"
              },
              {
                "id": "gid://shopify/ProductVariant/42893372784798",
                "value": "5"
              }
            ]
          },
          "pro-ir-font-color": {
            "name": "Add-on - Pro IR Font Color",
            "variants": [
              {
                "id": "gid://shopify/ProductVariant/42893371572382",
                "value": "7"
              },
              {
                "id": "gid://shopify/ProductVariant/42893371605150",
                "value": "12"
              },
              {
                "id": "gid://shopify/ProductVariant/42893371637918",
                "value": "17"
              },
              {
                "id": "gid://shopify/ProductVariant/42893371670686",
                "value": "25"
              }
            ]
          },
          "reflective-glow-font-color": {
            "name": "Add-on - Reflective & Glow Font Color",
            "variants": [
              {
                "id": "gid://shopify/ProductVariant/42893372162206",
                "value": "7"
              },
              {
                "id": "gid://shopify/ProductVariant/42893372194974",
                "value": "12"
              },
              {
                "id": "gid://shopify/ProductVariant/42893372227742",
                "value": "17"
              },
              {
                "id": "gid://shopify/ProductVariant/42893372260510",
                "value": "25"
              }
            ]
          },
          "badge": {
            "name": "Add-on - Badge",
            "variants": [
              {
                "id": "gid://shopify/ProductVariant/42893376127134",
                "value": "25"
              }
            ]
          },
          "size": {
            "name": "Add-on - Size",
            "variants": [
              {
                "id": "gid://shopify/ProductVariant/42908592308382",
                "value": "1"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592341150",
                "value": "2"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592406686",
                "value": "3"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592439454",
                "value": "4"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592472222",
                "value": "5"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592504990",
                "value": "8"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592537758",
                "value": "9"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592570526",
                "value": "13"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592603294",
                "value": "14"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592636062",
                "value": "15"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592668830",
                "value": "17"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592701598",
                "value": "24"
              },
              {
                "id": "gid://shopify/ProductVariant/42908592734366",
                "value": "41"
              }
            ]
          }
        };
      },
      routerParams: function () {

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

        if (formData.type.toLowerCase() == 'jacket panel') {
          maxFontSize = 45;
        }
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
          case 'jacket panel':
            // if (formData.text.primary.text.length == 0) {
            //   newFontSize = 47.1714;
            // }
            break;
        }


        // Calculate the new margin top based on the font size
        let marginTop = null;
        if (textLines > 1) {
          marginTop = (newFontSize) / 7;

          let newLineHeight = newFontSize * .87;
          setFontStyle(prevStyle => ({ ...prevStyle, fontSize: `${newFontSize}px`, lineHeight: `${newLineHeight}px`, marginTop: `${marginTop}px` }));

        } else {
          if (formData.type.toLowerCase() == 'jacket panel') {
            marginTop = 0;
            let newLineHeight = newFontSize * .87;
            setFontStyle(prevStyle => ({ ...prevStyle, fontSize: `${newFontSize}px`, lineHeight: `${newLineHeight}px`, marginTop: `${marginTop}px` }));
          } else {
            marginTop = (newFontSize) / 9;
            setFontStyle(prevStyle => ({ ...prevStyle, fontSize: `${newFontSize}px`, lineHeight: `${newFontSize}px`, marginTop: `${marginTop}px` }));
          }
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
      totalPrice: function (formData, setFormData) {
        // Get the type of the product from the builderObj
        // calclate total price, price obj, and unique id
        let data = formData.price;
        const id = formData.id;
        let newID = formData.type.toLowerCase().replace(/\s+/g, "-");
        const price = data.amount;
        const upsells = data.upsells;
        const statusObj = formData.upsells;
        let upsellsObj = {};
        let totalPrice = price;

        if (upsells.size) {
          newID += '-size=' + upsells.size;
          totalPrice += upsells.size;
          upsellsObj.size = upsells.size;
        }
        // go through each property in statusObj obj and if it is true add the same property name in upsells object
        for (const [key, value] of Object.entries(statusObj)) {

          if (value) {
            newID += '-' + key.toLowerCase() + '=' + upsells[key];
            totalPrice += upsells[key];
            upsellsObj[key] = upsells[key];
          }
          // console.log(totalPrice);

        }
        // console.log("price at end:" + totalPrice);
        const myObjStr = JSON.stringify(upsellsObj);
        //  console.log(myObjStr);
        setFormData({ ...formData, id: newID, price: { ...formData.price, total: totalPrice, upsellPricing: myObjStr } });
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

        if (trigger) {
          addElement(element);
        } else {
          removeElement(element);
        }

        function addElement(element) {
          // check if element already exists, if not add element
          if (foundElement) {
            //    console.log('element already exists');
          } else {
            if (element.id === 'glowInTheDark') {
              //      console.log("ok");
              let lastElement = steps[steps.length - 1];
              //     console.log(lastElement);
              lastElement.input.unshift(element);
              //     console.log(steps);
            }
          }
        }

        function removeElement(element) {
          // check if element already exists, if so remove element
          if (foundElement) {
            if (element.id === 'glowInTheDark') {
              //   console.log("ok");
              let lastElement = steps[steps.length - 1];
              //    console.log(lastElement);
              lastElement.input.shift();
              //   console.log(steps);
            }
          } else {
          }
        }
      },
      addOn: {
        add: function (formData) {

          // get data of upsell objects
          const upsells = formData.price.upsells;
          const statusObj = formData.upsells;
          // arr to store addon project objects for
          let addOnArr = [];

          // console.log(upsells);
          // console.log(statusObj);

          if (upsells.size) {
            let obj = {};
            obj.merchandiseId = getAddOnGID(builderObj.helpers.get.addOnObj, 'size', upsells.size).id;
            obj.quantity = 1;
            obj.attributes = [
              {
                key: "productID",
                value: formData.id,
              }
            ];
            // push obj to addonarr
            addOnArr.push(obj);
          }
          // go through each property in statusObj obj and if it is true add the same property name in upsells object
          for (const [key, value] of Object.entries(statusObj)) {
            //   console.log("key");
            let type = "";
            switch (key) {
              case 'glowBorder':
                type = 'glow-border';
                break;
              case 'hiVis':
                type = 'hivis-flag';
                break;
              case 'proIRFontColor':
                type = 'pro-ir-font-color';
                break;
              case 'reflectiveGlowFontColor':
                type = 'reflective-glow-font-color';
                break;
              case 'badge':
                type = 'badge';
                break;
            }
            if (value) {
              //        console.log(key);
              //       console.log(upsells);
              let obj = {};
              obj.merchandiseId = getAddOnGID(builderObj.helpers.get.addOnObj, type, upsells[key]).id;
              obj.quantity = 1;
              obj.attributes = [
                {
                  key: "productID",
                  value: formData.id,
                }
              ];
              // push obj to addonarr
              addOnArr.push(obj);
            }
          }

          return addOnArr;

          function getAddOnGID(addOnObj, handle, value) {
            let addOn = addOnObj()[handle];

            // console.log(addOnObj());
            // console.log(addOn);
            // console.log(handle);
            // console.log(value);


            if (!addOn) {
              return null;
            }

            let variant = addOn.variants.find(v => parseInt(v.value) === value);

            return variant || null;
          }
        },
        remove: function (line, cart) {
          let arr = [];
          const { id, attributes } = line;
          const idTag = attributes.find((attribute) => attribute.key === 'ID')?.value || '';

          arr.push(id);
          cart.forEach((line) => {
            //   console.log(line);
            if (line.attributes.length == 1) {
              //  console.log(line.attributes[0].value);
              if (line.attributes[0].value == idTag) {
                //  console.log(line);
                arr.push(line.id);
              }
            }
          });

          //  console.log(arr);

          return arr;
        },
        update: function (line, cart, quantity) {
          // console.log(line);
          // console.log(cart);
          // console.log(quantity);
          let arr = [];
          const { id, attributes } = line;
          const idTag = attributes.find((attribute) => attribute.key === 'ID')?.value || '';

          arr.push({ id: id, quantity: quantity, attributes: attributes });
          cart.forEach((line) => {
            //   console.log(line);
            if (line.attributes.length == 1) {
              //  console.log(line.attributes[0].value);
              if (line.attributes[0].value == idTag) {
                //  console.log(line);
                arr.push({
                  id: line.id, quantity: quantity, attributes: {
                    key: "productID",
                    value: idTag,
                  }
                });
              }
            }
          });

          console.log(arr);

          return arr;
        },
      },
      params: {
        update: {
          color: function (color, type) {
            console.log(type);
            const colorOptions = builderObj.data[type + 'Colors'];
            console.log(colorOptions);
            let colorObj = {};
            if(type == 'font') {
              colorObj = colorOptions.find(obj => obj.name.toLowerCase().includes(color.toLowerCase()));
            } else {
              console.log(color);
              // colorObj = colorOptions.find(obj => obj.name.toLowerCase().includes(color.toLowerCase()));
              colorObj = colorOptions.find(obj => obj.name.toLowerCase() == color.toLowerCase());   
            }
            console.log(colorOptions);
            console.log(colorObj);
            return colorObj;
          },
          saber: function (type) {
            const saberOptions = builderObj.data.saberOptions;
            const saberObj = saberOptions.find(obj => obj.name.toLowerCase().includes(type.toLowerCase()));
             
            return saberObj;
          },
          flag: function (flag) {
            const flagOptions = builderObj.data.saberOptions;
            const flagObj = flagOptions.find(obj => obj.name.toLowerCase().includes(type.toLowerCase()));
            return flagObj;
          },
          symbol: function (symbol) {
            const symbolOptions = builderObj.data.saberOptions;
            const saberObj = saberOptions.find(obj => obj.name.toLowerCase().includes(type.toLowerCase()));
             
            return saberObj;
          }
        },
        filter: function (params, attrList) {
          const filteredArray = params.filter(obj =>
            attrList.some(key => obj.hasOwnProperty(key))
          );

          return filteredArray;
        },
        updateFormData: function (formData, params) {
          let filteredParams = this.filter(this.paramsStringToObj(params), this.paramsList(formData));

          console.log(filteredParams);
          formData = formData;
          filteredParams.forEach(obj => {
            const key = Object.keys(obj)[0];
            const value = obj[key];
            console.log(key);
            switch (key.toLowerCase()) {
              case 'size':
                formData.size.current = value;
                break;
              case 'primary':
                formData.text.primary.text = builderObj.helpers.utility.limitString(value, formData.text.primary.maxLength);
                break;
              case 'secondary':
                formData.text.secondary.text = builderObj.helpers.utility.limitString(value, formData.text.secondary.maxLength);
                break;
              case 'third':
                formData.text.third.text = builderObj.helpers.utility.limitString(value, formData.text.third.maxLength);
                break;
              case 'fourth':
                formData.text.fourth.text = builderObj.helpers.utility.limitString(value, formData.text.fourth.maxLength);
                break;
              case 'fifth':
                formData.text.fifth.text = builderObj.helpers.utility.limitString(value, formData.text.fifth.maxLength);
                break;
              case 'sixth':
                formData.text.sixth.text = builderObj.helpers.utility.limitString(value, formData.text.sixth.maxLength);
                break;
              case 'seventh':
                formData.text.seventh.text = builderObj.helpers.utility.limitString(value, formData.text.seventh.maxLength);
                break;
              case 'textcolor':
                formData.text.color = this.update.color(value, 'font');
                break;
              case 'bgcolor':
                formData.bgColor = this.update.color(value, 'bg');
                break;
              case 'sabertype':
                const saberObj = this.update.saber(value);
                formData.lightsaber.saberType = saberObj.name;
                formData.lightsaber.blade.img = saberObj.blade;
                formData.lightsaber.hilt.img = saberObj.hilt;
                break;
              case 'bladecolor':
                const bladeObj = this.update.color(value, 'font');
                formData.lightsaber.blade.name = bladeObj.name;
                formData.lightsaber.blade.color = bladeObj.img;
                break;
              case 'hiltcolor':
                const hiltObj = this.update.color(value, 'font');
                formData.lightsaber.hilt.name = hiltObj.name;
                formData.lightsaber.hilt.color = hiltObj.img;

                break;
              case 'ringcolor':
                formData.img.division.ring.color = this.update.color(value, 'font');
                break;
              default:
                break;
            }
            console.log(key);
            console.log(value);
          });
          console.log(filteredParams);
          console.log(formData);
          return formData;
        },
        paramsList: function (formData) {
          let paramsList = [];

          switch (formData.type.toLowerCase()) {
            case 'id panel':
              paramsList = [
                'size',
                'primary',
                'secondary',
                'textColor',
                'bgColor',
                'flagType',
                'flag',
                'glowBorder',
              ];
              break;
            case 'name tape':
              paramsList = [
                'size',
                'primary',
                'secondary',
                'textColor',
                'bgColor',
                'glowBorder',
              ];
              if (formData.img.size == '4” x 1”' || formData.img.size == '5” x 1”') {
                paramsList.push('flagEnabled');
                paramsList.push('flag');
                paramsList.push('flagReversed');
              }
              break;
            case 'flag':
              paramsList = [
                'size',
                'textColor',
                'bgColor',
                'flag',
                'flagReversed',
                'glowBorder',
              ];
              break;
            case 'light sabers':
              paramsList = [
                'saberType',
                'bladeColor',
                'hiltColor',
                'bgColor',
              ];
              break;
            case 'medical patch':
              paramsList = [
                'size',
                'textColor',
                'bgColor',
                'symbol',
                'glowBorder',
              ];
              if (formData.img.size == '3.5” x 2”') {
                paramsList.push('primary');
              }
              break;
            case 'jacket panel':
              paramsList = [
                'size',
                'primary',
                'secondary',
                'third',
                'fourth',
                'fifth',
                'sixth',
                'seventh',
                'textColor',
                'bgColor',
                'flag',
                'glowBorder',
              ];
              break;
            case 'division jacket panel':
              paramsList = [
                'size',
                'primary',
                'secondary',
                'third',
                'textColor',
                'bgColor',
                'ringColor',
              ];
              break;
            case 'default':
              break;
          }
          // turn array strings in lowercase and return
          return paramsList.map(str => str.toLowerCase());;
        },
        paramsStringToObj: function (queryString) {
          const params = new URLSearchParams(queryString);
          const result = [];

          for (const [key, value] of params) {
            const obj = {};
            obj[key] = value;
            result.push(obj);
          }
          return result;
        },
      },
    },
    is: {
      glowBorder: function (type, size, sizeEnabled) {
        let enabled = false;
        if (!this.mini(type, size)) {
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
      capitalizeWords: function (str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      },
      limitString: function (str, maxLength) {
        if (str.length <= maxLength) {
          return str;
        } else {
          return str.slice(0, maxLength);
        }
      },
    },
  },
};


export default builderObj;