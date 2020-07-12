/**@jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Global } from '@emotion/core';
import Header from './header';

const Layout = ({ children }) => (
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
    <Header />
    <main sx={{ variant: 'layout.main' }}>{children}</main>
  </Styled.root>
);

export default Layout;
