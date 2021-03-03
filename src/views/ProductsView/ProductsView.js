import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProducts } from '../../services/productsAPI';
import ProductsList from '../../components/ProductsList/ProductsList';

function ProductsView() {
  const [products, setProducts] = useState([]);
  //   //   const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res);
      console.log(res);
    });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <ProductsList products={products} />
    </div>
  );
}

export default ProductsView;
