import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductsList from '../../components/ProductsList/ProductsList';

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
