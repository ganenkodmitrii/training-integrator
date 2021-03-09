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
  const [cartProductList, setCartProductList] = useState({});

  useEffect(() => {
    fetchProducts().then((res) => {
      setProductsList(res);
      // console.log(res);
    });
  }, []);

  const addToCart = (id) => {
    if (cartProductList[id]) {
      setCartProductList({ ...cartProductList, [id]: cartProductList[id] + 1 });
    } else {
      setCartProductList({ ...cartProductList, [id]: 1 });
    }
  };
  const removeToCart = (id) => {
    if (cartProductList[id]) {
      setCartProductList({ ...cartProductList, [id]: cartProductList[id] - 1 });
    }
    if (cartProductList[id] === 1) {
      delete cartProductList[id];
      setCartProductList({ ...cartProductList });
      // const { [id]: productToRemove, ...filterAddCartProductList } = cartProductList;
      // setCartProductList({ ...filterAddCartProductList });
    }
  };
  return (
    <ProductContext.Provider
      value={{ products: productsList, removeToCart, addToCart, fetchProducts, setProductsList, cartProductList }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
