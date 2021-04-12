import React, { useState } from 'react';

const SearchBar = ({ sortStocks, changeFilterType }) => {
  const [ sortOrder, setSortOrder ] = useState();

  const handleSortOrder = ({ target }) => {
    if (target.value === 'Price') {
      setSortOrder('price');
      sortStocks('price');
    } else {
      setSortOrder('name');
      sortStocks('name');
    };
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={sortOrder === 'name'} onChange={handleSortOrder}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={sortOrder === 'price'} onChange={handleSortOrder}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={({ target }) => changeFilterType(target.value)}>
          <option value="" selected>All stocks</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;