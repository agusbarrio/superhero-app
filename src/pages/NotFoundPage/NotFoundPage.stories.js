import HomePage from '.';

export default {
  title: 'HomePage',
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
