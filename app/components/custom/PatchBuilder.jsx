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

// Import data from the '~/data/visualizer.js' file
import data from '~/data/visualizer.js';
import builderData from '~/data/builder.js';

import initFormDataTest from '~/helpers/initFormData.js';

const sizeOptions = builderData.sizeOptions;
const bgColors = builderData.colors.bgColors;
const fontColors = builderData.colors.fontColors;
const imgs = builderData.imgs;
const symbols = imgs.symbols;
const markTypeOptions = builderData.markType.types;
const saberOptions = builderData.lightSabers.types;


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Patch Builder Component. This is the component that will show a tailored patch unique to the user's selections.
export function PatchBuilder({ product, config, ...props }) {
  // Destructure variables from useLoaderData and useFetcher hooks
  const { shop } = useLoaderData();

  const { shippingPolicy, refundPolicy } = shop;
  // const fetch = useFetcher();

  // console.log(imgs);

  // Set initial state with useState hook
  const [formData, setFormData] = useState(initFormData(product));
  // Define a variable that sets a prestyle object with a width property
  var prestyle = {
    width: '300px'
  };

  const isPatchBuilder = product.tags.includes("custom_patch");

  return (
    <>
      <Visualizer formData={formData} className="" />
      <div className="sm:mt-auto sticky md:pr-4 xl:pr-16 md:-mb-nav md:top-nav md:-translate-y-nav md:pt-nav hiddenScroll md:overflow-y-scroll bg-white md:bg-transparent text-contrast border-2 border-t-2 border-l-2 border-r-2 border-black md:border-none rounded-t-2xl"
      >
        <section className="flex flex-col w-full max-w-[33rem] gap-6 p-7 lg:pb-0
            md:mx-auto md:px-0
            lg:">
          <div className="grid gap-2">
            <Heading as="h1" className="text-3xl leading-[2rem] pr-5 sm:pr-0 whitespace-normal">
              <span className="mr-2">
                {formData.size.current}
              </span>
              {isMini(formData.type, formData.size.current) && (
                <span className="">Mini </span>
              )
              }
              {
                formData.type.toLowerCase().includes("medical patch") && formData.size.current == '1” x 1”' ? (
                  <>
                    Cats Eye
                  </>
                ) : formData.type.toLowerCase().includes("medical patch") && formData.size.current == '3.5” x 2”' ? (
                  <>
                    Medical ID Panel
                  </>
                ) : formData.type.toLowerCase().includes("light sabers") ? (
                  <>
                    Light Saber
                  </>
                ) : formData.type.toLowerCase().includes("flag") ? (
                  <>
                    <span className="block mt-2">
                      {formData.img.type}
                    </span>
                  </>
                ) : formData.type.toLowerCase() == ("jacket panel") ? (
                  <>
                    <br></br>
                    Custom Jacket Panel
                  </>
                ) : (
                  <>
                    {formData.type}
                  </>
                )
              }

              {isFlag(formData.type) && (
                <span className="text-xl mt-2 uppercase block">with {formData.Type}</span>
              )
              }

              {
                formData.type.toLowerCase().includes("light sabers") && (
                  <>
                    <span className="text-xl mt-2 uppercase block">{formData.lightsaber.saberType}</span>
                  </>
                )
              }
            </Heading>
          </div>
          <Form formData={formData} setFormData={setFormData} data={data} config={config} product={product} />
          {/* <pre className="overflow-scroll" style={prestyle}>{JSON.stringify(formData, null, 2)}</pre> */}
          <ProductDetails shippingPolicy={shippingPolicy} refundPolicy={refundPolicy} />
        </section>
      </div>
    </>
  );
}


