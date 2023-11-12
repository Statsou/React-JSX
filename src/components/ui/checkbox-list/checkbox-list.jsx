import CheckboxButton from '../checkbox-button/checkbox-button';
import { Ul, Li } from './style';

function CheckboxList ({
  options,
  labelComponent,
  name,
  selectValues,
  onChange,
  onClickLabel = () => {}
}) {

  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <Ul>
      {options?.map((option, index) => (
        <Li key={option.value}>
          <CheckboxButton
              labelComponent={labelComponent}
              selectValues={selectValues}
              value={option.value}
              text={option.title}
              name={name}
              isChecked={selectValues.includes(option.value)}
              onClick={(value) => onClickLabel(value, index)}
              onChange={handleChange}
          />
        </Li>
      ))}
    </Ul>
  );
}

export default CheckboxList;
