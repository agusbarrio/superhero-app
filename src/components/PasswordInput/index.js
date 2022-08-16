import { useState, useCallback } from 'react';
import { TextField, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PropTypes from 'prop-types';
function PasswordInput({
  name,
  label,
  placeholder,
  value,
  onChange,
  errorState,
  errorMessage,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  return (
    <TextField
      fullWidth={true}
      name={name}
      type={showPassword ? 'text' : 'password'}
      placeholder={placeholder}
      label={label}
      variant="outlined"
      value={value}
      InputProps={{
        endAdornment: (
          <IconButton onClick={toggleShowPassword} edge="end">
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        ),
      }}
      onChange={onChange}
      error={errorState}
      helperText={errorMessage}
      {...props}
    />
  );
}

PasswordInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorState: PropTypes.bool,
  errorMessage: PropTypes.string,
};
export default PasswordInput;
