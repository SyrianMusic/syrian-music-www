import EmailInput from '../EmailInput';

export default {
  title: 'EmailInput',
  component: EmailInput,
  parameters: { layout: 'centered' },
};

const Template = (args) => <EmailInput {...args} />;

export const Default = Template.bind({});
Default.args = { defaultValue: 'info@syrianmusic.org' };

export const Empty = Template.bind({});
Empty.args = {};

export const Focus = Template.bind({});
Focus.args = Default.args;
Focus.parameters = { pseudo: { focus: true } };

export const Error = Template.bind({});
Error.args = { ...Default.args, defaultValue: 'not an email address' };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const Placeholder = Template.bind({});
Placeholder.args = { ...Default.args, placeholder: 'info@syrianmusic.org', defaultValue: null };
