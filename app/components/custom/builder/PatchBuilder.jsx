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

import builderObj from '~/data/builderObj.js';

const { 
  bgColors,
  fontColors,
  imgs,
  symbols,
  saberOptions, 
} = builderObj.data;

const initFormData = builderObj.init.formData;

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
