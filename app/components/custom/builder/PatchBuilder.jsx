// Import React hooks and components
import { useState } from 'react';
import React from 'react';
import { useLoaderData } from '@remix-run/react';

import {
  Visualizer,
  PatchHeading,
  Form,
  ProductDetails
} from '~/components';



// Import data from the '~/data/visualizer.js' file
import data from '~/data/visualizer.js';
import builderData from '~/data/builder.js';

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

  // Destructure shop from useLoaderData and destructre shippingPolicy and refundPolicy from shop
  const { shop } = useLoaderData();
  const { shippingPolicy, refundPolicy } = shop;

  // Set initial state of FormData with useState hook
  const [formData, setFormData] = useState(initFormData(product));

  // Define a variable that sets a prestyle object with a width property
  var prestyle = {
    width: '300px'
  };

  return (
    <>
      <Visualizer formData={formData} className="" />
      <div className="sm:mt-auto sticky md:pr-4 xl:pr-16 md:-mb-nav md:top-nav md:-translate-y-nav md:pt-nav hiddenScroll md:overflow-y-scroll bg-white md:bg-transparent text-contrast border-2 border-t-2 border-l-2 border-r-2 border-black md:border-none rounded-t-2xl"
      >
        <section className="flex flex-col w-full max-w-[33rem] gap-6 p-7 lg:pb-0
            md:mx-auto md:px-0
            lg:">
          <PatchHeading formData={formData} />
          <Form formData={formData} setFormData={setFormData} data={data} config={config} product={product} />
          {/* <pre className="overflow-scroll" style={prestyle}>{JSON.stringify(formData, null, 2)}</pre> */}
          <ProductDetails shippingPolicy={shippingPolicy} refundPolicy={refundPolicy} />
        </section>
      </div>
    </>
  );
}

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

  // console.log(imgs["lazer-cut"]['3x2'].find(value => value.name == "USA"));

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
      //  console.log('hi')
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