function initFormData(product) {
  //console.log(product);
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
      },
      type: 'Lazer Cut Flag',
      reversed: false,
      variant: {
        name: '',
        img: '',
      },
    }
  };

  switch (formData.type.toLowerCase()) {
    case 'id panel':
      formData.img.type = 'Lazer Cut Flag';
      break;
    case 'name tape':
      formData.img.type = 'HiVis Flag';
      break;
    case 'flag':
      formData.img.type = 'Lazer Cut Flag';
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
        formData.img.glow = symbols['medical patch']['1 x 1'][0].glow;
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

  console.log(result);
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
  const hiltImg = 'url("' + formData.lightsaber.hilt.img + '")';
  const bladeImg = 'url("' + formData.lightsaber.blade.img + '")';


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
        backgroundImage: img,
        aspectRatio: '2/1',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      symbol: {
        backgroundImage: symbolColor,
        maskImage: img,
        maskSize: 'cover',
        WebkitMaskImage: img,
        WebkitMaskSize: 'cover',
        transform: 'scale(1.5)',
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

// Patch Visualizer element that shows a tailored patch
function Visualizer({ formData, className, ...props }) {

  const { canvas, patch, text, img, lightsaber } = initVisualizerStyle(formData);
  // Create a ref to access the container element

  console.log(lightsaber);
  const containerRef = useRef(null);
  const containerSecondaryRef = useRef(null);

  const [canvasStyle, setCanvasStyle] = useState(canvas);
  const [style, setStyle] = useState(patch);
  const [fontStyle, setFontStyle] = useState(text.primary);
  const [fontSecondaryStyle, setFontSecondaryStyle] = useState(text.secondary);
  const [flagStyle, setFlagStyle] = useState(formData.type.toLowerCase() === "medical patch" ? img.symbol : img.flag); 
  const [hiltStyle, setHiltStyle] = useState(lightsaber.hilt);
  const [bladeStyle, setBladeStyle] = useState(lightsaber.blade);


  // A function to load an image and update the state with its URL
  const imageLoader = (src, setState, mask,) => {
    const img = new Image();
    img.onload = () => {
      if (formData.type.toLowerCase().includes("light sabers")) {
        if (mask == "saber") {
          console.log("yes")
          let newWidth = '';
          let newMarginLeft = '';
          let newColor = '';
          switch (formData.lightsaber.saberType.toLowerCase()) {
            case 'darth vader':
              newWidth = src.includes("hilt") ? '27%' : src.includes("blade") ? '73%' : '';
              newColor = src.includes("hilt") ? fontColors[7].img : src.includes("blade") ? fontColors[11].img : '';
              break;
            case 'luke skywalker':
              newWidth = src.includes("hilt") ? '27%' : src.includes("blade") ? '71%' : '';
              newColor = src.includes("hilt") ? fontColors[7].img : src.includes("blade") ? fontColors[13].img : '';
              newMarginLeft = src.includes("blade") ? '1%' : '';
              break;
            case 'obi wan kenobi':
              newWidth = src.includes("hilt") ? '27%' : src.includes("blade") ? '71%' : '';
              newMarginLeft = src.includes("blade") ? '1%' : '';
              newColor = src.includes("hilt") ? fontColors[7].img : src.includes("blade") ? fontColors[13].img : '';
              break;
            case 'mace windu':
              newWidth = src.includes("hilt") ? '27%' : src.includes("blade") ? '71%' : '';
              newMarginLeft = src.includes("blade") ? '1%' : '';
              newColor = src.includes("hilt") ? fontColors[7].img : src.includes("blade") ? fontColors[15].img : '';
              break;
            case 'count dooku':
              newWidth = src.includes("hilt") ? '33%' : src.includes("blade") ? '65%' : '';
              newMarginLeft = src.includes("blade") ? '-1%' : '';
              newColor = src.includes("hilt") ? fontColors[7].img : src.includes("blade") ? fontColors[11].img : '';
              break;
          }
          setState(prevStyle => ({
            ...prevStyle,
            WebkitMaskImage: `url("${src}")`,
            maskImage: `url("${src}")`,
          }));
          if (newWidth.length > 0) {
            setState(prevStyle => ({
              ...prevStyle,
              width: newWidth
            }));
          }
          if (newMarginLeft.length > 0) {
            setState(prevStyle => ({
              ...prevStyle,
              marginLeft: newMarginLeft
            }));
          }
          if (newColor.length > 0) {
            setState(prevStyle => ({
              ...prevStyle,
              backgroundImage: `url("${newColor}")`
            }));
          }
        }
        if (mask == "saber color"){
          setState(prevStyle => ({
            ...prevStyle,
            backgroundImage: `url("${src}")`,
          }));
        }
        if(setState == setStyle) {
          console.log(src);
          setState(prevStyle => ({
            ...prevStyle,
            backgroundImage: `url("${src}")`
          }));
        }
      } else if (formData.type.toLowerCase().includes("medical patch")) {
        if (mask) {
          setState(prevStyle => ({
            ...prevStyle,
            backgroundImage: `url("${src}")`,
            WebkitMaskImage: `url("${formData.img.img}")`,
            maskImage: `url("${mask}")`,
            maskSize: `cover`,
            WebkitSize: 'cover',
          }));
        } else {
          setState(prevStyle => ({
            ...prevStyle,
            backgroundImage: `url("${src}")`
          }));
        }
      } else {
        setState(prevStyle => ({
          ...prevStyle,
          backgroundImage: `url("${src}")`
        }));
      }
    };
    if (formData.type.toLowerCase().includes("medical patch")) {
      if (mask) {
        img.src = mask;
      } else {
        img.src = src;
      }
    } else {
      img.src = src;
    }
  };

  // Custom hook to update the font style when the text color image changes
  useEffect(() => {
   // console.log(formData.lightsaber.blade.img);
    imageLoader(formData.lightsaber.hilt.img, setHiltStyle, "saber");
    imageLoader(formData.lightsaber.blade.img, setBladeStyle, "saber");
    // setHiltStyle(prevStyle => ({ ...prevStyle, maskImage: `url("${formData.hiltImg}")`, WebkitMaskImage: `url("${formData.hiltImg}")` }));
    // setBladeStyle(prevStyle => ({ ...prevStyle, maskImage: `url("${formData.bladeImg}")`, WebkitMaskImage: `url("${formData.bladeImg}")` }));
  }, [formData.lightsaber.saberType]);

  // // Custom hook to update the flag style when the flag image changes
  useEffect(() => {
    if (formData.type.toLowerCase().includes("medical patch")) {
      imageLoader(formData.text.color.img, setFlagStyle, formData.img.img);
    } else {
      imageLoader(formData.img.img, setFlagStyle);
    }
  }, [formData.img.img]);

  // Custom hook to update the background color image style when the background color image changes
  useEffect(() => {
    imageLoader(formData.bgColor.img, setStyle);
  }, [formData.bgColor.img]);

  // Custom hook to update the font style when the text color image changes
  useEffect(() => {
    if (formData.type.toLowerCase().includes("medical patch")) {
      imageLoader(formData.text.color.img, setFlagStyle);
    }
    imageLoader(formData.text.color.img, setFontStyle);
    imageLoader(formData.text.color.img, setFontSecondaryStyle);

  }, [formData.text.color.img]);

  // Custom hook to update the font style when the text color image changes
  useEffect(() => {
    imageLoader(formData.lightsaber.hilt.color, setHiltStyle, "saber color");
  }, [formData.lightsaber.hilt.color]);


  // Custom hook to update the font style when the text color image changes
  useEffect(() => {
    imageLoader(formData.lightsaber.blade.color, setBladeStyle, "saber color");
  }, [formData.lightsaber.blade.color]);

  // Custom hook to update the font style when the text color image changes
  useEffect(() => {
    if (formData.type.toLowerCase().includes("medical patch")) {
      imageLoader(formData.text.color.img, setFlagStyle);
    }
    imageLoader(formData.text.color.img, setFontStyle);
    imageLoader(formData.text.color.img, setFontSecondaryStyle);

  }, [formData.text.color.img]);

  // Custom hook to update the size style when the size changes
  useEffect(() => {
    // An array of objects that represent the different size options
    const values = sizeOptions;

    const value = values.find(item => item.name === formData.size.current);

    if (value) {
      if (value.ratio === "1:1") {
        // Set the style for square sizes
        setStyle(prevStyle => ({ ...prevStyle, width: '200px', height: `200px` }));
      } else {
        // Set the style for non-square sizes
        const [width, height] = value.ratio.split(':').map(Number);
        setStyle(prevStyle => ({ ...prevStyle, width: '290px', height: `${290 * height / width}px` }));
      }
    }
  }, [formData.size.current]);

  // Custom hook to update the canvas style when the size changes
  useEffect(() => {
    // An array of objects that represent the different size options that require a larger canvas
    const arr = [{ name: "3.5” x 4.25”", ratio: "7:8.5" }, { name: "3.5” x 4”", ratio: "7:8" }, { name: "4.6” x 6.2”", ratio: "23:31" }, { name: "3.6” x 5”", ratio: "18:25" }, { name: "4” x 4.5”", ratio: "8:9" }];

    var countSize = true;

    // Check if the current size requires a larger canvas
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === formData.size.current) {
        setCanvasStyle(prevStyle => ({ ...prevStyle, height: '400px' }));
        countSize = false;
        break;
      }
    }

    // If the current size does not require a larger canvas, set the default canvas height
    if (countSize) {
      setCanvasStyle(prevStyle => ({ ...prevStyle, height: '230px' }));
    }
    if (formData.type.toLowerCase().includes("medical patch")) {
      setCanvasStyle(prevStyle => ({ ...prevStyle, height: '230px' }));
      switch (formData.size.current) {
        case '1” x 1”':
          break;
        case '2” x 2”':
          break;
        case '3.5” x 2”':
          setFlagStyle(prevStyle => ({ ...prevStyle, transform: `scale(1)` }));
          console.log("hi");
          break;
      }
    }
  }, [formData.size.current]);

  //Use the useEffect hook to manage side effects
  // This useEffect hook adjusts the font size of the text inside a container element
  // based on the size of the container and the text. It also sets the line height to
  // match the font size.
  let count = 0;
  useEffect(() => {
    // console.log(!containerRef.current);
    if (formData.type.toLowerCase().includes("light sabers")) return;
    if (formData.type.toLowerCase().includes("flag")) return;
    if (!containerRef.current) return;
    // Define a function to adjust the font size
    const adjustFontSize = () => {
      // If the containerRef is not set, return
      if (containerRef.current) {
        updateFontSize(containerRef, setFontStyle, formData);
      }

    };

    // Call adjustFontSize() immediately to set the font size on mount
    adjustFontSize();

    // Attach the adjustFontSize() function as an event listener for the window resize event
    window.addEventListener('resize', adjustFontSize());

    // Create a MutationObserver to listen for changes to the container's child nodes,
    // and attach the observer to the containerRef
    const observer = new MutationObserver(adjustFontSize);
    observer.observe(containerRef.current, { childList: true, characterData: true, subtree: true });

    // Return a cleanup function to remove the event listeners and observer when the component unmounts
    return () => {
      window.removeEventListener('resize', adjustFontSize());
      observer.disconnect();
    };
  }, [formData.text.primary.text, formData.size.current]);

  const count2 = 0;
  //Use the useEffect hook to manage side effects
  useEffect(() => {
    if (!containerSecondaryRef.current) return;
    const adjustFontSize = () => {
      // If the containerRef is not set, return

      updateAdditionalFontSize(containerSecondaryRef, setFontSecondaryStyle, formData);
    };

    // Call adjustFontSize() immediately to set the font size on mount
    adjustFontSize();

    // Attach the adjustFontSize() function as an event listener for the window resize event
    window.addEventListener('resize', adjustFontSize());

    // Create a MutationObserver to listen for changes to the container's child nodes,
    // and attach the observer to the containerRef
    const observer = new MutationObserver(adjustFontSize);
    observer.observe(containerRef.current, { childList: true, characterData: true, subtree: true });

    // Return a cleanup function to remove the event listeners and observer when the component unmounts
    return () => {
      window.removeEventListener('resize', adjustFontSize());
      observer.disconnect();
    };
  }, [formData.text.secondary.text, formData.size.current]);


  useEffect(() => {
    if (formData.type.toLowerCase() !== 'medical patch') {
      if (formData.img.reversed) {
        setFlagStyle(prevStyle => ({ ...prevStyle, transform: `scaleX(-1)` }));
      } else {
        setFlagStyle(prevStyle => ({ ...prevStyle, transform: `scaleX(1)` }));
      }
    }
  }, [formData.img.reversed]);

  useEffect(() => {
    if (formData.upsells.glowBorder) {
      setStyle(prevStyle => ({ ...prevStyle, WebkitTextStroke: `2px white`, textStroke: `2px white` }));
    } else {
      setStyle(prevStyle => ({ ...prevStyle, WebkitTextStroke: `initial`, textStroke: `initial` }));
    }
  }, [formData.upsells.glowBorder]);


  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // format by option
  return (
    <div className="swimlane md:grid-flow-row hiddenScroll md:p-0 md:overflow-x-auto md:grid-cols-2 w-full justify-center lg:pr-16">
      <div id="visualizer" className={classNames(
        className,
        "md:col-span-2 aspect-square snap-center flex items-center justify-center overflow-clip rounded-sm w-full max-h-1/2 p-6 py-4 sm:relative"
      )}>
        {/* ${scrollPosition >= 100 ? ' w-100 fixed z-50' : ' transition relative'
        } */}
        <div id="patch" className={classNames(
          formData.type.toLowerCase().includes("flag") ? "justify-center" : "justify-center",
          "flex items-center transform lg:scale-150"
        )} style={style}>

          {formData.type.toLowerCase().includes("id panel") && formData.size.current == '6” x 2”' ? (
            <div className="w-full h-full flex">
              <div className="w-1/2 flex items-center px-2">
                <div id="flag" className="w-full" style={flagStyle}></div>
              </div>
              <div className="flex flex-col w-1/2 gap-2" style={{}}>
                <div ref={containerRef} className=" h-3/5 text-center overflow-x-hidden flex items-center justify-center">
                  <p id="main-text" className="pt-2.5 inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
                </div>
                <div ref={containerSecondaryRef} className="h-2/5 text-center overflow-x-hidden flex items-end justify-center">
                  <p id="secondary-text" className="inline-block h-full whitespace-nowrap" style={{ ...fontSecondaryStyle }}>
                    {formData.text.secondary.text.length > 0 ? formData.text.secondary.text : 'APOS  NKDA'}
                  </p>
                </div>
              </div>
            </div>
          ) : formData.type.toLowerCase().includes("id panel") ? (
            <div className={classNames(
              formData.size.current === '3.5” x 2”' ? "gap-2" :
                formData.size.current === '4” x 2”' ? "gap-2" : "",
              "flex flex-col w-full h-full"
            )}>
              <div ref={containerRef} className="h-1/2 justify-center overflow-y-hidden flex items-center">
                <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
              </div>
              <div className={classNames(
                formData.size.current === '3.5” x 2”' ? "px-1" : "",
                "flex h-1/2 items-center"
              )}>
                <div id="flag"
                  className={classNames(
                    formData.size.current === '3” x 2”' ? "min-w-3/5" : "min-w-1/2",
                    "flex-1 max-h-full max-w-full h-auto"
                  )}
                  style={flagStyle}></div>
                <div ref={containerSecondaryRef} className={classNames(
                  formData.size.current === '3” x 2”' ? "w-2/5" :
                    formData.size.current === '3.5” x 2”' ? "w-1/2" : "w-1/2",
                  "flex items-center justify-center h-full"
                )}>
                  <p id="secondary-text" className={classNames(
                    formData.size.current === '6” x 3”' ? "pt-3" :
                      formData.size.current === '4” x 2”' ? "pt-3" :
                        formData.size.current === '3.5” x 2”' ? "pt-2" : "pt-2 pl-2",
                    ""
                  )}
                    style={{ ...fontSecondaryStyle }}>
                    {formData.text.secondary.text.length > 0 ? formData.text.secondary.text.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <br />}
                        {line}
                      </React.Fragment>
                    )) :
                      formData.text.secondary.placeholder.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <br />}
                          {line}
                        </React.Fragment>
                      ))
                    }
                  </p>
                </div>
              </div>
            </div>
          ) : formData.type.toLowerCase().includes("name tape") && formData.img.enabled ? (
            <div className="flex w-full h-full gap-2">
              <div className="flex flex-0  w-1/3 items-center" style={{}}>
                <div id="flag" className="mr-1 flex-1 max-h-full max-w-full w-auto h-auto" style={flagStyle}></div>
              </div>
              <div ref={containerRef} className="flex flex-1 w-2/3 justify-center overflow-y-hidden items-center">
                <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
              </div>
            </div>
          ) : formData.type.toLowerCase().includes("name tape") ? (
            <div ref={containerRef} className="h-full w-full text-center overflow-x-hidden overflow-y-hidden flex items-center justify-center">
              <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <br />}
                  {line}
                </React.Fragment>
              )) :
                formData.text.primary.placeholder.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}</p>
            </div>
          ) : formData.type.toLowerCase().includes("medical patch") && formData.size.current == '3.5” x 2”' ? (
            <div className="flex w-full h-full gap-2">
              <div className="flex flex-0  w-[45%] items-center" style={{}}>
                <div id="icon" className="h-full w-full" style={flagStyle}>
                  <div id="glow"
                    className={classNames(
                      formData.upsells.glowBorder ? "block" : "hidden",
                      "h-full w-full"
                    )}
                    style={{ backgroundImage: `url("${formData.img.glow}")`, backgroundSize: 'cover', position: 'absolute' }}
                  ></div>
                </div>
              </div>
              <div ref={containerRef} className="flex flex-1 w-[55%] justify-center overflow-y-hidden items-center">
                <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    {line}
                  </React.Fragment>
                )) :
                  formData.text.primary.placeholder.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}</p>
              </div>
            </div>
          ) : formData.type.toLowerCase().includes("medical patch") ? (
            <div className="h-full w-full text-center overflow-x-hidden flex items-center justify-center">
              <div id="icon" className="h-4/5 w-4/5" style={flagStyle}>
                <div id="glow"
                  className={classNames(
                    formData.upsells.glowBorder ? "block" : "hidden",
                    "h-full w-full"
                  )}
                  style={{ backgroundImage: `url("${formData.img.glow}")`, backgroundSize: 'cover', position: 'absolute' }}
                ></div>
              </div>
            </div>
          ) : formData.type.toLowerCase() == ("flag") ? (
            <div ref={containerRef} className="h-full w-full overflow-x-hidden flex items-center justify-center">
              <div id="flag" className="flex-1 h-full w-full" style={flagStyle}></div>
            </div>
          ) : formData.type.toLowerCase().includes("call sign") ? (
            <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
              <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
            </div>
          ) : formData.type.toLowerCase().includes("quote") ? (
            <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
              <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
            </div>
          ) : formData.type.toLowerCase().includes("light saber") ? (
            <div ref={containerRef} className="h-full w-full text-center overflow-x-hidden flex items-center justify-start">
              <div id="hilt" className="w-0 transition-background duration-[.75s]" style={{ ...hiltStyle }}></div>
              <div id="blade" className="w-0 transition-width transition-background duration-[.75s]" style={{ ...bladeStyle }}></div>
            </div>
          ) : formData.type.toLowerCase() == 'custom printed patch' ? (
            <></>
            // <div ref={containerRef} className="h-full w-full overflow-x-hidden flex items-center justify-center">
            //   <div id="flag" className="flex-1 h-full w-full" style={flagStyle}></div>
            // </div>
          ) : formData.type.toLowerCase() == "jacket panel" ? (
            <div ref={containerRef} className="h-full w-full overflow-x-hidden flex flex-col items-center justify-between">
              <div className="mt-2">
                <p id="main-text" className="text-center" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
                <div className="flex flex-wrap">
                  <p id="text2" className="w-1/2 mb-3" style={{ ...fontSecondaryStyle }}>{formData.text.secondary.text.length > 0 ? formData.text.secondary.text : formData.text.secondary.placeholder}</p>
                  <p id="text3" className="w-1/2 mb-3 text-right" style={{ ...fontSecondaryStyle }}>{formData.text.third.text.length > 0 ? formData.text.third.text : formData.text.third.placeholder}</p>
                  <p id="text4" className="w-1/2 mb-3" style={{ ...fontSecondaryStyle }}>{formData.text.fourth.text.length > 0 ? formData.text.fourth.text : formData.text.fourth.placeholder}</p>
                  <p id="text5" className="w-1/2 mb-3 text-right" style={{ ...fontSecondaryStyle }}>{formData.text.fifth.text.length > 0 ? formData.text.fifth.text : formData.text.fifth.placeholder}</p>
                  <p id="text6" className="w-1/2" style={{ ...fontSecondaryStyle }}>{formData.text.sixth.text.length > 0 ? formData.text.sixth.text : formData.text.sixth.placeholder}</p>
                  <p id="text7" className="w-1/2 text-right" style={{ ...fontSecondaryStyle }}>{formData.text.seventh.text.length > 0 ? formData.text.seventh.text : formData.text.seventh.placeholder}</p>
                </div>
              </div>
              <div id="flag" className="w-full" style={flagStyle}></div>
            </div>
          ) : formData.type.toLowerCase() == ("division jacket panel") ? (
            <div className="h-full w-full overflow-x-hidden flex flex-col items-center justify-between">
              <div ref={containerRef} className="w-full h-auto">
                <p id="main-text" className="text-center" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
                <div className="flex flex-wrap text-center">
                  <p id="text2" className="w-1/2 mb-3" style={{ ...fontSecondaryStyle }}>{formData.text.secondary.text.length > 0 ? formData.text.secondary.text : formData.text.secondary.placeholder}</p>
                  <p id="text3" className="w-1/2 mb-3" style={{ ...fontSecondaryStyle }}>{formData.text.third.text.length > 0 ? formData.text.third.text : formData.text.third.placeholder}</p>
                </div>
              </div>
              <div id="flag" className="w-full" style={flagStyle}></div>
            </div>
          ) : formData.type.toLowerCase().includes("ranger tabs") ? (
            <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
              <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
            </div>
          ) : (
            <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
              <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
            </div>
          )}
        </div>
      </div>
    </div >
  );
}

