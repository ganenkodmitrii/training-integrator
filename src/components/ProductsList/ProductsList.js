import React from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useContext } from 'react';
// import SortPrice from '../SortPrice/SortPrice';
import s from './ProductsList.module.css';

function ProductsList({ products }) {
  const { addToCart, removeToCart, cartProductList } = useContext(ProductContext);

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
              <th>quantity</th>
              <th>
                {/* <SortPrice price={sortOptions}  onChange={onSortOrderChange}  value={sortOrder} /> */}
                <select>
                  <option>price</option>
                  <option>price</option>
                  <option>price</option>
                </select>
              </th>
              <th>action</th>
            </tr>
          </thead>
          <tbody className={s.tbody}>
            {products.map((el) => (
              <tr className={s.list} key={el.id}>
                <td>{el.category.name}</td>
                <td>{el.name}</td>
                {!cartProductList[el.id] ? <td>0</td> : <td>{cartProductList[el.id]}</td>}
                <td>{el.price}</td>
                <td>
                  <button
                    onClick={() => {
                      addToCart(el.id);
                    }}
                  >
                    (+)Select
                  </button>
                  <button
                    onClick={() => {
                      removeToCart(el.id);
                    }}
                  >
                    Remove(-)
                  </button>
                  <button></button>
                  <button></button>
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
