import PropTypes from 'prop-types';
import BasicInput from '../../templates/BasicInput';
import { FastField } from 'formik';
function ControllerInput({
  render: Input,
  template: Template = BasicInput,
  name,
  label,
  placeholder,
  ...props
}) {
  return (
    <Template>
      <FastField name={name}>
        {({ field, meta }) => {
          return (
            <Input
              {...props}
              onChange={field.onChange}
              name={field.name}
              value={field.value}
              errorState={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
              label={label}
              placeholder={placeholder}
            />
          );
        }}
      </FastField>
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
