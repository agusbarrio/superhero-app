import PropTypes from 'prop-types';
import React from 'react';
import { useFormikContext } from 'formik';
import Button from '../Button';

function SubmitButton({ children, ...props }) {
  const formikContext = useFormikContext();
  return (
    <Button type="submit" disabled={formikContext.isSubmitting} {...props}>
      {children}
    </Button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.any,
};
export default SubmitButton;
