// Import React hooks and components
import React from 'react';
import { useLoaderData } from '@remix-run/react';
import {
  ProductDetail,
} from '~/components';
import { getExcerpt } from '~/lib/utils';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Product details
export function ProductDetails({ shippingPolicy, refundPolicy }) {
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