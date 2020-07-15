/**@jsx jsx */
import { useState, useEffect } from 'react';
import { jsx, useThemeUI } from 'theme-ui';
import { Link } from 'gatsby';
import Icon from '../../assests/svg';

const NavLink = ({ href, text, icon, footer }) => {
  const [hover, setHover] = useState(false);

  const isExternal = href.match(/^http/);
  const Component = isExternal ? 'a' : Link;
  const props = { [isExternal ? 'href' : 'to']: href };

  const { theme } = useThemeUI();

  useEffect(() => {
    if (window.location.pathname === href) {
      setHover(true);
    }
  }, [href]);

  return (
    <Component
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      activeStyle={
        !isExternal && footer
          ? { color: theme.colors.primary }
          : { background: theme.colors.primary }
      }
    >
      {icon && (
        <Icon name={icon} color={hover ? theme.colors.primary : 'white'} />
      )}
      {text}
    </Component>
  );
};

export default NavLink;
