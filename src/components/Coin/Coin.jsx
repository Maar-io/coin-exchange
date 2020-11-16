import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const TableData = styled.td`
    border: 1px solid;
    width: 25vh;
    color: dimgray;
    background-color: lightpink;
    text-align: center;
    margin: 50px auto 50px auto;
    font-size: 1.4rem;
    
`;
/*
display:inline-block;
border: 1px;
background-color: lightpink;
color: black;
*/
export default class Coin extends Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.handleRefresh(this.props.id)
    }

    render() {
        return (
            <tr>
                <TableData>{this.props.name}</TableData>
                <TableData>{this.props.ticker}</TableData>
                <TableData>${this.props.price}</TableData>
                {this.props.showBalance ? <TableData>{this.props.balance}</TableData> : null}
                <TableData>
                    <form action="">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </TableData>
            </tr>
        );
    }
}
Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}