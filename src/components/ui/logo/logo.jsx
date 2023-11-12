import { AppRoute } from '../../../const';
import { StyledLogo, StyledLogoMainPage } from './style';
import { useLocation } from 'react-router-dom';


function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage to={AppRoute.MAIN}>
      <img src='src/assets/logo.svg' width={398} height={44} />
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <img src='src/assets/logo.svg' width={398} height={44} />
    </StyledLogo>
  );
}

export default Logo;
