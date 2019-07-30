import React from 'react';
import styled from 'styled-components';
import Box from '../components/Box';
import ColumnLayout from '../components/ColumnLayout';

const Title = styled.h1.attrs(props => ({
    className: "title has-text-centered has-text-primary",
}))`
    font-size: 4rem;
    font-weight: 700;
`;

const ThankYou = () => {
    return (
        <Box>
            <ColumnLayout>
                <div className="column is-full">
                    <Title>Thank You</Title>
                </div>
            </ColumnLayout>
        </Box>
    );
};

export default ThankYou;