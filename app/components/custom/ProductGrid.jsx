import { Button, Grid, ProductCard, Link } from '~/components';
import { getImageLoadingPriority } from '~/lib/const';
import { useFetcher } from '@remix-run/react';
import { useEffect, useState } from 'react';

export function ProductGrid({ url, collection, ...props }) {
  const [initialProducts, setInitialProducts] = useState(
    collection?.products?.nodes || [],
  );

  const [nextPage, setNextPage] = useState(
    collection?.products?.pageInfo?.hasNextPage,
  );
  const [endCursor, setEndCursor] = useState(
    collection?.products?.pageInfo?.endCursor,
  );
  const [products, setProducts] = useState(initialProducts);

  // props have changes, reset component state
  const productProps = collection?.products?.nodes || [];
  if (initialProducts !== productProps) {
    setInitialProducts(productProps);
    setProducts(productProps);
  }

  const fetcher = useFetcher();

  function fetchMoreProducts() {
    fetcher.load(`${url}?index&cursor=${endCursor}`);
  }

  useEffect(() => {
    if (!fetcher.data) return;

    const { collection } = fetcher.data;

    setProducts((prev) => [...prev, ...collection.products.nodes]);
    setNextPage(collection.products.pageInfo.hasNextPage);
    setEndCursor(collection.products.pageInfo.endCursor);
  }, [fetcher.data]);

  const haveProducts = initialProducts.length > 0;

  if (!haveProducts) {
    return (
      <>
        <p>No products found on this collection</p>
        <Link to="/products">
          <p className="underline">Browse catalog</p>
        </Link>
      </>
    );
  }

  return (
    <>
      {/* <div className="flex items-center justify-center mb-6">
                  <Button as={PreviousLink} variant="secondary" width="full">
                    {isLoading ? 'Loading...' : 'Load previous'}
                  </Button>
                </div> */}
      <Grid items={3} layout="products" {...props}>
        {products.map((product, i) => (
          !product.tags.includes("custom_patch") ? (
            <ProductCard
              key={product.id}
              product={product}
              loading={getImageLoadingPriority(i)}
              quickAdd={true}
            />
          ) : (
            <ProductCard
              key={product.id}
              product={product}
              loading={getImageLoadingPriority(i)}
            />
          )
        ))}
      </Grid>
      {nextPage && (
        <div className="flex items-center justify-center mt-6">
          <Button as={NextLink} variant="secondary" width="full">
            {isLoading ? 'Loading...' : 'Load more products'}
          </Button>
        </div>
      )}
    </>
  );
}
