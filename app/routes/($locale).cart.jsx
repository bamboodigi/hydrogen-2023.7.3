import { Await, useMatches } from '@remix-run/react';
import invariant from 'tiny-invariant';

import { json } from '@shopify/remix-oxygen';
import { CartForm } from '@shopify/hydrogen';


import { isLocalPath } from '~/lib/utils';
import { Cart, Container } from '~/components';


export async function action({ request, context }) {

  const { session, cart } = context;

  const [formData, customerAccessToken] = await Promise.all([
    request.formData(),
    session.get('customerAccessToken'),
  ]);

  const { action, inputs } = CartForm.getFormInput(formData);
  invariant(action, 'No cartAction defined');

  // if (isPatchBuilder(action, inputs)) {
  //   const apiUrl = "https://hcti.io/v1/image";

  //   const apiJson = {
  //     html: "<div class='test'>Hello!</div>",
  //     css: ".test { background-color: green; }"
  //   };

  //   const username = "8cbaa641-7825-4ba5-b109-8d649d4bfa10";
  //   const password = "ca03849c-eb30-415b-b54d-aa22bc33deae";

  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(apiJson),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Basic ' + btoa(username + ":" + password)
  //     }
  //   }


  //   const res = await fetch(apiUrl, options).catch((error) => {
  //     console.error(error);
  //   });

  //   //     // console.log(await res.text());

  //   //     // const jsonString = '{"url":"https://hcti.io/v1/image/cbf786ed-0569-43e6-89a6-de32c11fbffa"}';
  //   const obj = JSON.parse(await res.text());

  //   const tempObj = {
  //     key: 'Preview', value: obj.url
  //   };

  //   console.log(tempObj);

  //   inputs.lines[0].attributes.push(tempObj);



  //   // if (res.ok) {
  //   //   console.log("Fetch request successful!");
  //   // }

  //   // const data = await res.json();

  //   // // const prunedData = data.map((record) => {
  //   // //   console.log(data);
  //   // //   return record;
  //   // //   // return {
  //   // //   //   id: record.id,
  //   // //   //   title: record.title,
  //   // //   //   formattedBody: escapeHtml(record.content),
  //   // //   // };
  //   // // });
  //   // console.log(data);
  // }


  let status = 200;
  let result;

  switch (action) {
    case CartForm.ACTIONS.LinesAdd:
      result = await cart.addLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesUpdate:
      result = await cart.updateLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesRemove:
      result = await cart.removeLines(inputs.lineIds);
      break;
    case CartForm.ACTIONS.DiscountCodesUpdate:
      const formDiscountCode = inputs.discountCode;

      // User inputted discount code
      const discountCodes = formDiscountCode ? [formDiscountCode] : [];

      // Combine discount codes already applied on cart
      discountCodes.push(...inputs.discountCodes);

      result = await cart.updateDiscountCodes(discountCodes);
      break;
    case CartForm.ACTIONS.BuyerIdentityUpdate:
      result = await cart.updateBuyerIdentity({
        ...inputs.buyerIdentity,
        customerAccessToken,
      });
      break;
    default:
      invariant(false, `${action} cart action is not defined`);
  }

  /**
   * The Cart ID may change after each mutation. We need to update it each time in the session.
   */
  const cartId = result.cart.id;
  const headers = cart.setCartId(result.cart.id);

  const redirectTo = formData.get('redirectTo') ?? null;
  if (typeof redirectTo === 'string' && isLocalPath(redirectTo)) {
    status = 303;
    headers.set('Location', redirectTo);
  }

  const { cart: cartResult, errors } = result;

  return json(
    {
      cart: cartResult,
      errors,
      analytics: {
        cartId,
      },
    },
    { status, headers },
  );
}

export async function loader({ context }) {
  const { cart } = context;
  return json(await cart.get());
}

export default function CartRoute() {
  const [root] = useMatches();
  // @todo: finish on a separate PR
  return (
    <Container>
      <div className="grid w-full gap-8 p-6 py-8 md:p-8 lg:p-12 justify-items-start">
        <Await resolve={root.data?.cart}>
          {(cart) => <Cart layout="page" cart={cart} />}
        </Await>
      </div>
    </Container>
  );
}

function isPatchBuilder(action, inputs) {
  if (action == "LinesAdd") {
    if (inputs.lines[0].attributes?.length > 0) {
      return true;
    }
  }
}