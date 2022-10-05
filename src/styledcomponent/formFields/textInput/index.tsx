import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextFieldStyled = styled(TextField)(({ theme }:any) => ({
  margin: '10px',
  '.MuiInputBase-input': {
    color: `${theme?.input?.primary} !important`,
  },
  '.MuiInputLabel-root': {
    color: `${theme?.input?.primary} !important`
  },

  '.MuiOutlinedInput-notchedOutline': {
    borderColor: `${theme?.input?.primary} !important`
  },
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme?.input?.primary} !important`
    },
  },
  svg: {
    color: theme?.input?.primary
  }
}));

export {
  TextFieldStyled
};
