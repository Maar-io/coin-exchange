import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './logo.png';
import './AppHeader.css'

export default class AppHeader extends Component {
    render() {
        return (
          <header className="Header">
          <img src={logo} alt="Substrate logo" className="App-logo" />
            <h1 className="Title">
              Substrate Ecosystem prices
            </h1>
          </header>
        )
    }
}
