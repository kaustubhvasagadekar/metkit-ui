import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import './my-input';

const meta: Meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'email', 'number', 'tel', 'url'] },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <mk-input
      label=${args.label}
      placeholder=${args.placeholder}
      helper-text=${args.helperText}
      .type=${args.type}
      ?disabled=${args.disabled}
      ?required=${args.required}
    ></mk-input>
  `,
  args: { label: 'Name', placeholder: 'Enter your name', helperText: 'Your full name' },
};

export const WithError: Story = {
  render: () => html`<mk-input label="Email" error-message="Invalid email address."></mk-input>`,
};

export const Disabled: Story = {
  render: () => html`<mk-input label="Field" disabled value="Cannot edit"></mk-input>`,
};

export const Password: Story = {
  render: () => html`<mk-input label="Password" type="password" required helper-text="Min 8 characters."></mk-input>`,
};
