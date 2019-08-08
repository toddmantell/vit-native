import React, { Component } from 'react';
import UserContext from './index';
import PropTypes from 'prop-types';
import axios from 'axios';

class UserProvider extends Component {
  state = {
    user: {
      id: undefined,
      name: undefined,
      stocks: [],
      watchList: []
    }
  };

  componentDidMount = async () => {
    const user = await this.getUser('Todd');

    this.setState({ user });
  };

  addToWatchList = stockToAdd => {
    const { stocks } = this.state.user;

    if (stockToAdd) {
      // make api call to add to the db, then update state
      const updatedWatchList = [...stocks, stockToAdd];
      console.log('watch list', updatedWatchList);

      return this.setState({ user: { stocks: updatedWatchList } });
    }

    throw new Error('Unable to add a stock');
  };

  getUser = async userName => {
    try {
      const { data: user } = await axios.get(`http://localhost:5000/api/user/${userName}`);
      return user;
    } catch (error) {
      console.log(`An error occurred in getUser: ${error}`);
    }
  };

  removeFromWatchlist = stockToRemove => {
    const { stocks } = this.state.user;
    // should remove it from the db, then send back the updated array (but shouldn't be the full array of objects, that's too much stuff)
    // const updatedStocks = await axios.post(api/stocks/remove)
    const updatedStocks = [...stocks.filter(stock => stock.companyName !== stockToRemove.companyName)];
    this.setState({ user: { stocks: updatedStocks } });
  };

  render() {
    return <UserContext.Provider value={{ ...this }}>{this.props.children}</UserContext.Provider>;
  }
}

UserProvider.propTypes = {};

export default UserProvider;
