import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import './my-tooltip';
import '../my-button/my-button';

const meta: Meta = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <div style="display:flex;justify-content:center;padding:60px 0;">
      <mk-tooltip content=${args.content} position=${args.position}>
        <mk-button>Hover me</mk-button>
      </mk-tooltip>
    </div>
  `,
  args: { content: 'Hello from tooltip!', position: 'top' },
};

export const Positions: Story = {
  render: () => html`
    <div style="display:flex;gap:40px;justify-content:center;padding:60px 0;">
      <mk-tooltip content="Top tooltip" position="top">
        <mk-button variant="secondary" size="sm">Top</mk-button>
      </mk-tooltip>
      <mk-tooltip content="Bottom tooltip" position="bottom">
        <mk-button variant="secondary" size="sm">Bottom</mk-button>
      </mk-tooltip>
      <mk-tooltip content="Left tooltip" position="left">
        <mk-button variant="secondary" size="sm">Left</mk-button>
      </mk-tooltip>
      <mk-tooltip content="Right tooltip" position="right">
        <mk-button variant="secondary" size="sm">Right</mk-button>
      </mk-tooltip>
    </div>
  `,
};