// Form element to customize the patch
function Form({ formData, setFormData, data, config, product }) {
  const patchType = builderData.type[getBuilderTitle(product).toLowerCase()];
  let tempSteps = [
    { name: 'Text', href: '#', status: 'current', step: 1 },
    { name: 'Patch Size', href: '#', status: 'current', step: 2 },
    { name: 'Font & Background Colors', href: '#', status: 'upcoming', step: 3 },
    { name: 'Flag', href: '#', status: 'upcoming', step: 4 },
    { name: 'Almost There', href: '#', status: 'upcoming', step: 5 },
  ];

  // console.log(formData);

  switch (formData.type.toLowerCase()) {
    case 'name tape':
      tempSteps = builderData.type["name tape"].form.steps;
      break;
    case 'id panel':
      tempSteps = builderData.type["id panel"].form.steps;
      break;
    case 'medical patch':
      tempSteps = builderData.type["medical patch"].form.steps;
      break;
    case 'flag':
      tempSteps = builderData.type["flag"].form.steps;
      break;
    case 'light sabers':
      tempSteps = builderData.type["light sabers"].form.steps;
      break;
    case 'custom printed patch':
      tempSteps = builderData.type["custom printed patch"].form.steps;
      break;
    case 'jacket panel':
      tempSteps = builderData.type["jacket panel"].form.steps;
      break;
    case 'division jacket panel':
      tempSteps = builderData.type["division jacket panel"].form.steps;
      break;
    default:
      break;
  }


  let tempStepObj = {
    steps: tempSteps,
    currentStep: 1,
    obj: tempSteps[0]
  };

  // console.log(tempStepObj);




  const [steps, setSteps] = useState(tempSteps);

  const [currentStep, setCurrentStep] = useState(steps.indexOf(steps.find(step => step.status === 'current')) + 1);
  const [currentStepObj, setCurrentStepObj] = useState(steps.find(step => step.status === 'current'));


  const [stepForm, setStepForm] = useState(tempStepObj);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  //  HANDLE EVENTS = TYPE, TEXT, TEXT ADDITIONAL, SIZE, TEXT COLOR, BG COLOR, FLAG, MORE TO ADD
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // Define a function to handle the change of the type of customized patches
  // const handleTypeChange = (event) => {

  //   // Find the selected type from data array
  //   const obj = data[3].values.find(value => value.name === event.target.value);
  //   // Check if the selected type contains the string "hivis"
  //   if (obj.name.toLowerCase().includes('hivis')) {
  //     // If it does, set the form data with the selected type, its sizes, and the first hivis flag
  //     setFormData({
  //       ...formData, type: event.target.value, typeData: obj.sizes, size: obj.sizes[0].size,
  //       img: data[5].values[0]["hivis-flags"][0].name, imgSrc: data[5].values[0]["hivis-flags"][0].img,
  //       textLines: obj.sizes[0].lines, textMaxLength: obj.sizes[0].maxLength, textPlaceholder: obj.sizes[0].placeholder
  //     });
  //   } else {
  //     // If it doesn't, set the form data with the selected type and its sizes
  //     setFormData({
  //       ...formData, type: event.target.value, typeData: obj.sizes, size: obj.sizes[0].size,
  //       textLines: obj.sizes[0].lines, textMaxLength: obj.sizes[0].maxLength, textPlaceholder: obj.sizes[0].placeholder
  //     });
  //   }
  // };

  const handleFlagTypeChange = (event) => {
    // Find the selected type from data array
    setFormData({ ...formData, img: { ...formData.img, type: event.target.value } });
  };

  const handleSaberTypeChange = (event) => {
    // Find the selected type from data array
    const obj = saberOptions.find(value => value.name === event.target.value);
    let newHiltColor = '';
    let newBladeColor = '';
    // console.log(formData.lightsaber.saberType.toLowerCase());
    switch (obj.name.toLowerCase()) {
      case 'darth vader':
        newHiltColor = fontColors[7];
        newBladeColor = fontColors[11];
        break;
      case 'luke skywalker':
        newHiltColor = fontColors[7];
        newBladeColor = fontColors[13];
        break;
      case 'obi wan kenobi':
        newHiltColor = fontColors[7];
        newBladeColor = fontColors[13];
        break;
      case 'mace windu':
        newHiltColor = fontColors[7];
        newBladeColor = fontColors[15];
        break;
      case 'count dooku':
        newHiltColor = fontColors[7];
        newBladeColor = fontColors[11];
        break;
      default:
        break;
    }

    setFormData({ ...formData, lightsaber: { ...formData.lightsaber, saberType: event.target.value, hilt: { ...formData.lightsaber.hilt, name: newHiltColor.name, color: newHiltColor.img, img: obj.hilt }, blade: { ...formData.lightsaber.blade, name: newBladeColor.name, color: newBladeColor.img, img: obj.blade } } });
  };
  // Define a function to handle the change of the font text color dropdown menu
  const handleHiltColorChange = (event) => {
    // Find the selected font text color from data array
    const obj = fontColors.find(value => value.name === event.name);
    var isProIR = false;
    var isReflectiveGlow = false;

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
    // Find the selected font text color from data array
    const obj = fontColors.find(value => value.name === event.name);
    var isProIR = false;
    var isReflectiveGlow = false;


    if (event.name.includes("Pro IR")) {
      isProIR = true;
    }
    if (event.name.includes("Reflective + Glow")) {
      isReflectiveGlow = true;
    }

    // Set the form data with the selected font text color and its image
    // setFormData({ ...formData, bladeColor: obj.name, bladeColorImg: obj.img, proIRFontColor: isProIR, reflectiveGlowFontColor: isReflectiveGlow });
    setFormData({ ...formData, lightsaber: { ...formData.lightsaber, blade: { ...formData.lightsaber.blade, name: obj.name, color: obj.img } }, upsells: { ...formData.upsells, proIRFontColor: isProIR, reflectiveGlowFontColor: isReflectiveGlow } });

  };

  // Define a function to handle the change of the text input field
  const handleTextChange = (event) => {
    //  setFormData({ ...formData, text: event.target.value });
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
    // setFormData({ ...formData, textAdditional: event.target.value });
    setFormData({ ...formData, text: { ...formData.text, secondary: { ...formData.text.secondary, text: event.target.value } } });
  };

  // Define a function to handle the change of the size dropdown menu
  const handleSizeChange = (event) => {
    const obj = patchType.config;
    const objSizes = obj.sizes.find(value => value.size === event.target.value);
    if (formData.type.toLowerCase() == "medical patch") {
      if (event.target.value == '1” x 1”') {
        // setFormData({
        //   ...formData,
        //   img: symbols['medical patch']["1 x 1"][0].name,
        //   imgSrc: symbols['medical patch']["1 x 1"][0].img,
        //   imgGlow: symbols['medical patch']["1 x 1"][0].glow,
        //   imgIcon: symbols['medical patch']["1 x 1"][0].icon,
        //   size: event.target.value,
        //   textLines: objSizes.lines, textMaxLength: objSizes.maxLength, textPlaceholder: objSizes.placeholder
        // });
        setFormData({
          ...formData,
          img: {
            ...formData.img,
            name: symbols['medical patch']["1 x 1"][0].name,
            img: symbols['medical patch']["1 x 1"][0].img,
            glow: symbols['medical patch']["1 x 1"][0].glow,
            icon: symbols['medical patch']["1 x 1"][0].icon,
          },
          size: {
            ...formData.size,
            current: event.target.value
          },
          text: {
            ...formData.text,
            primary: {
              ...formData.text.primary,
              lines: objSizes.lines,
              maxLength: objSizes.maxLength,
              placeholder: objSizes.placeholder
            }
          },
        });
      } else if (event.target.value == '3.5” x 2”') {
        // setFlagStyle(prevStyle => ({ ...prevStyle, transform: `scaleX(1.25)` }));
        setFormData({
          ...formData,
          img: {
            ...formData.img,
            name: symbols['medical patch']["2 x 2"][0].name,
            img: symbols['medical patch']["2 x 2"][0].img,
            glow: symbols['medical patch']["2 x 2"][0].glow,
            icon: symbols['medical patch']["2 x 2"][0].icon,
          },
          size: {
            ...formData.size,
            current: event.target.value
          },
          text: {
            ...formData.text,
            primary: {
              ...formData.text.primary,
              lines: objSizes.lines,
              maxLength: objSizes.maxLength,
              placeholder: objSizes.placeholder
            }
          },
        });
      } else {
        // setFormData({
        //   ...formData,
        //   img: symbols['medical patch']["2 x 2"][0].name,
        //   imgSrc: symbols['medical patch']["2 x 2"][0].img,
        //   imgGlow: symbols['medical patch']["2 x 2"][0].glow,
        //   imgIcon: symbols['medical patch']["2 x 2"][0].icon,
        //   size: event.target.value,
        //   textLines: objSizes.lines, textMaxLength: objSizes.maxLength, textPlaceholder: objSizes.placeholder
        // });
        setFormData({
          ...formData,
          img: {
            ...formData.img,
            name: symbols['medical patch']["2 x 2"][0].name,
            img: symbols['medical patch']["2 x 2"][0].img,
            glow: symbols['medical patch']["2 x 2"][0].glow,
            icon: symbols['medical patch']["2 x 2"][0].icon,
          },
          size: {
            ...formData.size,
            current: event.target.value
          },
          text: {
            ...formData.text,
            primary: {
              ...formData.text.primary,
              lines: objSizes.lines,
              maxLength: objSizes.maxLength,
              placeholder: objSizes.placeholder
            }
          },
        });
      }
    } else {
      // setFormData({
      //   ...formData, size: event.target.value,
      //   textLines: objSizes.lines, textMaxLength: objSizes.maxLength, textPlaceholder: objSizes.placeholder
      // });
      setFormData({
        ...formData,
        size: {
          ...formData.size,
          current: event.target.value
        },
        text: {
          ...formData.text,
          primary: {
            ...formData.text.primary,
            lines: objSizes.lines,
            maxLength: objSizes.maxLength,
            placeholder: objSizes.placeholder
          }
        },
      });
    }
  };

  // Define a function to handle the change of the font text color dropdown menu
  const handleTextColorChange = (event) => {
    // Find the selected font text color from data array
    const obj = fontColors.find(value => value.name === event.name);
    var isProIR = false;
    var isReflectiveGlow = false;

    if (event.name.includes("Pro IR")) {
      isProIR = true;
    }
    if (event.name.includes("Reflective + Glow")) {
      isReflectiveGlow = true;
    }

    // Set the form data with the selected font text color and its image
    //setFormData({ ...formData, textColor: event.name, textColorImg: obj.img, proIRFontColor: isProIR, reflectiveGlowFontColor: isReflectiveGlow });
    setFormData({ ...formData, text: { ...formData.text, color: { ...formData.text.color, name: event.name, img: obj.img } }, upsells: { ...formData.upsells, proIRFontColor: isProIR, reflectiveGlowFontColor: isReflectiveGlow } });

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
    switch (formData.type.toLowerCase()) {
      case 'medical patch':
        if (formData.size.current == '1” x 1”') {
          obj = symbols["medical patch"]['1 x 1'].find(value => value.name === event.name);
        } else {
          obj = symbols["medical patch"]['2 x 2'].find(value => value.name === event.name);
        }
        // Set the form data with the selected hivis flag and its image
        // setFormData({ ...formData, img: event.name, imgSrc: obj.img, imgIcon: obj.icon, imgGlow: obj.glow });
        setFormData({ ...formData, img: { ...formData.img, name: event.name, img: obj.img, icon: obj.icon, glow: obj.glow } });

        break;
      default:
        console.log(event.name);
        console.log(imgs["hi-vis"])
        obj = imgs["hi-vis"].find(value => value.name === event.name);
        console.log(obj)
        // Set the form data with the selected hivis flag and its image
        // setFormData({ ...formData, img: event.name, imgSrc: obj.img });
        setFormData({
          ...formData, img: {
            ...formData.img,
            name: event.name,
            img: obj.img
          }
        });
        break;
    }
  };

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    console.log(file);
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
    if (event.target.checked) {
      // setFormData({ ...formData, glowBorder: event.target.checked, price: formData.price.total + 10 });
      setFormData({
        ...formData,
        upsells: { ...formData.upsells, glowBorder: event.target.checked },
        price: { ...formData.price, total: formData.price.total + 10 }
      });
    } else {
      //setFormData({ ...formData, glowBorder: event.target.checked, price: formData.price.total - 10 });
      setFormData({
        ...formData,
        upsells: { ...formData.upsells, glowBorder: event.target.checked },
        price: { ...formData.price, total: formData.price.total - 10 }
      });
    }
  };
  // Define a function to handle the change of the comments checkbox
  const handleAgreementChange = (event) => {
    //  setFormData({ ...formData, agreement: event.target.checked });
    setFormData({
      ...formData,
      formValidation: { ...formData.formValidation, agreement: event.target.checked }
    });
  };
  const handleFlagReversedChange = (event) => {
    //   setFormData({ ...formData, flagReversed: event.target.checked });
    setFormData({
      ...formData,
      img: { ...formData.img, reversed: event.target.checked }
    });
  };

  const handleFlagEnabledChange = (event) => {
    //  setFormData({ ...formData, flagEnabled: event.target.checked });
    setFormData({
      ...formData,
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

    switch (formData.type.toLowerCase()) {
      case 'name tape':
        if ((formData.size.current == '4” x 1”' || formData.size.current == '5” x 1”')) {
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
          const index = steps.findIndex(step => step.name === flagStep.name);
          if (index === -1) {
            steps.splice(2, 0, flagStep);
          }
        } else {
          const flagStepIndex = steps.findIndex(step => step.name === 'Flag');
          if (flagStepIndex !== -1) {
            steps.splice(2, 1);
            // const newSteps = steps.filter(step => step.name !== 'Flag');
            // steps = newSteps;
          }
        }
        break;
      case 'medical patch':
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
          const index = steps.findIndex(step => step.name === flagStep.name);
          if (index === -1) {
            steps.splice(1, 0, flagStep);
          }
        } else {
          // console.log(steps);
          const textStepIndex = steps.findIndex(step => step.name === 'Text');
          // console.log(textStepIndex);

          if (textStepIndex !== -1) {
            steps.splice(1, 1);
            // const newSteps = steps.filter(step => step.name !== 'Text');
            // console.log(newSteps);
            // console.log(steps);
          }
        }
        break;
    }
  };

  // console.log(stepForm)

  return (
    <>
      <div className="space-y-6">
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
          {/* <p className="block text-md mt-0 font-bold" style={{ marginTop: '0 !important' }}>{stepForm.obj.name}</p> */}
          <p className="block text-md mt-0 font-bold">
            Step {stepForm.currentStep} / {stepForm.steps.length}
          </p>
        </div>
        <div className="grid grid-cols-6 gap-6 min-h-[13rem] xl:min-h-[14rem]">
          <div className="col-span-6 grid gap-4">
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
                      <Upload label="Upload" onChange={handleFileInputChange}/>
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
                  ) : input.id.toLowerCase() == "textcolor" ? (
                    <>
                      <AdvancedSelect
                        id="textColor"
                        title="Text Color"
                        name="textColor"
                        value={formData.text.color.name}
                        img={formData.text.color.img}
                        onChange={handleTextColorChange}
                        options={fontColors}
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
                  ) : input.id.toLowerCase() == "symbol" ? (
                    formData.size.current == '1” x 1”' ? (
                      <>
                        <AdvancedSelect
                          // id="bgColor"
                          title={formData.img.markType}
                          name={formData.img.markType}
                          value={formData.img.name}
                          img={formData.img.icon}
                          onChange={handleImgChange}
                          options={symbols["medical patch"]["1 x 1"]}
                        />
                      </>
                    ) : (
                      <>
                        <AdvancedSelect
                          // id="bgColor"
                          title={formData.img.markType}
                          name={formData.img.markType}
                          value={formData.img.name}
                          img={formData.img.icon}
                          onChange={handleImgChange}
                          options={symbols["medical patch"]["2 x 2"]}
                        />
                      </>
                    )
                  ) : input.id.toLowerCase() == "flag" ? (
                    <>
                      <AdvancedSelect
                        // id="bgColor"
                        title={formData.img.markType}
                        name={formData.img.markType}
                        value={formData.img.name}
                        img={formData.img.img}
                        onChange={handleImgChange}
                        options={imgs["lazer-cut"]["3x2"]}
                      />
                    </>
                  ) : input.id.toLowerCase() == "flagtype" ? (
                    <>
                      <div className="col-span-6">
                        <label htmlFor="type" className="block text-sm xl:text-lg font-medium">
                          Flag Type
                        </label>
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
                  ) : input.id.toLowerCase() == "hiltcolor" ? (
                    <>
                      <AdvancedSelect
                        id="hiltColor"
                        title="Hilt Color"
                        name="hiltColor"
                        value={formData.lightsaber.hilt.name}
                        img={formData.lightsaber.hilt.color}
                        onChange={handleHiltColorChange}
                        options={fontColors}
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
                        options={fontColors}
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
                        <div className="text-sm">
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
                        <div className="text-sm">
                          <label htmlFor="agreeLeadTime" className="ml-3 font-medium">
                            Do you want to reverse the flag?
                          </label>
                        </div>
                      </div>
                    </>
                  ) : input.id.toLowerCase() == "glowinthedark" ? (
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
                        <div className="text-sm">
                          <label htmlFor="agreeLeadTime" className="ml-3 font-medium">
                            Add a glow in the dark border? +$10 USD
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
                        <div className="text-sm">
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
        <FormButton formData={formData} config={config} handlePrevious={handlePrevious} handleNext={handleNext} currentStep={stepForm.currentStep} steps={stepForm.steps} />
      </div>
    </>
  );
}

