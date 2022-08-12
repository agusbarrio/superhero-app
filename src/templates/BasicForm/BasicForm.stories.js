import BasicForm from '.';
import { Formik } from 'formik';
import { Grid } from '@mui/material';
export default {
  title: 'Templates/BasicForm',
  component: BasicForm,
};

const Template = (args) => (
  <Formik>
    <BasicForm {...args} />
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  children: <Grid item>Content</Grid>,
  title: 'Title',
  textSubmitButton: 'Submit Button',
};
