import React from 'react';
import styled from 'styled-components';
import background from '../assets/OFC16_Cafe_018_1600.png';

const AppContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 12vh;
    min-height: 88vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-blend-mode: saturation;
    background-color: rgba(175, 175, 175, 0.45);
`;

const Content = (props) => (
    <AppContent>
        {props.children}
    </AppContent>
);

export default Content;