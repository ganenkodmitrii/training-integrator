import React from 'react';
// import { ProductContext } from '../../context/ProductContext';
// import { useState, useEffect } from 'react';
// import SortPrice from '../SortPrice/SortPrice';
import s from './ProductsList.module.css';

function ProductsList({ products }) {
  // console.log(ProductContext);
  return (
    <div>
      {products.length ? (
        <table className={s.transaction}>
          <thead className={s.thead}>
            <tr>
              <th>
                <select>
                  <option value="">сategory</option>
                  <option value="members">Members</option>
                  <option value="formed">Formed in</option>
                </select>
              </th>
              <th>name</th>
              <th>
                {/* <SortPrice price={sortOptions}  onChange={onSortOrderChange}  value={sortOrder} /> */}
                <select>
                  <option>price</option>
                  <option>price</option>
                  <option>price</option>
                </select>
              </th>
              <th>action</th>
              <th>add to cart</th>
            </tr>
          </thead>
          <tbody className={s.tbody}>
            {products.map((el) => (
              <tr className={s.list} key={el.id}>
                <td>{el.category.name}</td>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>
                  <button>(-)</button>Select<button>(+)</button>
                </td>
                <td>
                  <button>add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Нет данных.</p>
      )}
    </div>
  );
}
export default ProductsList;
