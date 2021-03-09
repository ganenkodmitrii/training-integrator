import React from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useContext } from 'react';
import s from './Cart.module.css';

function Cart() {
  const { products, addToCart, removeFromCart, cartProductList } = useContext(ProductContext);

  return (
    <div>
      {Object.keys(cartProductList).length ? (
        <table className={s.transaction}>
          <thead className={s.thead}>
            <tr>
              <th>category</th>
              <th>name</th>
              <th>quantity</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody className={s.tbody}>
            {Object.keys(cartProductList).map((id) => (
              <tr className={s.list} key={id}>
                <td>{products[id].category.name}</td>
                <td>{products[id].name}</td>
                {!cartProductList[id] ? <td>0</td> : <td>{cartProductList[id]}</td>}
                <td>{products[id].price}</td>
                <td>
                  <button
                    onClick={() => {
                      addToCart(id);
                    }}
                  >
                    (+)Select
                  </button>
                  <button
                    onClick={() => {
                      removeFromCart(id);
                    }}
                  >
                    Remove(-)
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center' }}>Нет данных.</p>
      )}
    </div>
  );
}
export default Cart;
