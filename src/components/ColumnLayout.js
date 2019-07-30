import React from 'react';
import styled from 'styled-components';

const Columns = styled.div.attrs(props => ({
    className: "columns is-multiline",
}))``;


const ColumnLayout = (props) => <Columns>{props.children}</Columns>

export default ColumnLayout;