import styled from 'styled-components';

export const TabsWrapper = styled.div `
  min-height: 197px;
`;

export const ActiveTabs = styled.button `
  font-family: inherit;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: ${(props) => (props.active ? props.theme.colorWhite : 'inherit')};

  padding: 7px 11px;

  background-color: ${(props) => (props.active ? props.theme.colorForGreen : props.theme.colorForGrey)};
  border: 1px #0000001A solid;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;

  &:hover {
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => (props.active ? props.theme.colorForGreen : '#9fc957')};
    cursor: ${(props) => (props.active ? 'default' : 'pointer')};
  }
`;

export const TabList = styled.ul `
  display: flex;
  padding: 0;
  margin: 0 0 17px;

  list-style-type: none;
`;

export const TabItem = styled.li `
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const TabContent = styled.div `
  font-size: 14px;
  line-height: 21px;
  height: 144px;
`;
