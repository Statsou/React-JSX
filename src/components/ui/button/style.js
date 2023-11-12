import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link) `
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  color: ${(props) => props.theme.colorWhite};

  display: inline-block;
  text-align: center;
  text-decoration: none;

  min-width: ${(props) => `${props.$minWidth}px` || '100%'};
  padding: 16px 0;

  background-color: ${(props) => props.theme.colorForButton};
  border: none;
  transition: background-color 0.2s ease-out;

  &:hover,
  &:active {
    cursor: pointer;
    opacity: 0.9;
  }

  &:active {
    background-color: ${(props) => props.theme.colorForButtonActive};
  }
`;
