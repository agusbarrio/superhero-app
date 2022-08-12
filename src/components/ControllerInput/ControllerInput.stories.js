import ControllerInput from '.';
import { Formik } from 'formik';
export default {
  title: 'ControllerInput',
  component: ControllerInput,
};

const Template = (args) => (
  <Formik>
    <ControllerInput {...args} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {};
