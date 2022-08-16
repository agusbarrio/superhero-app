import PropTypes from 'prop-types';
import React from 'react';
import { useFormikContext } from 'formik';
import { Button, Typography } from '@mui/material';

function SubmitButton({ children, ...props }) {
  const formikContext = useFormikContext();
  return (
    <Button
      variant="contained"
      type="submit"
      disabled={formikContext.isSubmitting}
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
