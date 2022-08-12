import PropTypes from 'prop-types';
import React from 'react';
import { useFormikContext } from 'formik';
import { Button } from '@mui/material';

function SubmitButton({ children, ...props }) {
  const formikContext = useFormikContext();
  return (
    <Button
      variant="contained"
      type="submit"
      disabled={formikContext.isSubmitting}
      {...props}
    >
      {children}
    </Button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.any,
};
export default SubmitButton;
