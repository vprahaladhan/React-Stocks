import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    type: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(response => response.json())
      .then(stocks => this.setState({
        stocks,
        filteredStocks: stocks
      }))
  }

  addStockToPortfolio = stock => this.setState(prevState => {
    if (!prevState.portfolio.find(portfolioStock => portfolioStock.id === stock.id)) {
      return { 
        ...prevState, 
        portfolio: prevState.portfolio.concat(stock)
      }  
    }
  });

  sellStockFromPortfolio = stock => this.setState(prevState => {
    const portfolio = prevState.portfolio;
    const index = portfolio.findIndex(portfolioStock => portfolioStock.id === stock.id);
    portfolio.splice(index, 1);
    return { ...prevState, portfolio };  
  });

  sortStocks = order => {
    const sortByPrice = (order === 'price');
    this.setState(prevState => {
      const newState = { 
        ...prevState, 
        stocks: prevState.stocks.sort((a, b) => sortByPrice ? a.price - b.price : a.name.localeCompare(b.name)) 
      };
      return newState;
    });
  }

  filterStocks = type => this.setState({ type });

  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} changeFilterType={this.filterStocks} />
        <div className="row">
          <div className="col-8">
            <StockContainer stocks={this.state.stocks} sortStocks={this.addStockToPortfolio} type={this.state.type}/>
          </div>
          <div className="col-4">
            <PortfolioContainer portfolio={this.state.portfolio} onClick={this.sellStockFromPortfolio} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;