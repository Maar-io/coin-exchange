import React, { Component } from 'react'
import styled from 'styled-components'


const Header = styled.header`
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  text-align: center;
  color: white;
`;

export default class AppHeader extends Component {
    render() {
        return (
          <Header>
            <img src='./polka-dot.png' alt="Polkadot logo" />
            <h1 className ="App-title">
              Polkadot Ecosystem prices
            </h1>
          </Header>
        )
    }
}
