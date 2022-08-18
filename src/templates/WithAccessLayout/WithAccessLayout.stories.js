import WithAccessLayout from '.';

export default {
  title: 'Templates/WithAccessLayout',
  component: WithAccessLayout,
};

const Template = (args) => <WithAccessLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Main Content',
};
