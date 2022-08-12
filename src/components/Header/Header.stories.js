import Header from '.';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => (
  <div style={{ height: '4rem' }}>
    <Header {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
