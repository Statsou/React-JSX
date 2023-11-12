import styled from 'styled-components';
import { TitleSize } from './title';

export const StyledTitle = styled.h1 `
  font-size: ${(props) => {
    let fontSize = '44px';

    switch (props.$size) {
      case TitleSize.BIG:
        fontSize = '36px';
        break;

      case TitleSize.MEDIUM:
        fontSize = '24px';
        break;

      case TitleSize.SMALL:
        fontSize = '18px';
        break;
    }

    return fontSize;
  }};
  line-height: ${(props) => {
    let lineHeight = '51px';

    switch (props.$size) {
      case TitleSize.BIG:
        lineHeight = '41px';
        break;

      case TitleSize.MEDIUM:
        lineHeight = '31px';
        break;

      case TitleSize.SMALL:
        lineHeight = '27px';
        break;
    }

    return lineHeight;
  }};
  font-weight: 700;
  margin: 0;
  padding: 0;
`;
