/**@jsx jsx */
import { useState } from 'react';
import { jsx, Styled } from 'theme-ui';
import { Global } from '@emotion/core';
import Header from './navigation/header';
import MenuDrawer from './navigation/menu-drawer';
import Footer from './navigation/footer';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen((current) => !current);
  };
  return (
    <Styled.root style={{ background: 'white' }}>
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
          },
          'html,body': {
            margin: 0,
          },
          '.visually-hidden': {
            position: 'absolute !important',
            height: '1px',
            width: '1px',
            overflow: 'hidden',
            clip: 'rect(1px, 1px, 1px, 1px)',
            whiteSpace: 'nowrap',
          },
        }}
      />
      <Header handleNav={handleNav} menuOpen={menuOpen} />
      <MenuDrawer menuOpen={menuOpen} handleNav={handleNav} />
      <main sx={{ variant: 'layout.main' }}>{children}</main>
      <Footer />
    </Styled.root>
  );
};

export default Layout;
