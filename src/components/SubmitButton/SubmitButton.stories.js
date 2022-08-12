import SubmitButton from '.';
import { Formik } from 'formik';
export default {
  title: 'SubmitButton',
  component: SubmitButton,
};

const Template = (args) => (
  <Formik>
    <SubmitButton {...args} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Submit Button',
};
