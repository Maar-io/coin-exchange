import React from 'react';
//import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: #282c34;
    align-items: center;
    color: lightpink;
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      showBalance: true,
      coinData: [
        {
          name: 'Polkadot',
          ticker: 'DOT',
          price: 4.2,
          balance: 150
        },
        {
          name: 'Kusama',
          ticker: 'KSM',
          price: 38.1,
          balance: 3
        },
        {
          name: 'Darwinia',
          ticker: 'RING',
          price: 0.031,
          balance: 101
        },
        {
          name: 'Sora',
          ticker: 'XOR',
          price: 57.1,
          balance: 0
        
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
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