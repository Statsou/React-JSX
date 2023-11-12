import Logo from '../../ui/logo/logo';
import Navigation from '../navigation/navigation';
import { StyledHeader } from './style';

function Header() {
  return (
  <StyledHeader>
    <Logo />
    <Navigation />
  </StyledHeader>
  );
}

export default Header;
