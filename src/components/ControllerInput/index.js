import PropTypes from 'prop-types';
import { useMemo } from 'react';
import BasicInput from '../../templates/BasicInput';
import { useFormikContext } from 'formik';

function ControllerInput({
  render: Input,
  template: Template = BasicInput,
  name,
  label,
  placeholder,
  ...props
}) {
  const { errors, touched, values, handleChange } = useFormikContext();
  const errorState = useMemo(
    () => touched[name] && !!errors[name],
    [touched, errors, name]
  );
  return (
    <Template>
      <Input
        {...props}
        name={name}
        value={values[name]}
        errorState={errorState}
        helperText={errorState && errors[name]}
        label={label}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Template>
  );
}
ControllerInput.propTypes = {
  render: PropTypes.any,
  template: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
export default ControllerInput;
