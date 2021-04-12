import React from 'react'

const Stock = ({ stock, onClick, sell, onDelete }) => (
  <div>
    <div className="card" onClick={() => sell ? onDelete(stock) : onClick(stock)}>
      <div className="card-body">
        <h5 className="card-title">
          {stock.name}
        </h5>
        <p className="card-text">
          {stock.ticker}: {stock.price}
        </p>
      </div>
    </div>
  </div>
);

export default Stock;