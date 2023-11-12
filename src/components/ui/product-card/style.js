import styled from 'styled-components';

export const Card = styled.div `
  display: grid;
  grid-template-columns: 248px 1fr;

  padding: 19px;
  gap: 13px 20px;
`;

export const Image = styled.img `
  width: 248px;
  height: 248px;

  grid-row: span 2;
`;
