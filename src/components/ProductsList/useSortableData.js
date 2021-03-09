import { useState, useMemo } from 'react';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (sortConfig.key === 'category') {
          if (a.category.name < b.category.name) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a.category.name > b.category.name) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
        }
        if (sortConfig.key === 'price') {
          if (a.price < b.price) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a.price > b.price) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default useSortableData;
