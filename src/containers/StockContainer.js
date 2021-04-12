import React, { Component } from 'react';

import Stock from '../components/Stock'

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          !this.props.type ? 
            this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} onClick={this.props.onClick} />) :
            this.props.stocks.filter(stock => stock.type.includes(this.props.type)).map(stock => <Stock key={stock.id} stock={stock} onClick={this.props.onClick} />)
        }
      </div>
    );
  }

}

export default StockContainer;
