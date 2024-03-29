import builderData from '~/data/builder.js';

const builderObj = {
  // initalize the starting state
  init: {
    //   // initalize the formData Object based on the product and chooses selected
    formData: function (product, searchParams) {
      const patchType = builderData.type[builderObj.helpers.get.handle(product).toLowerCase()];
      // console.log(patchType);
      let formData = {
        type: patchType.name || '',
        id: patchType.name.toLowerCase() || '',
        formValidation: {
          agreement: false,
        },
        urlParams: '',
        img: {
          markType: 'Flag',
          enabled: false,
          name: builderObj.data.imgs["hi-vis"][0].name,
          img: builderObj.data.imgs["hi-vis"][0].img,
          color: {
            name: builderObj.data.fontColors[8].name,
            img: builderObj.data.fontColors[8].img,
            mask: {
              name: builderObj.data.imgs["laser-cut"]['mini-id'].find(value => value.name == "USA").name,
              img: builderObj.data.imgs["laser-cut"]['mini-id'].find(value => value.name == "USA").img,
              glow: builderObj.data.imgs["laser-cut"]['mini-id'].find(value => value.name == "USA").glow,
              icon: builderObj.data.imgs["laser-cut"]['mini-id'].find(value => value.name == "USA").icon,
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
          type: 'Laser Cut Flag',
          reversed: false,
          variant: {
            name: '',
            img: '',
          },
        },
        price: {
          amount: parseInt(product.variants.nodes[0].price.amount),
          total: parseInt(product.variants.nodes[0].price.amount),
          upsells: {
            size: patchType.config.sizes[0].upsells.size || 0,
            glowBorder: patchType.config.sizes[0].upsells.glowBorder || 0,
            hiVis: patchType.config.sizes[0].upsells.hiVis || 0,
            badge: patchType.config.sizes[0].upsells.badge || 0,
            proIRFontColor: builderObj.helpers.get.fontUpsell(patchType.config.sizes[0].size) || 0,
            reflectiveGlowFontColor: builderObj.helpers.get.fontUpsell(patchType.config.sizes[0].size) || 0,
            sides: patchType.config.sizes[0].upsells.sides || 10,
          }
        },
        upsells: {
          glowBorder: false,
          proIRFontColor: false,
          reflectiveGlowFontColor: false,
          hiVis: false,
          badge: false,
          sides: false,
        },
        size: {
          current: patchType.config.sizes[0].size || '',
          list: patchType.config.sizes || [],
        },
        sides: {
          current: 1,
          options: [1, 2],
        },
        bgColor: {
          name: builderObj.data.bgColors[18].name,
          img: builderObj.data.bgColors[18].img,
          texture: builderObj.data.textures.find(value => value.name.includes('White')),
          ir: {
            name: builderObj.data.fontColors.find(value => value.name.includes('Basic IR')).name,
            img: builderObj.data.fontColors.find(value => value.name.includes('Basic IR')).img,
          },
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
        rod: {
          name: builderObj.data.fontColors[4].name,
          color: builderObj.data.fontColors[4].img,
          img: builderObj.data.rod,
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
      };
      let paramsList = [];
      // console.log(formData.type.toLowerCase());
      switch (formData.type.toLowerCase()) {
        case 'id panel':
          // console.log('id panel');
          formData.img.type = 'Laser Cut Flag';
          formData.img.color.mask.img = builderObj.data.imgs["laser-cut"]['mini-id'].find(value => value.name == "USA").img;
          formData.img.color.mask.name = builderObj.data.imgs["laser-cut"]['mini-id'].find(value => value.name == "USA").name;
          formData.img.enabled = true;
          break;
        case 'name tape':
          formData.img.type = 'HiVis Flag';
          break;
        case 'flag':
          formData.img.type = 'Laser Cut Flag';
          formData.img.color.mask.img = builderObj.data.imgs["laser-cut"]['3x2'].find(value => value.name == "USA").img;
          formData.img.color.mask.name = builderObj.data.imgs["laser-cut"]['3x2'].find(value => value.name == "USA").name;
          formData.img.color.mask.glow = builderObj.data.imgs["laser-cut"]['3x2'].find(value => value.name == "USA").glow;
          formData.img.color.mask.icon = builderObj.data.imgs["laser-cut"]['3x2'].find(value => value.name == "USA").icon;
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
          formData.img.type = 'Laser Cut Flag';
          formData.img.color.mask.img = builderObj.data.imgs["laser-cut"]['large-id'].find(value => value.name == "USA").img;
          formData.img.color.mask.name = builderObj.data.imgs["laser-cut"]['large-id'].find(value => value.name == "USA").name;
          formData.img.color.mask.glow = builderObj.data.imgs["laser-cut"]['large-id'].find(value => value.name == "USA").glow;
          formData.img.color.mask.icon = builderObj.data.imgs["laser-cut"]['large-id'].find(value => value.name == "USA").icon;
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
        default:
          formData.img.type = 'HiVis Flag';
          formData.price.total += 4;
          break;
      }


      formData = builderObj.helpers.update.params.updateFormData(formData, searchParams, product);

      return formData || {};
    },
    //   // initalize the visualizer style to show custom product formed by the formData object.
    visualizer: function (formData) {
      const bgColor = 'url("' + formData.bgColor.img + '")';
      const textColor = 'url("' + formData.text.color.img + '")';
      const textureColor = 'url("' + formData.bgColor.texture.img + '")';
      const backTextColor = 'url("' + builderObj.data.fontColors.find(value => value.name.includes('Glow in the Dark')).img + '")';
      const backBGColor = 'url("' + builderObj.data.fontColors.find(value => value.name.includes('Basic IR')).img + '")';
      const backTextureColor = 'url("' + builderObj.data.textures.find(value => value.name.includes('Black')).img + '")';
      const rodColor = 'url("' + formData.rod.color + '")';
      const hiltColor = 'url("' + formData.lightsaber.hilt.color + '")';
      const bladeColor = 'url("' + formData.lightsaber.blade.color + '")';
      const symbolColor = 'url("' + formData.img.color.color + '")';
      const img = formData.type.toLowerCase() === "medical patch" ? 'url("' + formData.img.symbol + '")' : 'url("' + formData.img.img + '")';
      const mask = 'url("' + formData.img.color.mask.img + '")';
      const rod = 'url("' + formData.rod.img + '")';
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
          texture: {
            backgroundImage: textureColor,
            width: '290px',
            height: 'calc(290px/3)',
            padding: '30px',
            WebkitTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            MozTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            msTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            OTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            transition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
          },
        },
        backPatch: {
          texture: {
            backgroundImage: backTextureColor,
            width: '290px',
            height: 'calc(290px/3)',
            padding: '30px',
            WebkitTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            MozTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            msTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            OTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            transition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
          },
          patch: {
            backgroundImage: backBGColor,
            width: '100%',
            height: '100%',
            textTransform: 'uppercase',
            WebkitTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            MozTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            msTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            OTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
            transition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
          },
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
            lineHeight: '45px',
            fontSize: '45px',
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
          back: {
            backgroundImage: backTextColor,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'WMIStencil-Black',
            backgroundClip: 'text',
            width: 'auto',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            lineHeight: '45px',
            fontSize: '45px',
            marginTop: '8.3333px'
          },
        },
        img: {
          flag: {
            // backgroundImage: textColor,
            // maskImage: img,
            // maskSize: 'cover',
            // WebkitMaskImage: img,
            // WebkitMaskSize: 'cover',
            aspectRatio: '80/47',
            backgroundImage: img,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          },
          rod: {
            backgroundImage: rodColor,
            maskImage: rod,
            maskSize: 'cover',
            WebkitMaskImage: rod,
            WebkitMaskSize: 'cover',
            width: '21%',
            margin: '0 auto',
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
          obj.img.mask.minHeight = builderObj.helpers.get.flagHeight(formData.size.current, formData.type);
          obj.img.mask.maxHeight = builderObj.helpers.get.flagHeight(formData.size.current, formData.type);
          break;
        case 'name tape':
          obj.text.primary.fontSize = '48.6397px';
          obj.text.primary.lineHeight = '48.6397px';
          obj.text.primary.marginTop = '6.07996px';
          obj.img.flag.aspectRatio = '80/47';
          break;
        case 'medical patch':
          obj.patch.maskImage = 'none';
          obj.patch.WebkitMaskImage = 'none';
          obj.text.secondary.width = 'auto';
          obj.text.secondary.textAlign = 'center';
          break;
        case 'light sabers':
          obj.patch.height = '58px';
          obj.patch.padding = '5px 10px';
          break;
        case 'flag':
          obj.patch.padding = '21px 20px';
          obj.text.secondary.width = 'auto';
          obj.text.secondary.textAlign = 'center';
          break;
        case 'jacket panel':
          obj.text.primary.width = '100%';
          if (formData.size.current == '3.5” x 4”') {
            //      obj.patch.borderRadius = '.5rem';
          }
          switch (formData.size.current) {
            case '3.5” x 3.5”':
              obj.text.secondary.fontSize = '14px';
              obj.text.secondary.lineHeight = '14px';
              obj.img.mask.maxHeight = '84px';
              obj.patch.padding = '10px 16px';
              break;
            case '3.5” x 4”':
              obj.patch.padding = 'inherit';
              break;
          }
          //   obj.patch.padding = '12px';
          // obj.text.secondary.fontSize = '34px';
          obj.img.flag.aspectRatio = '2/1';
          break;
        case 'division jacket panel':
          obj.text.secondary.fontSize = '27px';
          obj.text.secondary.lineHeight = '29px';
          obj.text.primary.fontSize = '52px';
          obj.text.primary.lineHeight = '52px';
        case 'call sign':
          obj.text.primary.fontSize = '100px';
          obj.text.primary.lineHeight = '100px';
          obj.text.primary.marginTop = '9.07996px';
          break;
      }

      return obj;
    },
  },
  // // data object used for the patch builder
  data: {
    sizeOptions: builderData.sizeOptions,
    bgColors: builderData.colors.bgColors,
    fontColors: builderData.colors.fontColors,
    textures: builderData.colors.textures,
    imgs: builderData.imgs,
    division: builderData.division,
    symbols: builderData.imgs.symbols,
    markTypeOptions: builderData.markType.types,
    saberOptions: builderData.lightSabers.types,
    type: builderData.type,
    rod: 'https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-med-img-rod.png',
  },
  helpers: {
    get: {
      type: function (product) {
        const patchType = builderData.type[builderObj.helpers.get.handle(product).toLowerCase()];
        return builderData.type[builderObj.helpers.get.handle(product).toLowerCase()];
      },
      handle: function (product) {
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
          case 'cover':
            result = 'cover';
            break;
          case 'flag-patch':
            result = 'flag';
            break;
          case 'call-sign':
            result = 'call sign';
            break;
          default:
            result = 'default';
            break;
        }

        return builderObj.helpers.utility.capitalizeWords(result);
      },
      title: function (size, type) {
        let title = '';
        switch (type.toLowerCase()) {
          case 'id panel':
            title = this.patch.idPanel.title(size);
            break;
          case 'name tape':
            title = this.patch.nameTape.title(size);
            break;
          case 'medical patch':
            title = this.patch.medicalPatch.title(size);
            break;
          case 'flag':
            title = this.patch.flag.title(size);
            break;
          case 'light sabers':
            title = this.patch.lightSaber.title(size);
            break;
          case 'custom printed patch':
            title = this.patch.customPatch.title(size);
            break;
          case 'jacket panel':
            title = this.patch.jacketPanel.title(size);
            break;
          case 'division jacket panel':
            title = this.patch.divisionJacketPanel.title(size);
            break;
          case 'cover':
            title = this.patch.cover.title(size);
            break;
          case 'call sign':
            title = this.patch.callSign.title(size);
            break;
        }
        return title;
      },
      flagHeight: function (size, type) {
        let height = '';
        switch (type.toLowerCase()) {
          case 'id panel':
            height = this.patch.idPanel.flagHeight(size);
            break;
          case 'name tape':
            height = this.patch.nameTape.flagHeight(size);
            break;
          case 'flag':
            height = this.patch.flag.flagHeight(size);
            break;
          case 'jacket panel':
            height = this.patch.jacketPanel.flagHeight(size);
            break;
        }
        return height;
      },
      fontSize: function (size, type) {
        let fontSize;
        switch (type.toLowerCase()) {
          case 'id panel':
            fontSize = this.patch.idPanel.fontSize(size);
            break;
          case 'name tape':
            fontSize = this.patch.nameTape.fontSize(size);
            break;
          case 'medical patch':
            fontSize = this.patch.medicalPatch.fontSize(size);
            break;
          case 'jacket panel':
            fontSize = this.patch.jacketPanel.fontSize(size);
            break;
          case 'division jacket panel':
            fontSize = this.patch.divisionJacketPanel.fontSize(size);
            break;
          case 'call sign':
            fontSize = this.patch.callSign.fontSize(size);
            break;
          case 'cover':
            fontSize = 0;
            break;
        }
        return fontSize;
      },
      secondaryFontSize: function (size, type) {
        let fontSize;
        switch (type.toLowerCase()) {
          case 'id panel':
            fontSize = this.patch.idPanel.secondaryFontSize(size);
            break;
          case 'jacket panel':
            fontSize = this.patch.jacketPanel.secondaryFontSize(size);
            break;
          case 'division jacket panel':
            fontSize = this.patch.divisionJacketPanel.secondaryFontSize(size);
            break;
        }
        return fontSize;
      },
      patch: {
        idPanel: {
          title: function (size) {
            let title = 'ID Panel';
            switch (size) {
              case '3” x 2”':
              case '3.5” x 2”':
              case '4” x 2”':
                title = 'Mini ' + title;
                break;
              case '5” x 3”':
                break;
              case '6” x 2”':
                break;
              case '6” x 3”':
                break;
              case 'DeadBug DV2':
                break;
              case 'T.Rex Arms AC1 Front':
                break;
            }
            return title;
          },
          fontSize: function (size) {
            let fontSize = null;
            switch (size) {
              case '3” x 2”':
                fontSize = 97.0787;
                break;
              case '3.5” x 2”':
                fontSize = 83;
                break;
              case '4” x 2”':
                fontSize = 73;
                break;
              case '5” x 3”':
                fontSize = 80;
                break;
              case '6” x 2”':
                fontSize = 48.5468;
                break;
              case '6” x 3”':
                fontSize = 48.556;
                break;
              case 'Agilite Plate Carrier':
                fontSize = 60;
                break;
              case 'GearDynamics Plate Carrier':
                fontSize = 40;
                break;
              case 'DeadBug DV2':
                fontSize = 60;
                break;
              case 'T.Rex Arms AC1 Front':
                fontSize = 60;
                break;
            }
            return fontSize;
          },
          secondaryFont: function (size) {
            let fontSize = null;
            switch (size) {
              case '3.5” x 3.5”':
                fontSize = 14;
                break;
              case '3.5” x 4”':
                fontSize = 32;
                break;
              case '3.6” x 5”':
                fontSize = 32;
                break;
              case '4” x 4.5”':
                fontSize = 26;
                break;
              case '4.6” x 6.2”':
                fontSize = 34;
                break;
              case 'Agilite Plate Carrier':
                fontSize = 30;
                break;
              case 'GearDynamics Plate Carrier':
                fontSize = 20;
                break;
            }
            return fontSize;
          },
          flagHeight: function (size) {
            let height = '';
            switch (size) {
              case '3” x 2”':
                height = 'calc(162px/2)';
                break;
              case '3.5” x 2”':
                height = 'calc(131px/2)';
                break;
              case '4” x 2”':
                height = 'calc(135px/2)';
                break;
              case '5” x 3”':
                height = 'calc(135px/2)';
                break;
              case '6” x 2”':
                height = 'calc(119px/2)';
                break;
              case '6” x 3”':
                height = 'calc(135px/2)';
                break;
              case 'Agilite Plate Carrier':
                height = 'calc(97px/2)';
                break;
              case 'GearDynamics Plate Carrier':
                height = 'calc(67px/2)';
                break;
              case 'DeadBug DV2':
                height = 'calc(110px/2)';
                break;
              case 'T.Rex Arms AC1 Front':
                height = 'calc(135px/2)';
                break;
            }
            return height;
          },
          textHeight: function (size) {
            let textHeight = '';
            switch (size) {
              case '3.5” x 3.5”':
                textHeight = '43.5px';
                break;
              case '3.5” x 4”':
                textHeight = '69.59px';
                break;
              case '3.6” x 5”':
                textHeight = '69.59px';
                break;
              case '4” x 4.5”':
                textHeight = '69.59px';
                break;
              case '4.6” x 6.2”':
                textHeight = '59.15px';
                break;
            }
            return textHeight;
          },
        },
        nameTape: {
          title: function (size) {
            let title = 'Name Tape';
            switch (size) {
              case '3.5” Ranger Tab':
                title = '';
                break;
              case 'T.Rex Arms AC1 Back Panel':
                break;
              case 'T.Rex Arms AC1 Front':
                title = 'Name Plate';
                break;
              case 'T.Rex Arms AC1':
                break;
              case '5.11 Tac Tec Carrier':
                break;
              case '5.11 Tac Tec Carrier Trainer':
                break;
              case '3” x 1”':
                break;
              case '4” x 1”':
                break;
              case '4” x 1.5”':
                break;
              case '5” x 1”':
                break;
              case '5” x 1.5”':
                break;
              case '6” x 2”':
                break;
              case '8” x 2”':
                break;
              case '8” x 3”':
                break;
              case '8” x 4”':
                break;
              case '9” x 3”':
                break;
              case '10” x 2”':
                break;
              case '11” x 3”':
                break;
              case '12” x 4”':
                break;
            }
            return title;
          },
          fontSize: function (size) {
            let fontSize = null;
            switch (size) {
              case '3.5” Ranger Tab':
                fontSize = 35;
                break;
              case 'T.Rex Arms AC1 Back Panel':
                fontSize = 40;
                break;
              case 'T.Rex Arms AC1 Front':
                fontSize = 50;
                break;
              case 'T.Rex Arms AC1':
                fontSize = 32;
                break;
              case '5.11 Tac Tec Carrier':
                fontSize = 34;
                break;
              case '5.11 Tac Tec Carrier Trainer':
                fontSize = 32;
                break;
              case '3” x 1”':
                fontSize = 40;
                break;
              case '4” x 1”':
                fontSize = 40;
                break;
              case '4” x 1.5”':
                fontSize = 47;
                break;
              case '5” x 1”':
                fontSize = 40;
                break;
              case '5” x 1.5”':
                fontSize = 47;
                break;
              case '6” x 2”':
                fontSize = 47;
                break;
              case '8” x 2”':
                fontSize = 28.3729;
                break;
              case '8” x 3”':
                fontSize = 43.6253;
                break;
              case '8” x 4”':
                fontSize = 46;
                break;
              case '9” x 3”':
                fontSize = 34;
                break;
              case '10” x 2”':
                fontSize = 40;
                break;
              case '11” x 3”':
                fontSize = 30;
                break;
              case '12” x 4”':
                fontSize = 29;
                break;
            }
            //      console.log(fontSize);
            return fontSize;
          },
          flagHeight: function (size) {
            let flagHeight = '';
            switch (size) {
              case 'T.Rex Arms AC1':
                flagHeight = 'calc(calc(55.63px/80)*47)';
                break;
              case '5.11 Tac Tec Carrier':
                flagHeight = '35px';
                break;
              case '5.11 Tac Tec Carrier Trainer':
                flagHeight = '30px';
                break;
              case '4” x 1”':
                flagHeight = 'calc(calc(86.66px/80)*47)';
                break;
              case '5” x 1”':
                flagHeight = 'calc(calc(68.22px/80)*47)';
                break;
            }
            return flagHeight;
          },
          textHeight: function (size) {
            let textHeight = '';
            switch (size) {
              case '3.5” x 3.5”':
                textHeight = '43.5px';
                break;
              case '3.5” x 4”':
                textHeight = '69.59px';
                break;
              case '3.6” x 5”':
                textHeight = '69.59px';
                break;
              case '4” x 4.5”':
                textHeight = '69.59px';
                break;
              case '4.6” x 6.2”':
                textHeight = '59.15px';
                break;
            }
            return textHeight;
          },
        },
        medicalPatch: {
          title: function (size) {
            let title = '';
            switch (size) {
              case '1” x 1”':
                title = 'Cats Eye';
                break;
              case '2” x 2”':
                title = 'Medical Patch';
                break;
              case '3.5” x 2”':
                title = 'Medical ID Panel';
                break;
              case '3.5” Hexagonal':
                title = 'Medical Patch';
                break;
            }
            return title;
          },
          fontSize: function (size) {
            let fontSize = null;
            //        console.log(size);
            switch (size) {
              case '3.5” x 2”':
                fontSize = 47;
                break;
              case '3.5” Hexagonal':
                fontSize = 38;
                break;
            }
            //    console.log(fontSize);
            return fontSize;
          },
        },
        flag: {
          title: function (size) {
            let title = 'Lazer Cut Flag';
            // switch (size) {
            //   case '5.11 Tac Tec Carrier':
            //     break;
            //   case '5.11 Tac Tec Carrier Trainer':
            //     break;
            //   case '3” x 1”':
            //     break;
            //   case '4” x 1”':
            //     break;
            //   case '4” x 1.5”':
            //     break;
            //   case '5” x 1”':
            //     break;
            //   case '5” x 1.5”':
            //     break;
            //   case '6” x 2”':
            //     break;
            //   case '8” x 2”':
            //     break;
            //   case '8” x 3”':
            //     break;
            //   case '8” x 4”':
            //     break;
            //   case '9” x 3”':
            //     break;
            //   case '10” x 2”':
            //     break;
            //   case '11” x 3”':
            //     break;
            //   case '12” x 4”':
            //     break;
            // }
            return title;
          },
          flagHeight: function (size) {
            let height = '';
            switch (size) {
              case '3” x 2”':
                height = '21px 20px';
                break;
              case '3.5” x 2”':
                height = '20px';
                break;
              case '5” x 3”':
                height = '17px 20px';
                break;
              case '6” x 3”':
                height = '15px 20px';
                break;
              case 'T.Rex Arms AC1 Front':
                //     height = '17px 20px';
                break;
            }
            return height;
          },
        },
        lightSaber: {
          title: function (size) {
            let title = 'Light Saber';
            // switch (size) {
            //   case '5.11 Tac Tec Carrier':
            //     break;
            //   case '5.11 Tac Tec Carrier Trainer':
            //     break;
            //   case '3” x 1”':
            //     break;
            //   case '4” x 1”':
            //     break;
            //   case '4” x 1.5”':
            //     break;
            //   case '5” x 1”':
            //     break;
            //   case '5” x 1.5”':
            //     break;
            //   case '6” x 2”':
            //     break;
            //   case '8” x 2”':
            //     break;
            //   case '8” x 3”':
            //     break;
            //   case '8” x 4”':
            //     break;
            //   case '9” x 3”':
            //     break;
            //   case '10” x 2”':
            //     break;
            //   case '11” x 3”':
            //     break;
            //   case '12” x 4”':
            //     break;
            // }
            return title;
          },
        },
        customPatch: {
          title: function (size) {
            let title = 'Custom Printed Patch';
            // switch (size) {
            //   case '5.11 Tac Tec Carrier':
            //     break;
            //   case '5.11 Tac Tec Carrier Trainer':
            //     break;
            //   case '3” x 1”':
            //     break;
            //   case '4” x 1”':
            //     break;
            //   case '4” x 1.5”':
            //     break;
            //   case '5” x 1”':
            //     break;
            //   case '5” x 1.5”':
            //     break;
            //   case '6” x 2”':
            //     break;
            //   case '8” x 2”':
            //     break;
            //   case '8” x 3”':
            //     break;
            //   case '8” x 4”':
            //     break;
            //   case '9” x 3”':
            //     break;
            //   case '10” x 2”':
            //     break;
            //   case '11” x 3”':
            //     break;
            //   case '12” x 4”':
            //     break;
            // }
            return title;

          },
          uploadInfo: function (size) {
            let uploadInfo = '';
            let ratio = '';
            let pixels = '';
            let dimensions = size.split(' x ');
            let width = parseFloat(parseFloat(dimensions[0]).toFixed(2));
            let height = parseFloat(parseFloat(dimensions[1]).toFixed(2));
            //     console.log(width);
            pixels = (width * 500) + 'x' + (height * 500);
            ratio = width + ':' + height;
            uploadInfo = ratio + ', ' + pixels + ' px';
            // console.log(ratio);
            // console.log(uploadInfo);
            return uploadInfo;
          },
        },
        jacketPanel: {
          title: function (size) {
            let title = '';
            switch (size) {
              case '3.5” x 3.5”':
                title = 'Arc’teryx';
                break;
              case '3.5” x 4”':
                title = 'Defensive Mechanisms';
                break;
              case '3.5” x 4.25”':
                title = 'Condor';
                break;
              case '3.6” x 5”':
                title = 'Tad';
                break;
              case '4” x 4.5”':
                title = 'Massif';
                break;
              case '4.6” x 6.2”':
                title = 'Hazard';
                break;
            }
            return title + ' Jacket Panel';
          },
          fontSize: function (size) {
            let fontSize = null;
            switch (size) {
              case '3.5” x 3.5”':
                fontSize = 50;
                break;
              case '3.5” x 4”':
                fontSize = 80;
                break;
              case '3.5” x 4.25”':
                fontSize = 80;
                break;
              case '3.6” x 5”':
                fontSize = 80;
                break;
              case '4” x 4.5”':
                fontSize = 80;
                break;
              case '4.6” x 6.2”':
                fontSize = 68;
                break;
            }
            return fontSize;
          },
          secondaryFont: function (size) {
            let fontSize = null;
            switch (size) {
              case '3.5” x 3.5”':
                fontSize = 14;
                break;
              case '3.5” x 4”':
                fontSize = 32;
                break;
              case '3.5” x 4.25”':
                fontSize = 32;
                break;
              case '3.6” x 5”':
                fontSize = 32;
                break;
              case '4” x 4.5”':
                fontSize = 26;
                break;
              case '4.6” x 6.2”':
                fontSize = 34;
                break;
            }
            return fontSize;
          },
          flagHeight: function (size) {
            let flagHeight = '';
            switch (size) {
              case '3.5” x 3.5”':
                flagHeight = 'calc(168px/2)';
                break;
              case '3.5” x 4”':
                flagHeight = 'calc(250px/2)';
                break;
              case '3.5” x 4.25”':
                flagHeight = 'calc(250px/2)';
                break;
              case '3.6” x 5”':
                flagHeight = 'calc(240px/2)';
                break;
              case '4” x 4.5”':
                flagHeight = 'calc(258px/2)';
                break;
              case '4.6” x 6.2”':
                flagHeight = 'calc(260px/2)';
                break;
            }
            return flagHeight;
          },
          textHeight: function (size) {
            let textHeight = '';
            switch (size) {
              case '3.5” x 3.5”':
                textHeight = '43.5px';
                break;
              case '3.5” x 4”':
                textHeight = '69.59px';
                break;
              case '3.6” x 5”':
                textHeight = '69.59px';
                break;
              case '4” x 4.5”':
                textHeight = '69.59px';
                break;
              case '4.6” x 6.2”':
                textHeight = '59.15px';
                break;
            }
            return textHeight;
          },
        },
        divisionJacketPanel: {
          title: function (size) {
            let title = 'Division Jacket Panel';
            // switch (size) {
            //   case '3.5” x 3.5”':
            //     title = 'Arc’teryx';
            //     break;
            //   case '3.5” x 4”':
            //     title = 'Condor';
            //     break;
            //   case '3.6” x 5”':
            //     title = 'Tad';
            //     break;
            //   case '4” x 4.5”':
            //     title = 'Massif';
            //     break;
            //   case '4.6” x 6.2”':
            //     title = 'Hazard';
            //     break;
            // }
            return title;
          },
          fontSize: function (size) {
            let fontSize = null;
            switch (size) {
              case '3.5” x 4”':
                fontSize = 40;
                break;
            }
            return fontSize;
          },
          secondaryFont: function (size) {
            let fontSize = null;
            switch (size) {
              case '3.5” x 3.5”':
                fontSize = 14;
                break;
              case '3.5” x 4”':
                fontSize = 32;
                break;
              case '3.6” x 5”':
                fontSize = 32;
                break;
              case '4” x 4.5”':
                fontSize = 26;
                break;
              case '4.6” x 6.2”':
                fontSize = 34;
                break;
            }
            return fontSize;
          },
          flagHeight: function (size) {
            let flagHeight = '';
            switch (size) {
              case '3.5” x 3.5”':
                flagHeight = 'calc(168px/2)';
                break;
              case '3.5” x 4”':
                flagHeight = 'calc(250px/2)';
                break;
              case '3.6” x 5”':
                flagHeight = 'calc(240px/2)';
                break;
              case '4” x 4.5”':
                flagHeight = 'calc(258px/2)';
                break;
              case '4.6” x 6.2”':
                flagHeight = 'calc(260px/2)';
                break;
            }
            return flagHeight;
          },
          textHeight: function (size) {
            let textHeight = '';
            switch (size) {
              case '3.5” x 3.5”':
                textHeight = '43.5px';
                break;
              case '3.5” x 4”':
                textHeight = '69.59px';
                break;
              case '3.6” x 5”':
                textHeight = '69.59px';
                break;
              case '4” x 4.5”':
                textHeight = '69.59px';
                break;
              case '4.6” x 6.2”':
                textHeight = '59.15px';
                break;
            }
            return textHeight;
          },
        },
        cover: {
          title: function (size) {
            let title = 'Cover Panel';
            switch (size) {
              case 'T.Rex Arms AC1 Back Panel':
                break;
              case 'T.Rex Arms AC1 Front':
                break;
              case 'T.Rex Arms AC1':
                title = 'Name Tape ' + title;
                break;
              case '5.11 Tac Tec Carrier':
                break;
              case '5.11 Tac Tec Carrier Trainer':
                break;
              case '3” x 1”':
                break;
              case '4” x 1”':
                break;
              case '4” x 1.5”':
                break;
              case '5” x 1”':
                break;
              case '5” x 1.5”':
                break;
              case '6” x 2”':
                break;
              case '8” x 2”':
                break;
              case '8” x 3”':
                break;
              case '8” x 4”':
                break;
              case '9” x 3”':
                break;
              case '10” x 2”':
                break;
              case '11” x 3”':
                break;
              case '12” x 4”':
                break;
            }
            return title;
          },
        },
        callSign: {
          title: function (size) {
            let title = 'Call Sign One Sided';
            switch (size) {
              case '3” x 2”':
                break;
              case '3.5” x 2”':
                break;
              case '4” x 2”':
                title = 'Name Plate';
                break;
            }
            return title;
          },
          fontSize: function (size) {
            let fontSize = null;
            switch (size) {
              case '3” x 2”':
                fontSize = 100;
                break;
              case '3.5” x 2”':
                fontSize = 100;
                break;
              case '4” x 2”':
                fontSize = 80;
                break;
            }
            console.log(fontSize);
            return fontSize;
          },
          texture: function (bgColor) {
            const name = bgColor.name;
            const textures = [
              {
                name: 'Black',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/black.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Black')).img,
              },
              {
                name: 'Coyote Brown',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/coyote-brown.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'Tan 499',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tan499.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'OD Green',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/od-green.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('OD Green')).img,
              },
              {
                name: 'Ranger Green',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/ranger-green.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('OD Green')).img,
              },
              {
                name: 'Wolf Grey',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/wolf-grey.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Wolf Grey')).img,
              },
              {
                name: 'Navy Blue',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/navy-blue.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Blue')).img,
              },
              {
                name: 'Black Blue',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/blue-black.jpg?v=1678555190',
                texture: builderObj.data.textures.find(value => value.name.includes('Blue')).img,
              },
              {
                name: 'Blaze Orange',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/blaze-orange.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Orange')).img,
              },
              {
                name: 'Red',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/red.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Red')).img,
              },
              {
                name: 'Lime Green',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/lime-green.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Black')).img,
              },
              {
                name: 'Flourescent Pink',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pink.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Black')).img,
              },
              {
                name: 'Safety Yellow',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/saftey-yellow.jpg?v=1678555190',
                texture: builderObj.data.textures.find(value => value.name.includes('Safety Yellow')).img,
              },
              {
                name: 'Purple',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/purple.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Black')).img,
              },
              {
                name: 'Multicam',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'Multicam Black',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-black.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Black')).img,
              },
              {
                name: 'Multicam Tropic',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-tropic.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('OD Green')).img,
              },
              {
                name: 'Multicam Arid',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-arid.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'Multicam Alpine',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-alpine.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('White')).img,
              },
              {
                name: 'Desert MARPAT',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/desert-marpat.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'MARPAT',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/marpat.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'M05 Woodland',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/marpat.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('OD Green')).img,
              },
              {
                name: 'M81 Woodland',
                img: 'https://cdn-zeptoapps.com/product-personalizer/images/patchpanel.myshopify.com/Small-RF-M81-Woodland.jpg?v=12330',
                texture: builderObj.data.textures.find(value => value.name.includes('OD Green')).img,
              },
              {
                name: 'Kryptek Typhon',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/typhon.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Black')).img,
              },
              {
                name: 'Kryptek Mandrake',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/mandrake.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('OD Green')).img,
              },
              {
                name: 'Flourescent Splatter with Hot Pink thread',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/splatter.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Black')).img,
              },
              {
                name: 'Flecktarn',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flactarn.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'WZ93 PANTERA',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/wz93.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'U.S. Desert Night Camo',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/desert-night.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('OD Green')).img,
              },
              {
                name: 'CADPAT AR',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/cadpat-ar.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'CADPAT TW',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/cadpat-tw.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('OD Green')).img,
              },
              {
                name: 'AOR1',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/aor1.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'AOR2',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/aor2.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'A-TACS IX',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-ix.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'A-TACS UCON',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-ucon.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'A-TACS LE',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-le.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Black')).img,
              },
              {
                name: 'A-TACS GHOST',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-ghost.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Black')).img,
              },
              {
                name: 'A-TACS FG',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-fg.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('OD Green')).img,
              },
              {
                name: 'PenCott GreenZone',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-greenzone.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('OD Green')).img,
              },
              {
                name: 'PenCott BadLands',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-badlands.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'PenCott Sandstorm',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-sandstorm.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Coyote Brown')).img,
              },
              {
                name: 'PenCott SnowDrift',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-snowdrift.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('White')).img,
              },
              {
                name: 'Blue Plaid',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/blue-plaid.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Blue')).img,
              },
              {
                name: 'FlockCam with Orange thread',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flockam-with-orange-thread.jpg?v=1678555191',
                texture: null,
              },
              {
                name: 'Tadpole Tigerstripe',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tadpole-tigerstripe.jpg?v=1678555191',
                texture: null,
              },
              {
                name: '6 Colour - Chocolate Chip',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/chocolate-chip.jpg?v=1678555191'
              },
              {
                name: 'WWII FrogSkin Brownside',
                img: 'https://cdn-zeptoapps.com/product-personalizer/images/patchpanel.myshopify.com/Small-RF-WWII-FrogSkin-Brownside.jpg?v=12330',
                texture: null,
              },
              {
                name: 'WWII FrogSkin Greenside',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/wwii-frogskin.jpg?v=1678555191',
                texture: null,
              },
              {
                name: 'Tie Dye (Limited Time)',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tie-dye.jpg?v=1678555191',
                texture: null,
              },
              {
                name: 'Tropical (Limited Time)',
                img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tropical.jpg?v=1678555191',
                texture: builderObj.data.textures.find(value => value.name.includes('Black')).img,
              }
            ];
            return textures.find(value => value.name == name).texture;
          }
        },
      },
      upsells: function (product, size) {
        const patchType = this.type(product);
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
          "sides": {
            "name": "Add-on - Sides",
            "variants": [
              {
                "id": "gid://shopify/ProductVariant/43119045738654",
                "value": "10"
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
                "id": "gid://shopify/ProductVariant/43013695078558",
                "value": "11"
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
      cartSize: function (cart) {
        let size = cart?.totalQuantity || 0;
        //   console.log(cart);

        // filter upsell objects if there is a cart
        //   loop through cart.lines.edges
        // console.log(cart.lines);
        if (size) {
          cart.lines.edges.forEach(({ node: { quantity, attributes } }) => {
            if (attributes.some(({ key }) => key === 'productID')) {
              size -= quantity;
            }
          });
        }
        return size;
      },
    },
    set: {
      idPanel: {
        patch: function (size, setStyle) {
          switch (size) {
            case 'DeadBug DV2':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '35px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-deadbug.png?v=1702040296)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-deadbug.png?v=1702040296)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case 'Agilite Plate Carrier':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '5px 46px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-agilite.png?v=1702040296)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-agilite.png?v=1702040296)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case "GearDynamics Plate Carrier":
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '5px 47px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-gear-dynamics.png?v=1702040296)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-gear-dynamics.png?v=1702040296)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case 'T.Rex Arms AC1 Front':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '10px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-front.png?v=1702437378)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-front.png?v=1702437378)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            default:
              setStyle(prevStyle => ({
                ...prevStyle, padding: '10px',
                WebkitMaskImage: 'none',
                WebkitMaskSize: 'contain',
                maskImage: 'none',
                maskSize: 'contain',
              }));
              break;
          }
        },
      },
      nameTape: {
        patch: function (size, setStyle) {
          switch (size) {
            case '3.5” Ranger Tab':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '5px 20px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ranger.png?v=1702437378)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ranger.png?v=1702437378)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case 'T.Rex Arms AC1':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '5px 20px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-nametape.png?v=1702437378)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-nametape.png?v=1702437378)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case 'T.Rex Arms AC1 Back Panel':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '15px 40px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-back.png?v=1702437378)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-back.png?v=1702437378)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case 'T.Rex Arms AC1 Front':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '15px 40px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-front.png?v=1702437378)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-front.png?v=1702437378)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case '5.11 Tac Tec Carrier':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '9px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-tac-tec.png?v=1702040296)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-tac-tec.png?v=1702040296)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case '5.11 Tac Tec Carrier Trainer':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '9px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-tac-tec-trainer.png?v=1702040296)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-tac-tec-trainer.png?v=1702040296)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            default:
              setStyle(prevStyle => ({
                ...prevStyle, padding: '10px',
                WebkitMaskImage: 'none',
                WebkitMaskSize: 'contain',
                maskImage: 'none',
                maskSize: 'contain',
              }));
              break;
          }
        },
      },
      flag: {
        patch: function (size, setStyle) {
          switch (size) {
            case 'T.Rex Arms AC1 Front':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '15px 40px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-front.png?v=1702437378)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-front.png?v=1702437378)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            default:
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '17px 24px',
                WebkitMaskImage: 'none',
                WebkitMaskSize: 'contain',
                maskImage: 'none',
                maskSize: 'contain',
              }));
              break;
          }
        },
      },
      medical: {
        patch: function (size, setStyle) {
          switch (size) {
            case '3.5” Hexagonal':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '10px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-hex.png?v=1702437378)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-hex.png?v=1702437378)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            default:
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '10px',
                WebkitMaskImage: 'none',
                WebkitMaskSize: 'contain',
                maskImage: 'none',
                maskSize: 'contain',
              }));
              break;
          }
        },
      },
      jacketPanel: {
        patch: function (size, setStyle) {
          switch (size) {
            case '3.5” x 3.5”':
              setStyle(prevStyle => ({
                ...prevStyle, padding: '10px 16px',
                WebkitMaskImage: 'none',
                maskImage: 'none',
              }));
              break;
            case '3.5” x 4”':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '20px',
                WebkitMaskImage: 'none',
                maskImage: 'none',
              }));
              break;
            case '3.6” x 5”':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '50px 25px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-tad.png?v=1702040296)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-tad.png?v=1702040296)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case '4” x 4.5”':
              setStyle(prevStyle => ({
                ...prevStyle, padding: '24px 20px',
                WebkitMaskImage: 'none',
                maskImage: 'none',
              }));
              break;
            case '4.6” x 6.2”':
              setStyle(prevStyle => ({
                ...prevStyle, padding: '30px 20px',
                WebkitMaskImage: 'none',
                maskImage: 'none',
              }));
              break;
          }
        },
      },
      cover: {
        patch: function (size, setStyle) {
          //  console.log(size);
          switch (size) {
            case 'T.Rex Arms AC1':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '5px 20px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-nametape.png?v=1702437378)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-nametape.png?v=1702437378)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case 'T.Rex Arms AC1 Back Panel':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '15px 40px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-back.png?v=1702437378)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-back.png?v=1702437378)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case 'T.Rex Arms AC1 Front':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '15px 40px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-front.png?v=1702437378)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-ac1-front.png?v=1702437378)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case '5.11 Tac Tec Carrier':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '9px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-tac-tec.png?v=1702040296)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-tac-tec.png?v=1702040296)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            case '5.11 Tac Tec Carrier Trainer':
              setStyle(prevStyle => ({
                ...prevStyle,
                padding: '9px',
                WebkitMaskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-tac-tec-trainer.png?v=1702040296)',
                WebkitMaskSize: 'cover',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://cdn.shopify.com/s/files/1/2242/5805/files/mask-tac-tec-trainer.png?v=1702040296)',
                maskSize: 'cover',
                maskPosition: 'center',
              }));
              break;
            default:
              setStyle(prevStyle => ({
                ...prevStyle, padding: '10px',
                WebkitMaskImage: 'none',
                WebkitMaskSize: 'contain',
                maskImage: 'none',
                maskSize: 'contain',
              }));
              break;
          }
        },
      },
    },
    update: {
      fontSize: function (containerRef, setFontStyle, formData, setFontWrapperStyle) {
        const textLines = formData.text.primary.lines;

        const currentLines = formData.text.primary.text.split("\n").length;
        const container = containerRef.current;

        const textElement = container.querySelector('#main-text');
        // console.log(containerRef);
        // console.log(textElement)
        // // Get the container width and height, text width and height, and current font size
        const containerWidth = container?.offsetWidth || 0;
        const containerHeight = container.offsetHeight + 10;
        let textWidth = textElement?.offsetWidth || 0;

        console.log(textWidth);
        console.log(containerWidth);

        // if(textWidth > containerWidth) {
        //   textWidth = containerWidth;
        // }
        const textHeight = textElement?.offsetHeight || 0;
        let currentFontSize = 0;
        console.log(!builderObj.helpers.is.nameTape.ranger(formData))
        if (formData.type.toLowerCase() !== 'medical patch' && !builderObj.helpers.is.nameTape.ranger(formData)) {
          console.log(currentFontSize);
          currentFontSize = parseFloat(getComputedStyle(textElement).fontSize);
          console.log(currentFontSize);
        }
        console.log(currentFontSize);

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

        // if (formData.type.toLowerCase() == 'jacket panel') {
        //   maxFontSize = 45;
        // }
        if (builderObj.helpers.is.medical.hex(formData)) {
          maxFontSize = 38;
          let textLength = formData.text.primary.text.length;

          if (textLength >= 4 && textLength <= 8) {
            maxFontSize = 38;
          } else if (textLength >= 9 && textLength <= 10) {
            maxFontSize = 32;
          } else if (textLength >= 11 && textLength <= 13) {
            maxFontSize = 28;
          } else if (textLength >= 14 && textLength <= 16) {
            maxFontSize = 24;
          }
        }
        if (newFontSize > maxFontSize) {
          newFontSize = maxFontSize;
        }
        switch (formData.type.toLowerCase()) {
          case 'id panel':
            if (formData.text.primary.text.length == 0) {
              newFontSize = builderObj.helpers.get.patch.idPanel.fontSize(formData.size.current);
            }
            break;
          // @@ - This save spot is for setting starting font
          case 'name tape':
            if (formData.text.primary.text.length == 0) {
              if (formData.img.enabled) {
                if (builderObj.helpers.is.nameTape.ac1NameTape(formData)) {
                  newFontSize = (builderObj.helpers.get.patch.nameTape.fontSize(formData.size.current)) / 1.5;
                } else {
                  newFontSize = (builderObj.helpers.get.patch.nameTape.fontSize(formData.size.current)) / 1.35;
                }
              } else {
                newFontSize = builderObj.helpers.get.patch.nameTape.fontSize(formData.size.current);
              }
            }
            break;
          case 'medical patch':
            if (formData.text.primary.text.length == 0) {
              newFontSize = builderObj.helpers.get.patch.medicalPatch.fontSize(formData.size.current);
            }
            if (builderObj.helpers.is.medical.hex(formData)) {

              // newFontSize = builderObj.helpers.get.patch.medicalPatch.fontSize(formData.size.current);
            }
            break;
          case 'jacket panel':
            if (formData.text.primary.text.length == 0) {

              newFontSize = builderObj.helpers.get.patch.jacketPanel.fontSize(formData.size.current);
            }
            break;
          case 'division jacket panel':
            if (formData.text.primary.text.length == 0) {
              newFontSize = builderObj.helpers.get.patch.divisionJacketPanel.fontSize(formData.size.current);
            }
            break;
        }


        // Calculate the new margin top based on the font size
        let marginTop = null;
        if (textLines > 1) {
          marginTop = (newFontSize) / 7;
          if (textLines == 3) {
            newFontSize = newFontSize * .9;
          } else {
            newFontSize = newFontSize * .95;
          }
          let newLineHeight = newFontSize * .87;
          setFontStyle(prevStyle => ({ ...prevStyle, fontSize: `${newFontSize}px`, lineHeight: `${newLineHeight}px`, marginTop: `${marginTop}px` }));

        } else {
          if (formData.type.toLowerCase() == 'jacket panel') {
            let textHeight = builderObj.helpers.get.patch.jacketPanel.textHeight(formData.size.current);
            marginTop = 0;
            let newLineHeight = newFontSize * .87;
            setFontStyle(prevStyle => ({ ...prevStyle, fontSize: `${newFontSize}px`, lineHeight: `${newLineHeight}px`, marginTop: `${marginTop}px` }));
            setFontWrapperStyle(prevStyle => ({ ...prevStyle, minHeight: textHeight }));
          } else if (builderObj.helpers.is.medical.hex(formData)) {

          } else {
            marginTop = builderObj.helpers.is.idPanel.deadBug(formData) || builderObj.helpers.is.idPanel.ac1Front(formData) ? 0 : newFontSize / 9;
            setFontStyle(prevStyle => ({ ...prevStyle, fontSize: `${newFontSize}px`, lineHeight: `${newFontSize}px`, marginTop: `${marginTop}px` }));
          }
        }
      },
      fontSizeAdditional: function (containerSecondaryRef, setFontSecondaryStyle, formData) {
        // container
        // textContainer
        // how many lines
        const container = containerSecondaryRef.current;
        //   console.log(container);
        const textElement = container.querySelector('#secondary-text') || container.querySelector('#text2');
        //  console.log(textElement);
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

        //    console.log(newFontSize);

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
          case 'jacket panel':
            newFontSize = builderObj.helpers.get.patch.jacketPanel.secondaryFont(formData.size.current);
            break;
        }

        let newLineHeight = newFontSize * .8621;



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
      formElement: function (element, steps, trigger) {
        const foundElement = steps.some(step => {
          return step.input.some(input => {
            return input.id === element.id;
          });
        });

        const index = steps.findIndex(item => item.input.some(input => input.id === element.id));
        if (index === -1) {
          return; // Element not found in steps
        }

        const i = steps[index].input.findIndex(item => item.id === element.id);
        const step = steps[index];

        if (trigger) {
          addElement(element, step, index);
        } else {
          removeElement(element, step, i);
        }

        function addElement(element, step, index) {
          if (!foundElement) {
            step.input.splice(index, 0, element);
          }
        }

        function removeElement(element, step, i) {
          if (foundElement) {
            step.input.splice(i, 1);
          }
        }
      },
      // formElement: function (element, steps, trigger) {
      //   console.log(element);
      //   console.log(trigger);
      //   console.log(steps);
      //   const foundElement = steps.some(step => {
      //     return step.input.some(input => {
      //       return input.id === element.id;
      //     });
      //   });

      //   //
      //   const index = steps.findIndex(item => item.input.some(input => input.id === element.id));
      //   console.log(index);
      //   const i = steps[index].input.findIndex(item => item.id === element.id);
      //   const step = steps[index];

      //   console.log(index);
      //   console.log(i);
      //   console.log(steps);

      //   console.log(steps[index].input[i]);

      //   if (trigger) {
      //     addElement(element, step, index);
      //   } else {
      //     removeElement(element, step, index);
      //   }

      //   function addElement(element, step, index) {

      //     if(!foundElement) {
      //       step.input.splice(index, 0, element);
      //     } else {

      //     }
      //     // check if element already exists, if not add element
      //     // if (foundElement) {
      //     //   //    console.log('element already exists');
      //     // } else {
      //     //   if (element.id === 'glowBorder') {
      //     //     //      console.log("ok");
      //     //     let lastElement = steps[steps.length - 1];
      //     //     //     console.log(lastElement);
      //     //     lastElement.input.unshift(element);
      //     //     //     console.log(steps);
      //     //   }
      //     // }
      //   }

      //   function removeElement(element, step, index) {
      //     console.log(element);
      //     console.log(step);
      //     console.log(index);
      //     // check if element already exists, if so remove element
      //     if(foundElement) {
      //       console.log(steps);
      //       step.input.splice(element, 1);
      //       console.log(steps);
      //     } else {

      //     }
      //     // if (foundElement) {
      //     //   console.log(foundElement);
      //     //   if (element.id === 'glowBorder') {
      //     //     //   console.log("ok");
      //     //     let lastElement = steps[steps.length - 1];
      //     //     //    console.log(lastElement);
      //     //     lastElement.input.shift();
      //     //     //   console.log(steps);
      //     //   }
      //     // } else {
      //     // }
      //   }
      // },
      addOn: {
        add: function (formData) {

          // get data of upsell objects
          const upsells = formData.price.upsells;
          const statusObj = formData.upsells;
          // arr to store addon project objects for
          let addOnArr = [];

          console.log(upsells);
          // console.log(statusObj);
          //    console.log(upsells.size);
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
              case 'sides':
                type = 'sides';
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

            console.log(addOnObj());
            console.log(addOn);
            console.log(handle);
            console.log(value);


            if (!addOn) {
              return null;
            }

            let variant = addOn.variants.find(v => parseInt(v.value) === value);
            //    console.log(variant);
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

          //      console.log(arr);

          return arr;
        },
      },
      params: {
        update: {
          color: function (color, type) {
            //  console.log(type);
            const colorOptions = builderObj.data[type + 'Colors'];
            //  console.log(colorOptions);
            let colorObj = {};
            if (type == 'font') {
              colorObj = colorOptions.find(obj => obj.name.toLowerCase().includes(color.toLowerCase()));
            } else {
              //  console.log(color);
              // colorObj = colorOptions.find(obj => obj.name.toLowerCase().includes(color.toLowerCase()));
              colorObj = colorOptions.find(obj => obj.name.toLowerCase() == color.toLowerCase());
            }
            // console.log(colorOptions);
            // console.log(colorObj);
            return colorObj;
          },
          saber: function (type) {
            const saberOptions = builderObj.data.saberOptions;
            const saberObj = saberOptions.find(obj => obj.name.toLowerCase().includes(type.toLowerCase()));

            return saberObj;
          },
          flag: function (flag, params, formData) {
            // go through an array of objects and look for a key that equal to flagtype 
            const flagType = params.find(obj => obj.hasOwnProperty('flagType'))?.flagType || '';
            // console.log(params);
            // console.log(flagType);
            const size = params.find(obj => obj.hasOwnProperty('size'))?.size || false;
            const hivisOptions = builderObj.data.imgs['hi-vis'];
            const laserOptions = builderObj.data.imgs['laser-cut'];
            let flagOptions = [];
            switch (formData.type.toLowerCase()) {
              case 'id panel':
                if (flagType.toLowerCase().indexOf('hivis') > -1) {
                  flagOptions = hivisOptions;
                } else {
                  if (builderObj.helpers.is.mini(formData.type, size || formData.size.current)) {
                    flagOptions = laserOptions['mini-id'];
                  } else {
                    flagOptions = laserOptions['large-id'];
                  }
                }
                break;
              case 'name tape':
                flagOptions = hivisOptions;
                break;
              case 'flag':
                if (size == '3” x 2”' || formData.size.current == '3” x 2”') {
                  flagOptions = laserOptions['3x2'];
                } else if (size == '3.5” x 2”' || formData.size.current == '3.5” x 2”') {
                  flagOptions = laserOptions['3.5x2'];
                } else if (size == '4” x 2”' || formData.size.current == '4” x 2”') {
                  flagOptions = laserOptions['4x2'];
                } else if (size == '5” x 3”' || formData.size.current == '5” x 3”') {
                  flagOptions = laserOptions['5x3'];
                } else if (size == '6” x 2”' || formData.size.current == '6” x 2”') {
                  flagOptions = laserOptions['6x2'];
                } else if (size == '6” x 3”' || formData.size.current == '6” x 3”') {
                  flagOptions = laserOptions['6x3'];
                }
                break;
              case 'jacket panel':
                if (flagType.toLowerCase().indexOf('hivis') > -1) {
                  flagOptions = hivisOptions;
                } else {
                  flagOptions = laserOptions['large-id'];
                }
                break;
            }
            // console.log(flagOptions);
            const flagObj = flagOptions.find(obj => obj.name.toLowerCase().includes(flag.toLowerCase()));
            return flagObj;

            // console.log(flagOptions);


            // console.log(imgObj);
            // console.log(flag);
            // console.log(params);
            // console.log(flagType);
            //const flagOptions = builderObj.data.flagOptions;
            // const flagObj = flagOptions.find(obj => obj.name.toLowerCase().includes(type.toLowerCase()));
            // return flagObj;
            function hivisInit(flag, flagOptions) {
              const flagObj = flagOptions.find(obj => obj.name.toLowerCase().includes(flag.toLowerCase()));
              return flagObj;
            }
            function laserInit(flag, laserOptions) {
              const flagObj = laserOptions.find(obj => obj.name.toLowerCase().includes(flag.toLowerCase()));
              return flagObj;
            }

            return imgObj;
          },
          symbol: function (symbol) {
            const symbolOptions = builderObj.data.symbols["medical patch"];
            const symbolObj = symbolOptions.find(obj => obj.name.toLowerCase().includes(symbol.toLowerCase()));

            return symbolObj;
          }
        },
        filter: function (params, attrList, formData) {
          // console.log(params);
          const size = params.find(obj => obj.hasOwnProperty('size'))?.size || false;
          // console.log(attrList);
          // console.log(size);
          switch (formData.type.toLowerCase()) {
            case 'name tape':
              if (size == '4” x 1”' || size == '5” x 1”') {
                attrList.push('flagEnabled');
                attrList.push('flagType');
                attrList.push('flag');
                attrList.push('flagReversed');
              }
              break;
            case 'medical patch':
              if (size == '3.5” x 2”') {
                attrList.push('primary');
              }
              break;
          }
          //   console.log(attrList);
          const filteredArray = params.filter(obj =>
            attrList.some(key => obj.hasOwnProperty(key))
          );
          // console.log(params);
          // console.log(attrList);
          // console.log(filteredArray);

          return filteredArray;
        },
        updateFormData: function (formData, params, product) {
          let filteredParams = this.filter(this.paramsStringToObj(params), this.paramsList(formData), formData);
          formData = formData;
          // console.log(filteredParams);
          filteredParams.forEach(obj => {
            const key = Object.keys(obj)[0];
            const value = obj[key];
            //  console.log(key);
            switch (key.toLowerCase()) {
              case 'size':
                formData.size.current = value;
                const patchType = builderObj.helpers.get.type(product);
                const obj = patchType.config;
                let objSize = {};
                // console.log(obj);
                // console.log(value == '5” x 3”');
                // obj.sizes.forEach(obj => {
                //   console.log(obj);
                //   console.log(obj.size);
                //   if(obj.size == value) {
                //     objSize = obj;
                //   }

                // });
                objSize = obj.sizes.find(obj => obj.size === value);
                // let objSizes = obj.sizes.find(value => value.size == value);
                //  console.log(objSize);
                //  console.log(formData.price.upsells);
                //  console.log(objSize.upsells)
                Object.keys(objSize.upsells).forEach(key => {
                  formData.price.upsells[key] = objSize.upsells[key];
                });

                if (objSize.text.primary) {
                  Object.keys(objSize.text.primary).forEach(key => {
                    formData.text.primary[key] = objSize.text.primary[key];
                  });
                }

                if (objSize.text.secondary) {
                  Object.keys(objSize.text.secondary).forEach(key => {
                    formData.text.secondary[key] = objSize.text.secondary[key];
                  });
                }
                if (objSize.text.third) {
                  Object.keys(objSize.text.third).forEach(key => {
                    formData.text.third[key] = objSize.text.third[key];
                  });
                }
                if (objSize.text.fourth) {
                  Object.keys(objSize.text.fourth).forEach(key => {
                    formData.text.fourth[key] = objSize.text.fourth[key];
                  });
                }
                if (objSize.text.fifth) {
                  Object.keys(objSize.text.fifth).forEach(key => {
                    formData.text.fifth[key] = objSize.text.fifth[key];
                  });
                }
                if (objSize.text.sixth) {
                  Object.keys(objSize.text.sixth).forEach(key => {
                    formData.text.sixth[key] = objSize.text.sixth[key];
                  });
                }
                if (objSize.text.seventh) {
                  Object.keys(objSize.text.seventh).forEach(key => {
                    formData.text.seventh[key] = objSize.text.seventh[key];
                  });
                }

                // console.log(objSize);
                // console.log(formData.price.upsells);
                //formData.price.upsells = objSize.upsells;
                //    console.log(value);
                //    console.log(objSizes);
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
                formData.upsells.proIRFontColor = value.includes('pro ir');
                formData.upsells.reflectiveGlowFontColor = value.startsWith('reflective');
                break;
              case 'bgcolor':
                formData.bgColor = this.update.color(value, 'bg');
                break;
              case 'flagtype':
                //      console.log("ok");
                formData.img.enabled = true;
                if (value.toLowerCase().indexOf('laser') > -1 || value.indexOf('laser') > -1) {
                  formData.img.type = 'Laser Cut Flag';
                } else if (value.toLowerCase().indexOf('hivis') > -1) {
                  formData.img.type = 'HiVis Flag';
                } else { }
                break;
              case 'flagreversed':
                formData.img.reversed = value === 'true' ? true : false;
                break;
              case 'flag':
                //  console.log(value);
                let flagObj = this.update.flag(value, filteredParams, formData);
                //   console.log(flagObj);
                if (formData.img.type == 'Laser Cut Flag') {
                  formData.img.color.mask.name = flagObj.name;
                  formData.img.name = flagObj.name;
                  formData.img.color.mask.img = flagObj.img;
                  formData.img.color.mask.icon = flagObj.icon;
                  formData.img.color.mask.glow = flagObj.glow;
                  formData.upsells.hiVis = false;
                } else {
                  formData.img.name = flagObj.name;
                  formData.img.img = flagObj.img;
                  formData.img.color.mask.icon = flagObj.icon;
                  formData.upsells.hiVis = true;
                }
                break;
              case 'symbol':
                //  console.log(value);
                let symbolObj = this.update.symbol(value);
                //    console.log(symbolObj);
                //   console.log(flagObj);
                formData.img.color.mask.name = symbolObj.name;
                formData.img.name = symbolObj.name;
                formData.img.color.mask.img = symbolObj.img;
                formData.img.color.mask.icon = symbolObj.icon;
                formData.img.color.mask.glow = symbolObj.glow;
                // formData.upsells.hiVis = false;
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
              case 'glowborder':
                (value);
                formData.upsells.glowBorder = value === 'true' ? true : false;
                // formData.upsells.glowBorder = false;
                break;
              default:
                break;
            }
            // console.log(key);
            // console.log(value);
          });
          // console.log(filteredParams);
          // console.log(formData);
          return formData;
        },
        createPatchImg: function () {
          const json = {
            html: "<div class='test'>Hello, world!</div>",
            css: ".test { background-color: green; }"
          };

          const username = "ef103b65-4bb9-4f67-acd6-479499ccf68d";
          const passwored = "ee34894e-ae5f-44eb-81b7-bad40bcf2d68";

          const options = {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + btoa(username + ":" + password)
            }
          }

          fetch('https://hcti.io/v1/image', options)
            .then(res => {
              if (res.ok) {
                return res.json();
              } else {
                return Promise.reject(res.status);
              }
            })
            .then(data => {
              // Image URL is available here
              console.log(data.url)
            })
            .catch(err => console.error(err));
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
                'flagReversed',
                'glowBorder',
              ];
              break;
            case 'name tape':
              paramsList = [
                'size',
                'primary',
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
                'flagReversed',
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
            default:
              break;
          }
          // console.log(paramsList);
          // turn array strings in lowercase and return
          return paramsList.map(str => str);
        },
        paramsStringToObj: function (queryString) {
          const params = new URLSearchParams(queryString);
          const result = [];

          for (const [key, value] of params) {
            const obj = {};
            obj[key] = value;
            result.push(obj);
          }

          //   console.log(result);
          return result;
        },
        generateURLParams: function (formData, setFormData) {
          let params = [];
          switch (formData.type.toLowerCase()) {
            case 'id panel':
              params = [
                { size: formData.size.current },
                { primary: formData.text.primary.text },
                { secondary: formData.text.secondary.text },
                { textColor: formData.text.color.name },
                { bgColor: formData.bgColor.name },
                { flagType: formData.img.type },
                { flag: formData.img.name },
                { flagReversed: formData.img.reversed },
                { glowBorder: formData.upsells.glowBorder },
              ];
              break;
            case 'name tape':
              params = [
                { size: formData.size.current },
                { primary: formData.text.primary.text },
                { textColor: formData.text.color.name },
                { bgColor: formData.bgColor.name },
                { glowBorder: formData.upsells.glowBorder },
              ];
              if (formData.size.current == '4” x 1”' || formData.size.current == '5” x 1”') {
                params.push({ flagType: 'HiVis Flag' });
                // params.push({ flagEnabled : 'true'})
                params.push({ flag: formData.img.name });
                params.push({ flagReversed: formData.img.reversed });
              }
              break;
            case 'flag':
              params = [
                { size: formData.size.current },
                { textColor: formData.text.color.name },
                { bgColor: formData.bgColor.name },
                { flag: formData.img.name },
                { flagReversed: formData.img.reversed },
                { glowBorder: formData.upsells.glowBorder },
              ];
              break;
            case 'light sabers':
              params = [
                { saberType: formData.lightsaber.saberType },
                { bladeColor: formData.lightsaber.blade.name },
                { hiltColor: formData.lightsaber.hilt.name },
                { bgColor: formData.bgColor.name },
              ];
              break;
            case 'medical patch':
              params = [
                { size: formData.size.current },
                { textColor: formData.text.color.name },
                { bgColor: formData.bgColor.name },
                { symbol: formData.img.name },
                { glowBorder: formData.upsells.glowBorder },
              ];
              if (formData.size.current == '3.5” x 2”') {
                params.push({ primary: formData.text.primary.text });
              }
              break;
            case 'jacket panel':
              params = [
                { size: formData.size.current },
                { primary: formData.text.primary.text },
                { secondary: formData.text.secondary.text },
                { third: formData.text.third.text },
                { fourth: formData.text.fourth.text },
                { fifth: formData.text.fifth.text },
                { sixth: formData.text.sixth.text },
                { seventh: formData.text.seventh.text },
                { textColor: formData.text.color.name },
                { bgColor: formData.bgColor.name },
                { flag: formData.img.name },
                { flagReversed: formData.img.reversed },
                { glowBorder: formData.upsells.glowBorder },
              ];
              break;
            case 'division jacket panel':
              params = [
                { size: formData.size.current },
                { primary: formData.text.primary.text },
                { secondary: formData.text.secondary.text },
                { third: formData.text.third.text },
                { textColor: formData.text.color.name },
                { bgColor: formData.bgColor.name },
                { ringColor: formData.img.division.ring.color.name },
              ];
              break;
            default:
              break;
          }
          // console.log(params);
          //   console.log(params.map(obj => Object.keys(obj)[0] + '=' + obj[Object.keys(obj)[0]]).join('&'));
          //     console.log(params.toString());
          // turn array in params strings for url
          setFormData({ ...formData, urlParams: params.map(obj => Object.keys(obj)[0] + '=' + obj[Object.keys(obj)[0]]).join('&') });
          return params.map(obj => Object.keys(obj)[0] + '=' + obj[Object.keys(obj)[0]]).join('&');

        },
        createPreviewImg: function () {
        },
      },
    },
    is: {
      idPanel: {
        deadBug: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'id panel' && size == 'DeadBug DV2') {
            return true;
          } else {
            return false;
          }
        },
        agilite: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'id panel' && size == 'Agilite Plate Carrier') {
            return true;
          } else {
            return false;
          }
        },
        gearDynamics: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'id panel' && size == 'GearDynamics Plate Carrier') {
            return true;
          } else {
            return false;
          }
        },
        ac1Front: function (formData) {
          const type = formData.type;
          const size = formData.size.current;
          if (type.toLowerCase() == 'id panel' && size == 'T.Rex Arms AC1 Front') {
            return true;
          } else {
            return false;
          }
        },
      },
      nameTape: {
        tacTec: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          return type.toLowerCase() == 'name tape' && size == '5.11 Tac Tec Carrier';
        },
        tacTecTrainer: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'name tape' && size == '5.11 Tac Tec Carrier Trainer') {
            return true;
          } else {
            return false;
          }
        },
        ac1NameTape: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'name tape' && size == 'T.Rex Arms AC1') {
            return true;
          } else {
            return false;
          }
        },
        ac1FrontNamePlate: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'name tape' && size == 'T.Rex Arms AC1 Front') {
            return true;
          } else {
            return false;
          }
        },
        ranger: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'name tape' && size == '3.5” Ranger Tab') {
            return true;
          } else {
            return false;
          }
        },
      },
      medical: {
        hex: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          return type.toLowerCase() == 'medical patch' && size == '3.5” Hexagonal';
        },
        med: function (formData) {
          const isMedPatch = builderObj.helpers.is.medical.hex(formData);
          const name = formData.img.name;
          if (isMedPatch && name.toLowerCase() == 'med') {
            console.log(true);
            return true;
          } else {
            console.log(false);
            return false;
          }
        },
        k9: function (formData) {
          const isMedPatch = builderObj.helpers.is.medical.hex(formData);
          const name = formData.img.name;

          if (isMedPatch && name.toLowerCase() == 'paw k9') {
            return true;
          } else {
            return false;
          }
        },
      },
      flagPatch: {
        ac1Front: function (formData) {
          const type = formData.type;
          const size = formData.size.current;
          if (type.toLowerCase() == 'flag' && size == 'T.Rex Arms AC1 Front') {
            return true;
          } else {
            return false;
          }
        },
      },
      jacketPanel: {
        defense: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'jacket panel' && size == '3.5” x 4”') {
            return true;
          } else {
            return false;
          }
        },
        condor: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'jacket panel' && size == '3.5” x 4.25”') {
            return true;
          } else {
            return false;
          }
        },
        hazard: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'jacket panel' && size == '4.6” x 6.2”') {
            return true;
          } else {
            return false;
          }
        },
        tad: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'jacket panel' && size == '3.6” x 5”') {
            return true;
          } else {
            return false;
          }
        },
        massif: function (formData) {
          const type = formData.type;
          const size = formData.size.current;

          if (type.toLowerCase() == 'jacket panel' && size == '4” x 4.5”') {
            return true;
          } else {
            return false;
          }
        },
      },
      callSign: {
        double: function (formData) {
          const type = formData.type;
          const sides = formData.sides.current;

          return type.toLowerCase() == 'call sign' && sides == 2;
        },
      },
      glowBorder: function (type, size, sizeEnabled) {
        let enabled = false;
        if (!this.mini(type, size)) {
          enabled = true;
        }
        return sizeEnabled || enabled;
      },
      flag: function (type, imgEnabled, flagEnabled) {
        // determine if type == id panel, laser cut flag, jacket panel, division jacket panel
        if (type.toLowerCase().includes("id panel") || type.toLowerCase().includes("name tape") && imgEnabled
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
        cover: (formData) => formData.type.toLowerCase() == 'cover',
        callSign: (formData) => formData.type.toLowerCase() == 'call sign',
      },
      flagType: {
        laserCutFlag: (formData) => formData.img.type.toLowerCase() === "laser cut flag",
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