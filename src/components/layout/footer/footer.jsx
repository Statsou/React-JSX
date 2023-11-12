import Logo from '../../ui/logo/logo';
import { StyledFooter, Copyright } from './style';

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Copyright>Создано 2023</Copyright>
    </StyledFooter>
    );
}

export default Footer;
