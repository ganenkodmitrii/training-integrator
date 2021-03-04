import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/productsAPI';

export const ProductContext = React.createContext({
  products: [],
  toggleCart: () => {},
  fetchProducts: () => {},
  setProductsList: () => {},
});

export default (props) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => {
      setProductsList(res);
      console.log(res);
    });
  }, []);

  const addToCart = (productId) => {
    console.log(productId);
    setProductsList((currentProductList) => {
      const prodIndex = currentProductList.findIndex((p) => p.id === productId);
      const newStatus = !currentProductList[prodIndex].isCartItem;
      const updatedProduct = [...productsList];
      updatedProduct[prodIndex] = {
        ...currentProductList[prodIndex],
        isCartItem: newStatus,
      };
      return updatedProduct;
    });
  };
  return (
    <ProductContext.Provider value={{ products: productsList, toggleCart: addToCart, fetchProducts, setProductsList }}>
      {props.children}
    </ProductContext.Provider>
  );
};
