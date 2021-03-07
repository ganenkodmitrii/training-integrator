import React, { useContext } from 'react';
// import { ProductContext } from '../../context/ProductContext';

const Cart = (products) => {
  return (
    <React.Fragment>
      <h3>Cart Item</h3>
      <nav>
        <ul>
          {/* {cartItems.map((item) => (
            <li key={item.id}>
              <h5>{item.title} :<span>$ {item.price}</span></h5>
            </li>
          ))} */}
        </ul>
        {/* <h5>Total :{totalAmount}</h5> */}
      </nav>
    </React.Fragment>
  );
};

export default Cart;
