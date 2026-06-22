import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import './my-card';

const meta: Meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  argTypes: {
    elevated: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <mk-card ?elevated=${args.elevated}>
      <div slot="header"><strong>Card Title</strong></div>
      <p>This is the card body content. Cards are containers for grouping related information.</p>
      <div slot="footer" style="display:flex;gap:8px;justify-content:flex-end;">
        <mk-button variant="secondary" size="sm">Cancel</mk-button>
        <mk-button variant="primary" size="sm">Confirm</mk-button>
      </div>
    </mk-card>
  `,
  args: { elevated: false },
};

export const Elevated: Story = {
  render: () => html`
    <mk-card elevated>
      <p>This card has an elevated shadow.</p>
    </mk-card>
  `,
};

export const Simple: Story = {
  render: () => html`
    <mk-card>
      <p>Simple card with no header or footer.</p>
    </mk-card>
  `,
};
