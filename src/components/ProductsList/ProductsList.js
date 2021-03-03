import React from 'react';
import s from './ProductsList.module.css';
function ProductsList({ products }) {
  if (!products || products.length === 0) return <p>Нет данных.</p>;

  return (
    // const { id, name, category, price, select } = el;
    <div>
      <table className={s.transaction}>
        <thead className={s.thead}>
          <tr>
            <th>Category</th>
            <th>name</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {products.map((el) => (
            <tr className={s.list} key={el.id}>
              <td>{el.category.name}</td>
              <td>{el.name}</td>
              <td>{el.price}</td>
              <td>{el.select}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ProductsList;
