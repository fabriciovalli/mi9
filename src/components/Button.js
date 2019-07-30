import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button.attrs( ({className, buttonType}) => ({
    type: buttonType || undefined,
    className: "button is-outlined",
}))`
    width: 150px;
    background-color: ${props => props.primary ? '#40de5d' : undefined};
    color: ${props => props.primary ? 'white' : undefined};
    float: right;

    ::hover {
        color: ${props => props.primary ? 'white' : undefined};
    }
`;

const Button = (props) => {
    return (
        <StyledButton 
            primary={props.primary}
            buttonType={props.buttonType}
            onClick={props.onClick}
        >
            {props.children}
        </StyledButton>
    );
};

export default Button;