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
const COIN_COUNT = 5;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: []
  }
  componentDidMount = () => {
    axios.get('https://api.coinpaprika.com/v1/coins')
    .then( response => {
        let coinData = response.data.slice(0, COIN_COUNT).map(function(coin) {
          return {
            key: coin.id,
            name: coin.name,
            ticker: coin.symbol,
            balance: 0,
            price: 0,
          };
        });
        this.setState({ coinData });
      });
  }
  handleVisibilityChange(){
    this.setState( function(oldState) {
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }
  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map( function( {ticker, name, price, balance} ) {
      let newPrice = price;
      if( valueChangeTicker === ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return{
        ticker,
        name,
        balance,
        price: newPrice      }
    });

    this.setState({ coinData: newCoinData});
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