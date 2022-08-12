import PublicLayout from '.';

export default {
  title: 'Templates/PublicLayout',
  component: PublicLayout,
};

const Template = (args) => <PublicLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Main Content',
};
