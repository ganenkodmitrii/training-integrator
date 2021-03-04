import React from 'react';
import { useContext } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import { ProductContext } from '../../context/ProductContext';

function ProductsView() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1>Products</h1>
      <ProductsList products={products} />
    </div>
  );
}

export default ProductsView;
