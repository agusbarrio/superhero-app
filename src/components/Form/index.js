import { Formik, Form as FormikForm } from 'formik';
import BasicForm from '../../templates/BasicForm';
import PropTypes from 'prop-types';
import _ from 'lodash';
function Form({
  onSubmit,
  template: Template = BasicForm,
  templateProps,
  children,
  defaultValues,
  schema,
}) {
  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={async (values) => {
        if (_.isFunction(onSubmit)) await onSubmit(values);
      }}
      validationSchema={schema}
    >
      <FormikForm>
        <Template {...templateProps}>{children}</Template>
      </FormikForm>
    </Formik>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  template: PropTypes.any,
  templateProps: PropTypes.object,
  children: PropTypes.any,
  defaultValues: PropTypes.object,
  schema: PropTypes.any,
};
export default Form;
