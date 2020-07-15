/**@jsx jsx */
import { Fragment } from 'react';
import { jsx } from 'theme-ui';
import { useAuth0 } from '@auth0/auth0-react';
import NavLinks from './nav-links/nav-links';
import Backdrop from '../ui/backdrop';

const MenuDrawer = ({ menuOpen, handleNav }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const pages = [
    {
      href: '/restaurantes',
      text: 'Home',
    },
    {
      href: '/restaurantes/tiendas',
      text: 'Restaurantes',
    },
    {
      href: '/app',
      text: 'Mi Cuenta',
    },
    {
      href: '/app/vender',
      text: 'Comenzar a vender',
    },
  ];
  return (
    <Fragment>
      <div
        sx={{
          height: 'calc(100vh - 64px)',
          width: ['100vw', 'max-content'],
          position: 'fixed',
          top: 64,
          left: 0,
          p: 4,
          bg: 'white',
          transition: 'cubic-bezier(.17,.67,.83,.67)',
          transitionDuration: '200ms',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
          visibility: menuOpen ? 'visible' : 'hidden',
          boxShadow:
            '4px 0 4px rgba(96, 97, 112, 0.16), 1px 0px 0px rgba(40, 41, 61, 0.04);',
          zIndex: '200',
          display: 'grid',
          gridTemplateRows: '1fr 64px',
        }}
      >
        <NavLinks pages={pages} />
        {!isAuthenticated ? (
          <button
            sx={{ variant: 'button.navigation', borderRadius: 0 }}
            onClick={() =>
              loginWithRedirect({
                appState: { targetUrl: window.location.pathname },
              })
            }
          >
            Iniciar sesión
          </button>
        ) : (
          <button
            sx={{ variant: 'button.navigation', borderRadius: 0 }}
            onClick={() => logout()}
          >
            Cerrar sesión
          </button>
        )}
      </div>
      {menuOpen && <Backdrop handleClick={handleNav} />}
    </Fragment>
  );
};

export default MenuDrawer;
