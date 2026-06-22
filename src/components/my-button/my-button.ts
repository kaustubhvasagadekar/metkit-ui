import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent, baseStyles } from '../../base-component';

const buttonStyles = css`
  :host {
    display: inline-flex;
  }
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--mk-space-2);
    border: 1px solid transparent;
    border-radius: var(--mk-radius-md);
    font-family: var(--mk-font-family);
    font-weight: var(--mk-font-weight-medium);
    cursor: pointer;
    transition: background-color var(--mk-transition-fast), border-color var(--mk-transition-fast), color var(--mk-transition-fast), box-shadow var(--mk-transition-fast);
    outline: none;
    text-decoration: none;
    white-space: nowrap;
    user-select: none;
  }
  button:focus-visible {
    box-shadow: 0 0 0 2px var(--mk-color-bg), 0 0 0 4px var(--mk-color-border-focus);
  }
  button:disabled {
    background-color: var(--mk-color-disabled-bg);
    color: var(--mk-color-disabled-text);
    border-color: var(--mk-color-border);
    cursor: not-allowed;
  }

  button.size-sm {
    height: 32px;
    padding: 0 var(--mk-space-3);
    font-size: var(--mk-font-size-sm);
  }
  button.size-md {
    height: 40px;
    padding: 0 var(--mk-space-4);
    font-size: var(--mk-font-size-md);
  }
  button.size-lg {
    height: 48px;
    padding: 0 var(--mk-space-5);
    font-size: var(--mk-font-size-lg);
  }

  button.variant-primary {
    background-color: var(--mk-color-primary);
    color: #fff;
  }
  button.variant-primary:hover:not(:disabled) {
    background-color: var(--mk-color-primary-hover);
  }
  button.variant-primary:active:not(:disabled) {
    background-color: var(--mk-color-primary-active);
  }

  button.variant-secondary {
    background-color: transparent;
    color: var(--mk-color-secondary);
    border-color: var(--mk-color-border);
  }
  button.variant-secondary:hover:not(:disabled) {
    background-color: var(--mk-color-bg-tertiary);
    border-color: var(--mk-color-secondary);
  }

  button.variant-danger {
    background-color: var(--mk-color-danger);
    color: #fff;
  }
  button.variant-danger:hover:not(:disabled) {
    background-color: var(--mk-color-danger-hover);
  }

  button.variant-ghost {
    background-color: transparent;
    color: var(--mk-color-text);
  }
  button.variant-ghost:hover:not(:disabled) {
    background-color: var(--mk-color-bg-tertiary);
  }

  .spinner {
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: mk-spin 0.6s linear infinite;
  }
  @keyframes mk-spin {
    to { transform: rotate(360deg); }
  }
`;

@customElement('mk-button')
export class MyButton extends BaseComponent {
  static styles = [baseStyles, buttonStyles];

  @property({ type: String, reflect: true }) variant: 'primary' | 'secondary' | 'danger' | 'ghost' = 'primary';
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';

  render() {
    return html`
      <button
        part="button"
        type=${this.type}
        class="variant-${this.variant} size-${this.size}"
        ?disabled=${this.disabled || this.loading}
        aria-busy=${this.loading}
      >
        ${this.loading ? html`<span class="spinner" part="spinner" aria-hidden="true"></span>` : ''}
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mk-button': MyButton;
  }
}
