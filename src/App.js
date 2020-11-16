import React from 'react';
//import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import styled from 'styled-components'
import axios from 'axios';

const StyledDiv = styled.div`
    background-color: #282c34;
    align-items: center;
    color: lightpink;
`;
const COIN_COUNT = 6;
const COIN_URL = 'https://api.coinpaprika.com/v1/coins';
const TICKER_URL = 'https://api.coinpaprika.com/v1/tickers/';

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [ ]
  }

  componentDidMount = async () => {
    const response = await axios.get(COIN_URL)
    const coinIds = response.data.slice(0, COIN_COUNT).map( coin => coin.id );
    const promises = coinIds.map( id => axios.get( TICKER_URL + id ));
    const coinData = await Promise.all( promises );
    const newCoinData = coinData.map( function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(Number(coin.quotes.USD.price).toFixed(2)),
      };
    });
    this.setState({ coinData: newCoinData });
  }

  handleVisibilityChange = () => {
    this.setState( function(oldState) {
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }

  handleRefresh = async (valueChangeTicker) => {
    const keyData =  await axios.get( TICKER_URL + valueChangeTicker);
    
    const newCoinData = this.state.coinData.map( function( values ) {
      let newValues = {...values};
      if (values.key === valueChangeTicker) {
        newValues.price = parseFloat(Number( keyData.data.quotes["USD"].price ).toFixed(4));
      };
      return newValues;
    });
    this.setState({ coinData: newCoinData });
  }

  render() {
    return (
      <StyledDiv>
        <AppHeader/>
        <AccountBalance amount={this.state.balance} 
            showBalance={this.state.showBalance} 
            handleVisibilityChange={this.handleVisibilityChange}/>
        <CoinList coinData={this.state.coinData} 
            showBalance = {this.state.showBalance}
            handleRefresh={this.handleRefresh}/>
      </StyledDiv>
  );
  }
  
}

export default App;