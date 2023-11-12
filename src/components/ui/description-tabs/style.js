import styled from 'styled-components';

export const Content = styled.p `
  margin: 0 0 18px;
`;

export const Price = styled.span `
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;

  width: fit-content;
  padding: 6px 8px;

  background-color: ${(props) => props.theme.colorForLightBlue};
`;
