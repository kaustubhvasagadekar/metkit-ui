import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import './my-button';

const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'danger', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: (args) => html`<mk-button .variant=${args.variant} .size=${args.size} ?disabled=${args.disabled} ?loading=${args.loading}>${args.label}</mk-button>`,
  args: { label: 'Primary', variant: 'primary', size: 'md' },
};

export const Secondary: Story = {
  render: (args) => html`<mk-button .variant=${args.variant} .size=${args.size}>${args.label}</mk-button>`,
  args: { label: 'Secondary', variant: 'secondary' },
};

export const Danger: Story = {
  render: (args) => html`<mk-button .variant=${args.variant}>${args.label}</mk-button>`,
  args: { label: 'Delete', variant: 'danger' },
};

export const Loading: Story = {
  render: () => html`<mk-button loading>Loading...</mk-button>`,
};

export const Disabled: Story = {
  render: () => html`<mk-button disabled>Disabled</mk-button>`,
};

export const Sizes: Story = {
  render: () => html`
    <mk-button size="sm">Small</mk-button>
    <mk-button size="md">Medium</mk-button>
    <mk-button size="lg">Large</mk-button>
  `,
};
