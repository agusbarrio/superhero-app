import BasicInput from '.';

export default {
  title: 'Templates/BasicInput',
  component: BasicInput,
};

const Template = (args) => <BasicInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Basic Input',
};
