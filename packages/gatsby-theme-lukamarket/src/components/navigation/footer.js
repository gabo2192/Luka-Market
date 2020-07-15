/**@jsx jsx */
import { jsx } from 'theme-ui';
import NavLinks from './nav-links/nav-links';

const Footer = () => {
  const pages = [
    {
      href: '/restaurantes',
      text: 'Home',
      icon: 'icon-logo',
    },
    {
      href: '/restaurantes/search',
      text: 'Buscar',
      icon: 'search',
    },
    {
      href: '/restaurantes/favoritos',
      text: 'Favoritos',
      icon: 'heart',
    },
    {
      href: '/app',
      text: 'Mi Cuenta',
      icon: 'user',
    },
  ];
  return (
    <div
      sx={{
        display: [null, null, 'none'],
        position: 'fixed',
        bottom: 0,
        height: 64,
        width: '100%',
        bg: 'dark.3',
        p: 2,
      }}
    >
      <NavLinks pages={pages} footer></NavLinks>
    </div>
  );
};

export default Footer;
