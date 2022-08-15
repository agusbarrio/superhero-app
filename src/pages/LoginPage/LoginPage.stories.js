import LoginPage from '.';

export default {
  title: 'LoginPage',
  component: LoginPage,
};

const Template = (args) => <LoginPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
