import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import './my-badge';

const meta: Meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'primary', 'success', 'warning', 'danger'] },
  },
};

export default meta;
type Story = StoryObj;

export const All: Story = {
  render: () => html`
    <mk-badge>Default</mk-badge>
    <mk-badge variant="primary">Primary</mk-badge>
    <mk-badge variant="success">Success</mk-badge>
    <mk-badge variant="warning">Warning</mk-badge>
    <mk-badge variant="danger">Danger</mk-badge>
  `,
};

export const Default: Story = {
  render: (args) => html`<mk-badge .variant=${args.variant}>${args.label}</mk-badge>`,
  args: { label: 'Badge', variant: 'default' },
};
