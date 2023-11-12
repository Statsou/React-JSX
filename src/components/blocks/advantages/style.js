import styled from 'styled-components';
import { Section } from '../../styled/section/section.js';
import Title from '../../ui/title/title';

export const AdvantagesSection = styled(Section) `
  max-width: 1280px;
  text-align: center;
`;

export const AdvantagesTitle = styled(Title) `
  margin: 0 0 64px;
`;

export const Ul = styled.ul `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  padding: 0;
  margin: 0 0 64px;
  list-style-type: none;
`;

export const Li = styled.li `
  display: flex;
`;
