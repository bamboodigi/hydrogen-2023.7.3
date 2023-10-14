import builderData from '~/data/builder.js';

let obj = {
  // initalize the starting state
  init: {
    // initalize the formData Object based on the product and chooses selected
    formData: function () {

    },

    // initialize the forms that collect data for the formData object.
    forms : function () {

    },
    // initalize the visualizer style to show custom product formed by the formData object.
    visualizer: function () {

    },
  },
  // data object used for the patch builder
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
      builderTitle: function () {
      }
    },
    update: {
      fontSize: function () {
      },
      fontSizeAdditional: function () {
      },
    },
    is: {
      glowBorder: function () {
      },
      flag: function () {
      },
      mini: function () {
      },
      additionalText: function () {
      },
      patchBuilder: product.tags.includes("custom_patch"),
      idPanel : ,
      nameTape : ,
      medicalPatch : ,
      jacketPanel : ,
      divisionJacketPanel : ,
      flagPatch : ,
      lightSaber : ,
      customPatch : ,
      lazerCutFlag : ,
      hiVisFlag : ,
      upload : ,
    },
  },
};



// initialize the Form Data OBJ
// initialize the Visualizer CSS 

// Import React hooks and components
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { useLoaderData, useParams } from '@remix-run/react';
import {
  ProductDetail,
  Upload,
  Steps, AddToCartButton, Text, Heading, AdvancedSelect
} from '~/components';
import { getExcerpt } from '~/lib/utils';

import { AnalyticsPageType, Money, ShopPayButton } from '@shopify/hydrogen';

obj.initFormData();
obj.initVisualizer();

const sizeOptions  builderData.sizeOptions;
const bgColors = builderData.colors.bgColors;
const fontColors = builderData.colors.fontColors;
const imgs = builderData.imgs;
const symbols = imgs.symbols;
const markTypeOptions = builderData.markType.types;
const saberOptions = builderData.lightSabers.types;


const isPatchBuilder = product.tags.includes("custom_patch");

function initFormData(product) {
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
      markType: 'Flag',
      enabled: false,
      name: imgs["hi-vis"][0].name,
      img: imgs["hi-vis"][0].img,
      color: {
        name: fontColors[8].name,
        img: fontColors[8].img,
        mask: {
          name: imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").name,
          img: imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").img,
          glow: imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").glow,
          icon: imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").icon,
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

  console.log(imgs["lazer-cut"]['3x2'].find(value => value.name == "USA"));

  switch (formData.type.toLowerCase()) {
    case 'id panel':
      formData.img.type = 'Lazer Cut Flag';
      formData.img.color.mask.img = imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").img;
      formData.img.color.mask.name = imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").name;
      break;
    case 'name tape':
      formData.img.type = 'HiVis Flag';
      break;
    case 'flag':
      formData.img.type = 'Lazer Cut Flag';
      formData.img.color.mask.img = imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").img;
      formData.img.color.mask.name = imgs["lazer-cut"]['mini-id'].find(value => value.name == "USA").name;
      break;
    case 'light sabers':
      formData.bgColor.name = bgColors[0].name;
      formData.bgColor.img = bgColors[0].img;
      break;
    case 'medical patch':
      if (formData.size.current == '1” x 1”') {
        console.log('hi')
        formData.img.markType = 'Symbol';
        formData.img.name = symbols['medical patch']['1 x 1'][0].name;
        formData.img.img = symbols['medical patch']['1 x 1'][0].img;
        formData.img.icon = symbols['medical patch']['1 x 1'][0].icon;
        formData.img
          .glow = symbols['medical patch']['1 x 1'][0].glow;
      } else {
        formData.img.markType = 'Symbol';
        formData.img.name = symbols['medical patch']['2 x 2'][0].name;
        formData.img.img = symbols['medical patch']['2 x 2'][0].img;
        formData.img.icon = symbols['medical patch']['2 x 2'][0].icon;
        formData.img.glow = symbols['medical patch']['2 x 2'][0].glow;
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
      formData.img.color.mask.img = imgs["lazer-cut"]['3x2'].find(value => value.name == "USA").img;
      formData.img.color.mask.name = imgs["lazer-cut"]['3x2'].find(value => value.name == "USA").name;
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
  // console.log(formData);
  return formData || {};
}

function isGlowBorder(type, size, sizeEnabled) {
  if (type.toLowerCase().includes("id panel") && size == "5” x 3”") {
    sizeEnabled = true;
  }
  return sizeEnabled || false;
}

function isFlag(type, flagEnabled) {
  // determine if type == id panel, lazer cut flag, jacket panel, division jacket panel
  if (type.toLowerCase().includes("id panel")
    // || type.toLowerCase().includes("jacket panel") || type.toLowerCase().includes("division jacket panel")
  ) {
    flagEnabled = true;
  }
  return flagEnabled || false;
}

function isMini(type, size, miniEnabled) {
  const [lengthStr, heightStr] = size.split("x").map(str => str.trim());
  const length = parseInt(lengthStr);
  const height = parseInt(heightStr);
  if (type.toLowerCase().includes("id panel") && length < 4) {
    miniEnabled = true;
  }
  return miniEnabled || false;
}

function isAdditionalText(type) {
  if (type.toLowerCase().includes("id panel")) {
    return true;
  }
  return false;
}
// function that converts the custom product and choose the correct builder
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

  // console.log(result);
  return capitalizeWords(result);

  function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}

function initVisualizerStyle(formData) {
  const bgColor = 'url("' + formData.bgColor.img + '")';
  const textColor = 'url("' + formData.text.color.img + '")';
  const hiltColor = 'url("' + formData.lightsaber.hilt.color + '")';
  const bladeColor = 'url("' + formData.lightsaber.blade.color + '")';
  const symbolColor = 'url("' + formData.img.color.color + '")';
  const img = formData.type.toLowerCase() === "medical patch" ? 'url("' + formData.img.symbol + '")' : 'url("' + formData.img.img + '")';
  const mask = 'url("' + formData.img.color.mask.img + '")';
  const hiltImg = 'url("' + formData.lightsaber.hilt.img + '")';
  const bladeImg = 'url("' + formData.lightsaber.blade.img + '")';
  console.log(symbolColor);
  console.log(mask);
  // console.log(bladeColor);
  // console.log(hiltColor);
  // console.log(bladeImg);
  // console.log(hiltImg);
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
}

function updateFontSize(containerRef, setFontStyle, formData) {
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
}

function updateAdditionalFontSize(containerSecondaryRef, setFontSecondaryStyle, formData) {

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

}
