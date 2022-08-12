import _ from 'lodash';
import { Formik } from 'formik';
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
      onSubmit={(values) => {
        if (_.isFunction(onSubmit)) onSubmit(values);
      }}
      validationSchema={schema}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Template {...templateProps}>{children}</Template>
        </form>
      )}
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
