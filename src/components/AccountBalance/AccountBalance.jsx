import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    width: 100vh;
    font-size: 3rem;
    text-align: right;
    color: white;
`;

export default function AccountBalance (props) {
    const buttonText = props.showBalance ? 'Hide balance': 'Show balance';
    let content = null;
    if ( props.showBalance ) {
        content = <>Balance: $ {props.amount}</>
    }

    return (
        <Section>
            {content}
            <button onClick={props.handleVisibilityChange}>{buttonText}</button>
        </Section>
    )
    
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}