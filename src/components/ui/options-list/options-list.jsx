import { OptionList, OptionItem, Property, Value } from './style';

function OptionsList ({ list = [], delimeter = ': ' }) {
    return (
      <OptionList>
        {list.map((option, index) => (
          <OptionItem key={index}>
            <Property>
              {option.property}
              {delimeter}
            </Property>
            <Value>
              {option.value}
            </Value>
          </OptionItem>
        ))}
      </OptionList>
    );
}

export { OptionsList };
