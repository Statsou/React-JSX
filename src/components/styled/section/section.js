import styled from 'styled-components';

export const Section = styled.section `
  max-width: ${(props) => props.theme.pageWidth};
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  margin: 0 auto;
`;
