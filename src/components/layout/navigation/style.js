import styled from 'styled-components';
import Button from '../../ui/button/button';

export const StyledButtonMain = styled(Button) `
  font-weight: 700;
  color: ${(props) => props.theme.colorBlackForText};

  text-align: center;
  min-width: ${(props) => `${props.$minWidth}px` || '100%'};

  background-color: ${(props) => props.theme.colorWhite};
  transition: opacity 0.2s ease-out;

  &:hover,
  &:active {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
    background-color: ${(props) => props.theme.colorWhite};
  }
`;
