import React from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useContext } from 'react';
import useSortableData from './useSortableData';
import s from './ProductsList.module.css';

function ProductsList() {
  const { products, addToCart, removeFromCart } = useContext(ProductContext);

  const { items, requestSort, sortConfig } = useSortableData(products);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? s[sortConfig.direction] : undefined;
  };

  return (
    <div>
      {items.length ? (
        <table className={s.transaction}>
          <thead className={s.thead}>
            <tr>
              <th>
                <button type="button" onClick={() => requestSort('category')} className={getClassNamesFor('category')}>
                  category
                </button>
              </th>
              <th>name</th>
              <th>
                <button type="button" onClick={() => requestSort('price')} className={getClassNamesFor('price')}>
                  price
                </button>
              </th>
              <th>action</th>
            </tr>
          </thead>
          <tbody className={s.tbody}>
            {items.map((el) => (
              <tr className={s.list} key={el.id}>
                <td>{el.category.name}</td>
                <td>{el.name}</td>
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
                      removeFromCart(el.id);
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
export default ProductsList;
