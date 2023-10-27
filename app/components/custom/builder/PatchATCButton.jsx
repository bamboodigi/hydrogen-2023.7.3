// Import React hooks and components
import React from 'react';
import { useLoaderData } from '@remix-run/react';
import {
  AddToCartButton, Text
} from '~/components';

import { Money } from '@shopify/hydrogen';


export function PatchATCButton({ formData, className, config, currentStep, steps, methods, ...props }) {
    const { product, analytics, storeDomain } = useLoaderData();
    
    const classNames = methods.helpers.utility.classNames;
    
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