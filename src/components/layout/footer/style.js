import styled from 'styled-components';

export const StyledFooter = styled.footer `
  position: relative;
  display: flex;
  padding: 0 87px;
  margin: 0 auto;
  max-width: 1107px;
  height: ${(props) => props.theme.footerHeight};
  padding-top: 0;
  padding-bottom: 0;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 5;
`;

export const Copyright = styled.span `
  font-size: 18px;
  line-height: 27px;
`;
