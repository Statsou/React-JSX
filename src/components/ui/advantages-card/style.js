import styled from 'styled-components';
import Title from '../../ui/title/title';

export const Article = styled.article `
  text-align: start;

  display: grid;
  grid-template-columns: 56px 1fr;
  padding: 20px;

  gap: 4px 20px;
`;

export const Icon = styled.figure `
  margin: 0;
  padding: 0;
`;

export const CardTitle = styled(Title) `
  grid-column: 2;
  grid-row: 2;
`;

export const Text = styled.p `
  grid-column: span 2;
  padding: 0 7px 0 0;
  margin: 16px 0 0;
`;
