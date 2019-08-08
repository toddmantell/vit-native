import React, { Component } from 'react';
import StocksContext from './StocksContext';

// Have to explicitly export the class so it can be unit tested (beyond the default export)
export class StocksProvider extends Component {
  state = {
    stocks: []
  };

  getUserStocks = async userName => {
    return [];
  };

  render() {
    return <StocksContext.Provider value={{ ...this }}>{this.props.children}</StocksContext.Provider>;
  }
}

export default StocksProvider;
