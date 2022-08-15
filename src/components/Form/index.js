import _ from 'lodash';
import { Formik, Form as FormikForm } from 'formik';
import BasicForm from '../../templates/BasicForm';
import PropTypes from 'prop-types';
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
        await onSubmit(values);
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
