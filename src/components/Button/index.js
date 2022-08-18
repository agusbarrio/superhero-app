import PropTypes from 'prop-types';
import React from 'react';
import { Typography, Button } from '@mui/material';
function SubmitButton({ children, type, onClick, disabled, ...props }) {
  return (
    <Button
      variant="contained"
      size="small"
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...props}
    >
      <Typography
        variant="h6"
        component="div"
        align="center"
        sx={{ textTransform: 'none' }}
      >
        {children}
      </Typography>
    </Button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.any,
};
export default SubmitButton;
