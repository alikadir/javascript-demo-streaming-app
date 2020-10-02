import React from 'react';

import Footer from './Footer';
import Header from './Header';
import RouteList from './RouteList';
import Content from './Content';

export default function MasterLayout(props) {
  return (
    <>
      <Header />
      <Content isPage={true}>
        <RouteList />
      </Content>
      <Footer />
    </>
  );
}
