import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FeedbackImage from '../assets/check.png';

const FieldContainer = styled.div.attrs(props => ({
    className: "field",
}))``;

const Label = styled.label.attrs(props => ({
    className: "label",
}))`
    color: #363636;
    font-weight: 500;
    font-size: 15px;
`;

const InputControl = styled.div.attrs(props => ({
    className: "control has-icons-right",
}))``;

const Input = styled.input.attrs(props => ({
    className: "input",
}))`
    border: solid 1px #000;
    /* padding: 10px;
    border-radius: 2px;
    font-size: 14px;
    height: 40px; */
    box-shadow: ${props => props.invalid ? '0 2.5px 2px red' : undefined};
    
    ::placeholder{
        font-size: 12px;
        font-size: 600;
        color: #999;
        font-style: italic;
    }
    &:active,
    &:focus {
        text-align: left;
        box-shadow: 0 2.5px 2px ${props => props.invalid ? 'red' : 'rgba(10,10,10,.5)'};
    }
`;

const HelpText = styled.p`
    display: block;
    font-size: .75rem;
    margin-top: .25rem;
    color: ${props => props.invalid ? 'red' : 'inherit'};
`;

const SuccessFeedback = () => {
    const Span = styled.span``;
    return (
        <Span className="icon is-right">
            <img src={FeedbackImage}></img>
        </Span>
    );
};

const Field = (props) => {
    let { name, value, placeholder, onChange, onBlur, label, type, errorText, touched } = props;

    return (
        <FieldContainer>
            <Label>{label}</Label>
            <InputControl>
                <Input
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    type={type}
                    invalid={touched && errorText}
                />
                {touched && !errorText && <SuccessFeedback />}
            </InputControl>
            {touched && errorText && <HelpText className="help is-danger">{errorText}</HelpText>}
        </FieldContainer>
    );
};

export default Field;