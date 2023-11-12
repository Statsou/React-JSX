import { Label } from '../../styled/label/label';
import { VisuallyHiddenInput } from '../../styled/visually-hidden-input/visually-hidden-input';

function CheckboxButton ( {
  labelComponent,
  isChecked,
  name,
  value,
  text,
  onChange,
  ...props
} ) {
  const LabelConponent = labelComponent;

  return (
    <>
      <Label>
        <VisuallyHiddenInput
          value={value}
          checked={isChecked}
          name={name}
          onChange={() => onChange(value)}
          {...props}
          type='checkbox'
        />
        <LabelConponent $isChecked={isChecked}>{text}</LabelConponent>
      </Label>
    </>
  );
}

export default CheckboxButton;
