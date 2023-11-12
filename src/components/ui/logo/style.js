import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const logoStyle  = css `
  padding: 7px 0 0;
`;

export const StyledLogo = styled(Link) `
  ${logoStyle}
`;

export const StyledLogoMainPage = styled.span `
  ${logoStyle}
`;