function BuilderATC({ formData, className, config, currentStep, steps }) {
  const { product, analytics, storeDomain } = useLoaderData();
  const productAnalytics = {
    ...analytics.products[0],
    quantity: 1,
  };
  const firstVariant = product.variants.nodes[0];
  const selectedVariant = product.selectedVariant ?? firstVariant;

  const addOnVariantIDs = {
    "hi-vis": "gid://shopify/ProductVariant/42668958318750",
    "glow-border": "gid://shopify/ProductVariant/42668952420510",
    "reflective-glow-font-color": "gid://shopify/ProductVariant/42672795189406",
    "pro-ir-font-color": "gid://shopify/ProductVariant/42672794534046",
    "name-tape--flag": "",
  };

  function getCart(formData) {
    const lines = [
      {
        merchandiseId: selectedVariant.id,
        quantity: 1,
        attributes: getAttributes(),
      }
    ];
    if (formData.img.markType === "HiVis Flag") {

      lines.push({
        merchandiseId: addOnVariantIDs["hi-vis"],
        quantity: 1,
      });
    }
    if (formData.upsells.glowBorder) {

      lines.push({
        merchandiseId: addOnVariantIDs["glow-border"],
        quantity: 1,
      });
    }
    if (formData.text.color.name.includes("Pro IR")) {
      lines.push({
        merchandiseId: addOnVariantIDs["pro-ir-font-color"],
        quantity: 1,
      });
    }
    if (formData.text.color.name.includes("Reflective + Glow")) {
      lines.push({
        merchandiseId: addOnVariantIDs["reflective-glow-font-color"],
        quantity: 1,
      });
    }

    return lines;
  }
  function getAttributes() {
    const arr = [];
    // console.log(formData);
    arr.push(
      { key: "Size", value: formData.size.current },
      { key: "Price", value: formData.price.total + "" },
      { key: "Flag", value: formData.img.name },
      { key: "Mark Type", value: formData.img.markType || "n/a" },
      { key: "Flag Reversed?", value: formData.img.reversed ? "Yes" : "No" },
      { key: "Select Base Material", value: formData.text.color.name },
      { key: "Main Text", value: formData.text.primary.text || "Left Blank" },
      { key: "Fabric Pattern", value: formData.bgColor.name },
      { key: "Glow Border", value: formData.upsells.glowBorder ? "Yes" : "No" },
      { key: "Blood Type and Allergies", value: formData.text.secondary.text || "Left Blank" },
      { key: "I agree to the Lead Time", value: formData.formValidation.agreement ? "Yes" : "No" },
    );


    return arr;
  }


  const priceObj = {
    amount: formData.price.total + '.0',
    currencyCode: selectedVariant?.price.currencyCode,
  };

  let disabled = true;
  if (currentStep === steps.length && formData.formValidation.agreement) {
    disabled = false;
  }

  return (
    <>
      <AddToCartButton
        lines={getCart(formData)}
        variant="primary"
        data-test="add-to-cart"
        analytics={{
          products: [productAnalytics],
          totalValue: parseFloat(productAnalytics.price),
        }}
        className={className}
      // disabled={disabled}
      >
        <Text
          as="span"
          className={classNames(
            product.tags.includes("custom_patch") ? "justify-center" : "justify-between",
            "flex items-center gap-2 text-2xl xl:text-2xl")}
        >
          {
            currentStep === 1 ?
              <span>{config.patchBuilder.startingText}</span> :
              currentStep === steps.length ? <span>{config.addToCartText}</span> : <></>
          }
          <Money
            withoutTrailingZeros
            data={priceObj}
            as="span"
          />
        </Text>
      </AddToCartButton>
    </>
  );
}

