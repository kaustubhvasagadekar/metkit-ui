import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import './my-icon';

const iconNames = ['check', 'close', 'info', 'warning', 'error', 'chevron-down', 'chevron-up', 'chevron-left', 'chevron-right', 'plus', 'minus', 'search', 'loading'];

const meta: Meta = {
  title: 'Components/Icon',
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: iconNames },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<mk-icon name=${args.name} size=${args.size}></mk-icon>`,
  args: { name: 'check', size: 'md' },
};

export const AllIcons: Story = {
  render: () => html`
    <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
      ${iconNames.map((name) => html`
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
          <mk-icon name=${name} size="lg"></mk-icon>
          <span style="font-size:12px;color:#64748b;">${name}</span>
        </div>
      `)}
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex;gap:16px;align-items:center;">
      <mk-icon name="info" size="xs"></mk-icon>
      <mk-icon name="info" size="sm"></mk-icon>
      <mk-icon name="info" size="md"></mk-icon>
      <mk-icon name="info" size="lg"></mk-icon>
      <mk-icon name="info" size="xl"></mk-icon>
    </div>
  `,
};
