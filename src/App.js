import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import './App.sass';
import Header from './components/Header';
import Content from './components/Content';
import Form from './pages/Form';
import Welcome from './pages/Welcome';
import ThankYou from './pages/ThankYou';

const StyledApp = styled.div``;

const app = () => (
  <StyledApp>
    <Header />
    <Content>
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/form" component={Form} />
      <Route path="/thankyou" component={ThankYou} />
    </Switch>
    </Content>
  </StyledApp>
);

export default app;
