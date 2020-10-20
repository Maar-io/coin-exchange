import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    width: 100vh;
    font-size: 2rem;
    text-align: right;

`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
                Balance: $ {this.props.amount}
            </Section>
        )
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}