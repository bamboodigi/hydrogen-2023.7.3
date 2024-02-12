// Import React hooks and components
import { useState, useEffect } from 'react';
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


// Patch Builder Component. This is the component that will show a tailored patch unique to the user's selections.
export function PatchBuilder({ product, productURL, config, searchParams, ...props }) {
  const initFormData = builderObj.init.formData;
  

  // Destructure shop from useLoaderData and destructre shippingPolicy and refundPolicy from shop
  const { shop } = useLoaderData();
  const { shippingPolicy, refundPolicy } = shop;

  // Set initial state of FormData with useState hook
  const [formData, setFormData] = useState(initFormData(product, searchParams));

  useEffect(() => {
    builderObj.helpers.update.totalPrice(formData, setFormData);
  }, [formData.img.enabled, formData.size.current, formData.formValidation.agreement, formData.upsells.glowBorder, formData.upsells.proIRFontColor, formData.upsells.reflectiveGlowFontColor, formData.upsells.hiVis, formData.upsells.badge]);

  // Define a variable that sets a prestyle object with a width property
  var prestyle = {
    width: '100%'
  };


  return (
    <>
      <Visualizer formData={formData} methods={builderObj} className="" />
      <div className="flex justify-center sm:mt-auto sticky md:pr-4 xl:pr-16 md:-mb-nav md:top-nav md:-translate-y-nav md:pt-nav hiddenScroll md:overflow-y-scroll bg-white md:bg-transparent text-contrast border-2 border-t-2 border-l-2 border-r-2 border-black md:border-none rounded-t-2xl">
        <section className="flex flex-col w-full max-w-[33rem] gap-6 p-7 lg:pb-0
            md:mx-auto md:px-0
            lg:">
          <PatchHeading formData={formData} methods={builderObj} />
          <Form formData={formData} productURL={productURL} setFormData={setFormData} data={data} config={config} product={product} methods={builderObj} />
          {/* <pre className="overflow-scroll max-w-full" style={prestyle}>{JSON.stringify(formData, null, 2)}</pre> */}
          <ProductDetails shippingPolicy={shippingPolicy} refundPolicy={refundPolicy} />
        </section>
      </div>
    </>
  );
}
