import styled from 'styled-components';

export const TextInput = styled.input `
  font-size: 14px;
  letter-spacing: 0.4px;

  width: 100%;
  height: 48px;
  padding: 10px 12px 5px;

  background-color: ${(props) => props.theme.colorForGrey};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  ::placeholder {
    color: ${(props) => props.theme.colorBlackForText};
  }
`;
