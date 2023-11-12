import styled from 'styled-components';
import { Section } from '../../styled/section/section.js';
import Title from '../../ui/title/title';

export const AboutSection = styled(Section) `
  position: relative;
  display: grid;
  grid-template-columns: 637px 1fr;
  padding: 183px 90px;
  background-color: ${(props) => props.theme.colorForLightBlue};

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 90px;

    width: 446px;
    height: 447px;
    margin: auto 0;

    background-color: #C4E2FF;
    border-radius: 50%;
    content: "";
  }

  &::after {
    position: absolute;
    top: 37px;
    right: 177px;

    width: 273px;
    height: 627px;

    background-image: url('/src/assets/about-man.svg');
    background-repeat: no-repeat;
    content: "";
  }
`;

export const AboutTitle = styled(Title) `
    margin: 0 0 24px;
`;

export const Text = styled.p `
  font-size: ${(props) => props.theme.fontSizeDefault};

  margin: 0;
  padding: 0 110px 0 0;
  grid-column: 1 / 1;
`;
