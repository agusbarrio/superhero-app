import TeamGridLayout from '.';

export default {
  title: 'Templates/TeamGridLayout',
  component: TeamGridLayout,
};

const Template = (args) => <TeamGridLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Main Content',
};
