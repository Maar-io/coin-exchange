import React from 'react';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./polka-dot.png' alt="Polkadot logo" />
        <h1 className ="App-title">
          Polkadot Ecosystem prices
        </h1>
      </header>
      <AccountBalance amount={10000}/>
      <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          
            <Coin name="Polkadot" ticker="DOT" price={4.2}/>
            <Coin name="Kusama" ticker="KSM" price={38.4}/>
            <Coin name="Moonbeam" ticker="MOON" price={8.2}/>
            <Coin name="Acala" ticker="AKL" price={0.02}/>
          
          
        </tbody>
      </table>
    </div>
  )
}

export default App;