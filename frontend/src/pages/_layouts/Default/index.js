import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from "shards-react";


import Header from '~/components/Header';
// import MainNavbar from "~/components/Navbar";
// import MainSidebar from "~/components/layout/MainSidebar/MainSidebar";
// import MainFooter from "~/components/layout/MainFooter";


// import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Container fluid>
    <Row>
      {/* <MainSidebar /> */}
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        <Header />
        {/* {!noNavbar && <MainNavbar />} */}
        {children}
        {/* {!noFooter && <MainFooter />} */}
      </Col>
    </Row>
  </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  noNavbar: PropTypes.bool,
  noFooter: PropTypes.bool
};
