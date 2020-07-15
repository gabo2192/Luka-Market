/**@jsx jsx */
import { jsx } from 'theme-ui';
import NavLink from './nav-link';

const NavLinks = ({ pages, footer }) => {
  return (
    <nav sx={{ variant: footer ? 'layout.footer' : 'layout.nav' }}>
      {pages.map((page) => (
        <NavLink
          key={page.text}
          href={page.href}
          text={page.text}
          icon={page.icon}
          footer={footer}
        />
      ))}
    </nav>
  );
};

export default NavLinks;
