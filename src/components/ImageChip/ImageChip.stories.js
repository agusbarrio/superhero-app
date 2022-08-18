import ImageChip from '.';

export default {
  title: 'ImageChip',
  component: ImageChip,
};

const Template = (args) => <ImageChip {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://placeimg.com/640/480/any',
  alt: 'Intelligence',
  label: '32',
};
