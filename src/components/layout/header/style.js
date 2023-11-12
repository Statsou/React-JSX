import styled from 'styled-components';

export const StyledHeader = styled.header `
  position: relative;

  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  max-width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  height: ${(props) => props.theme.headerHeight};
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);

  z-index: 5;
`;
