import { TextFieldStyled } from '../../styledcomponent';

const InputField = ({label='Search'}) => {
  return (
      <TextFieldStyled id="outlined-basic" label={label} variant="outlined" />
  );
}

export default InputField;
