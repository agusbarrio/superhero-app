import StatsBox from '.';

export default {
  title: 'StatsBox',
  component: StatsBox,
};

const Template = (args) => <StatsBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  combat: 39,
  power: 12,
  durability: 76,
  speed: 34,
  intelligence: 99,
  strength: 4,
};
