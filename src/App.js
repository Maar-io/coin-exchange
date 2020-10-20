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
      coinData: [
        {
          name: 'Polkadot',
          ticker: 'DOT',
          price: 4.2
        },
        {
          name: 'Kusama',
          ticker: 'KSM',
          price: 38.1
        },
        {
          name: 'Darwinia',
          ticker: 'RING',
          price: 0.031
        },
        {
          name: 'Sora',
          ticker: 'XOR',
          price: 57.1
        }
      ]
    }
  }

  render(){
    return (
      <StyledDiv>
        <AppHeader/>
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData}/>
      </StyledDiv>
  )
  }
  
}

export default App;