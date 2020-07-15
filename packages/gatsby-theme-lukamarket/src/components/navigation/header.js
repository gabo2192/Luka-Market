/**@jsx jsx */
import { jsx } from 'theme-ui';
import Icon from '../assests/svg';

const Header = ({ handleNav, menuOpen }) => {
  return (
    <header sx={{ variant: 'layout.header' }}>
      <button onClick={handleNav}>
        <Icon name={menuOpen ? 'close' : 'menu'} />
      </button>
      <button>
        <Icon name="logo" />
      </button>
      <button>
        <Icon name="bag" />
      </button>
    </header>
  );
};

export default Header;
