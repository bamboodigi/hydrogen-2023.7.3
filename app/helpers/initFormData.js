export default function initFormDataTest(product, builderData, bgColors, fontColors, imgs, symbols, saberOptions) {
  // console.log(product);
  const patchType = builderData.type[getBuilderTitle(product).toLowerCase()];
  
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
      name: bgColors[18].name,
      img: bgColors[18].img,
    },
    text: {
      primary: {
        text: '',
        maxLength: patchType.config.sizes[0].maxLength || '',
        lines: patchType.config.sizes[0].lines || '',
        placeholder: patchType.config.sizes[0].placeholder || '',
      },
      secondary: {
        text: '',
        maxLength: patchType.config.sizes[0].maxLength2 || '',
        lines: patchType.config.sizes[0].lines2 || '',
        placeholder: patchType.config.sizes[0].placeholder2 || '',
      },
      color: {
        name: fontColors[8].name,
        img: fontColors[8].img,
      },
    },
    lightsaber: {
      saberType: saberOptions[0].name,
      hilt: {
        name: fontColors[7].name,
        color: fontColors[7].img,
        img: saberOptions[0].hilt,
      },
      blade: {
        name: fontColors[11].name,
        color: fontColors[11].img,
        img: saberOptions[0].blade,
      },
    },
    img: {
      markType: 'flag',
      enabled: false,
      name: imgs["hivis-flags"][0].name,
      img: imgs["hivis-flags"][0].img,
      color: {
        name: fontColors[8].name,
        img: fontColors[8].img,
      },
      type: 'Laser Cut Flag',
      reversed: false,
      variant: {
        name: '',
        img: '',
      },
    }
  };

  switch(formData.type.toLowerCase()) {
    case 'id panel':
      formData.img.type = 'Laser Cut Flag';
      break;
    case 'name tape':
      formData.img.type = 'HiVis Flag';
      break;
    case 'flag':
      formData.img.type = 'Laser Cut Flag';
      break;
    case 'light sabers':
      formData.bgColor.name = bgColors[0].name;
      formData.bgColor.img = bgColors[0].img;
      break;
    case 'medical patch':
      if (formData.size.current == '1” x 1”') {
        formData.img.markType = 'symbol';
        formData.img.name = symbols['medical patch']['1 x 1'][0].name;
        formData.img.src = symbols['medical patch']['1 x 1'][0].img;
        formData.img.icon = symbols['medical patch']['1 x 1'][0].icon;
        formData.img.glow = symbols['medical patch']['1 x 1'][0].glow;
      } else {
        formData.img.markType = 'Symbol';
        formData.img.name = symbols['medical patch']['2 x 2'][0].name;
        formData.img.src = symbols['medical patch']['2 x 2'][0].img;
        formData.img.icon = symbols['medical patch']['2 x 2'][0].icon;
        formData.img.glow = symbols['medical patch']['2 x 2'][0].glow;
      }
      break;
    case 'default':
      formData.img.type = 'HiVis Flag';
      formData.price.total += 4;
      break;
  }
  //  console.log(params);

  return formData || {};
}

x// function that converts the custom product and choose the correct builder
function getBuilderTitle(product) {
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
  return capitalizeWords(result);

  function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}

let formData = {
  // input fields
  text: '',
  textMaxLength: patchType.config.sizes[0].maxLength || '',
  textLines: patchType.config.sizes[0].lines || '',
  textPlaceholder: patchType.config.sizes[0].placeholder || '',
  textAdditional: '',
  textAdditionalMaxLength: patchType.config.sizes[0].maxLength2 || '',
  textAdditionalLines: patchType.config.sizes[0].lines2 || '',
  textAdditionalPlaceholder: patchType.config.sizes[0].placeholder2 || '',
  type: patchType.name || '',
  // size list per variant
  // size: '3.5” x 2”',
  size: patchType.config.sizes[0].size || '',
  // font text color name and image
  textColor: fontColors[8].name,
  textColorImg: fontColors[8].img,
  // background color name and image
  bgColor: bgColors[18].name,
  bgColorImg: bgColors[18].img,
  markType: '',
  flagEnabled: false,
  flagType: 'Laser Cut Flag',
  img: data[5].values[0]["hivis-flags"][0].name,
  imgSrc: data[5].values[0]["hivis-flags"][0].img,
  flagReversed: false,
  flagVariant: "",
  flagVariantImg: "",
  agreement: false,
  glowBorder: false,
  proIRFontColor: false,
  reflectiveGlowFontColor: false,
  typeData: patchType.config.sizes || [],
  price: parseInt(product.variants.nodes[0].price.amount),
  saberType: saberOptions[0].name,
  hiltColor: fontColors[7].name,
  hiltColorImg: fontColors[7].img,
  hiltImg: saberOptions[0].hilt,
  bladeColor: fontColors[11].name,
  bladeColorImg: fontColors[11].img,
  bladeImg: saberOptions[0].blade,
};

if (formData.type.toLowerCase().includes("flag")) {
  // formData.imgSrc = "";
}

if (formData.type.toLowerCase().includes("light sabers")) {
  formData.bgColor.name = bgColors[0].name;
  formData.bgColor.img = bgColors[0].img;
}

if (formData.type.toLowerCase().includes("medical patch")) {
  if (formData.size == '1” x 1”') {
    formData.markType = 'Symbol';
    formData.img = symbols['medical patch']['1 x 1'][0].name;
    formData.imgSrc = symbols['medical patch']['1 x 1'][0].img;
    formData.imgIcon = symbols['medical patch']['1 x 1'][0].icon;
    formData.imgGlow = symbols['medical patch']['1 x 1'][0].glow;
  } else {
    formData.markType = 'Symbol';
    formData.img = symbols['medical patch']['2 x 2'][0].name;
    formData.imgSrc = symbols['medical patch']['2 x 2'][0].img;
    formData.imgIcon = symbols['medical patch']['2 x 2'][0].icon;
    formData.imgGlow = symbols['medical patch']['2 x 2'][0].glow;
  }
}

if (isFlag(formData.type)) {
 // console.log(formData.type.toLowerCase())
  switch (formData.type.toLowerCase()) {
    case 'id panel':
      formData.flagType = 'Laser Cut Flag';
    case 'name tape':
      formData.flagType = 'HiVis Flag';
    case 'flag':
      formData.flagType = 'Laser Cut Flag';
    case 'default':
    // console.log("test");
    // formData.flagType = 'HiVis Flag';
    // formData.price += 4;
  }
}
