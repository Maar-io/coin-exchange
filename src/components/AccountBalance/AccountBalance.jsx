import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    width: 100vh;
    font-size: 3rem;
    text-align: right;
    color: white;
`;

export default class AccountBalance extends Component {
    render() {
        const buttonText = this.props.showBalance ? 'Hide balance': 'Show balance';
        let content = null;
        if ( this.props.showBalance ) {
            content = <>Balance: $ {this.props.amount}</>
        }

        return (
            <Section>
                {content}
                <button onClick={this.props.handleVisibilityChange}>{buttonText}</button>
            </Section>
        )
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}