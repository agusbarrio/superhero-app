import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
//TODO revisar por qué hay lag en los inputs al escribir
function TextInput({
  name,
  label,
  placeholder,
  value,
  onChange,
  errorState,
  errorMessage,
  ...props
}) {
  return (
    <TextField
      fullWidth={true}
      variant="outlined"
      name={name}
      placeholder={placeholder}
      label={label}
      value={value}
      onChange={onChange}
      error={errorState}
      helperText={errorMessage}
      {...props}
    />
  );
}

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorState: PropTypes.bool,
  errorMessage: PropTypes.string,
};
export default TextInput;
