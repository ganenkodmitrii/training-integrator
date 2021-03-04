import React from 'react';
export default function SortPrice({ price, value, onChange }) {
  return (
    <select value={value} onChange={(evt) => onChange(evt.target.value)}>
      {price.map((el) => (
        <option key={el.value} value={el.value}>
          {el.label}
        </option>
      ))}
    </select>
  );
}
