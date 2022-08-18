import Button from '.';
import { Formik } from 'formik';
export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => (
  <Formik>
    <Button {...args} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
