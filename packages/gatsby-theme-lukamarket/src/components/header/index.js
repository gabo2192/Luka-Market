/**@jsx jsx */
import { jsx } from 'theme-ui';
import Icon from '../assests/svg';

const Header = () => (
  <header sx={{ variant: 'layout.header' }}>
    <button>
      <Icon name="menu" />
    </button>
    <button>
      <Icon name="logo" />
    </button>
    <button>
      <Icon name="bag" />
    </button>
  </header>
);

export default Header;
