import React from 'react';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

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
    <div className="App">
      <header className="App-header">
        <img src='./polka-dot.png' alt="Polkadot logo" />
        <h1 className ="App-title">
          Polkadot Ecosystem prices
        </h1>
      </header>
      <AccountBalance amount={this.state.balance}/>
      <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          
          {
            this.state.coinData.map( ({name, ticker, price}) =>
              <Coin key={ticker} name={name} ticker = {ticker} price={price}/>
            )
          }
        </tbody>
      </table>
    </div>
  )
  }
  
}

export default App;