function totalPrice() {

}


// Product details
function ProductDetails({ shippingPolicy, refundPolicy }) {
  const { product } = useLoaderData();
  const { descriptionHtml } = product;
  return (
    <div className="grid gap-4 py-4">
      {descriptionHtml && (
        <ProductDetail
          title="More Info"
          content={descriptionHtml}
        />
      )}
      {shippingPolicy?.body && (
        <ProductDetail
          title="Shipping"
          content={getExcerpt(shippingPolicy.body)}
          learnMore={`/policies/${shippingPolicy.handle}`}
        />
      )}
      {refundPolicy?.body && (
        <ProductDetail
          title="Returns"
          content={getExcerpt(refundPolicy.body)}
          learnMore={`/policies/${refundPolicy.handle}`}
        />
      )}
    </div>
  );
}

function FormButton({ formData, config, handlePrevious, handleNext, currentStep, steps }) {

  return (
    <>
      <div className="col-span-6 flex w-full font-bold text-white text-copy">
        <button
          type="button"
          className={classNames(
            currentStep === 1 ? "hidden" :
              currentStep === steps.length ? "flex-grow-1" : "",
            "transition flex-1 rounded-l-full items-center justify-center p-3 bg-contrast border-2 border-contrast hover:bg-white hover:text-contrast text-copy xl:text-2xl",
          )}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <div className={classNames(
          currentStep === 1 ? "rounded-l-full border-2 w-[60%]" :
            currentStep === steps.length ? "rounded-r-full border-2 w-[70%]" : "",
          "transition bg-transparent border-t-2 border-b-2 border-contrast font-bold px-2")}>
          <BuilderATC
            formData={formData}
            config={config}
            currentStep={currentStep}
            steps={steps}
            className={classNames(
              currentStep === 1 ? "" :
                currentStep === steps.length ? "" : "",
              "transition text-contrast flex-1 relative py-3 bg-transparent font-bold px-2")} />
        </div>
        <button
          type="button"
          className={classNames(
            currentStep === steps.length ? "hidden" :
              currentStep === 1 ? "flex-grow-1" : "",
            "transition flex-1 rounded-r-full items-center justify-center p-3 bg-contrast border-2 border-contrast hover:bg-white hover:text-contrast text-copy xl:text-2xl",
          )}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
}