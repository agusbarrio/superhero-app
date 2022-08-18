import NotFoundPage from '.';

export default {
  title: 'NotFoundPage',
  component: NotFoundPage,
};

const Template = (args) => <NotFoundPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
