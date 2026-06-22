import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import './my-modal';
import '../my-button/my-button';

const meta: Meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    hideClose: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <mk-button @click=${(e: Event) => {
      const modal = (e.target as HTMLElement).closest('section')!.querySelector('mk-modal') as any;
      modal.open = true;
    }}>Open Modal</mk-button>
    <mk-modal title=${args.title} size=${args.size} ?hide-close=${args.hideClose}>
      <p style="margin:0;color:var(--mk-color-text-secondary);">This is the modal body content. You can put anything here — text, forms, other components.</p>
      <div slot="footer">
        <mk-button variant="secondary" @click=${(e: Event) => {
          (e.target as HTMLElement).closest('mk-modal')!.open = false;
        }}>Cancel</mk-button>
        <mk-button @click=${(e: Event) => {
          (e.target as HTMLElement).closest('mk-modal')!.open = false;
        }}>Confirm</mk-button>
      </div>
    </mk-modal>
  `,
  args: { title: 'Confirm Action', size: 'md', hideClose: false },
};

export const Small: Story = {
  render: () => html`
    <mk-button @click=${(e: Event) => {
      const modal = (e.target as HTMLElement).closest('section')!.querySelector('mk-modal') as any;
      modal.open = true;
    }}>Small Modal</mk-button>
    <mk-modal title="Small Modal" size="sm">
      <p style="margin:0;">A compact modal for quick confirmations.</p>
      <div slot="footer">
        <mk-button size="sm" @click=${(e: Event) => {
          (e.target as HTMLElement).closest('mk-modal')!.open = false;
        }}>OK</mk-button>
      </div>
    </mk-modal>
  `,
};

export const Large: Story = {
  render: () => html`
    <mk-button @click=${(e: Event) => {
      const modal = (e.target as HTMLElement).closest('section')!.querySelector('mk-modal') as any;
      modal.open = true;
    }}>Large Modal</mk-button>
    <mk-modal title="Large Modal" size="lg">
      <p style="margin:0 0 1rem;">This modal is wider for forms or content that needs more space.</p>
      <mk-input label="Name" placeholder="Enter your name"></mk-input>
      <div style="height:12px"></div>
      <mk-input label="Email" placeholder="you@example.com"></mk-input>
      <div slot="footer">
        <mk-button variant="secondary" @click=${(e: Event) => {
          (e.target as HTMLElement).closest('mk-modal')!.open = false;
        }}>Cancel</mk-button>
        <mk-button @click=${(e: Event) => {
          (e.target as HTMLElement).closest('mk-modal')!.open = false;
        }}>Submit</mk-button>
      </div>
    </mk-modal>
  `,
};

export const NoCloseButton: Story = {
  render: () => html`
    <mk-button @click=${(e: Event) => {
      const modal = (e.target as HTMLElement).closest('section')!.querySelector('mk-modal') as any;
      modal.open = true;
    }}>No Close Button</mk-button>
    <mk-modal title="No Close Button" hide-close>
      <p style="margin:0;">Close by clicking the overlay or pressing Escape.</p>
    </mk-modal>
  `,
};
