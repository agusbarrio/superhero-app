import Login from '.';

export default {
  title: 'Templates/Login',
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  mainContent: 'Main Content',
};
