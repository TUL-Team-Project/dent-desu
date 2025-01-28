import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
  <Container className="mw-100">
    {props.children}
  </Container>
)

export default Layout;