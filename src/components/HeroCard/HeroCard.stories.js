import HeroCard from '.';

export default {
  title: 'HeroCard',
  component: HeroCard,
};

const Template = (args) => <HeroCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Prueba',
  imgSrc: 'https://placeimg.com/640/480/any',
  stats: {
    combat: 390,
    power: 120,
    durability: 760,
    speed: 340,
    intelligence: 990,
    strength: 100,
  },
};
