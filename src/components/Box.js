import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div.attrs(attrs => ({
    className: (attrs.primary ? "is-primary" : "") + " box",
}))`
    max-width: ${props => props.maxWidth };
    background-color: ${props => props.primary ? '#40de5de8' : '#f1efeee8'};
    box-sizing: border-box;
    border-radius: 0;
    z-index: 98;
`;

const Box = (props) => {
    return (
        <StyledBox 
            primary={props.primary}
            maxWidth={props.width}
        >
            {props.children}
        </StyledBox>
    );
};

export default Box;