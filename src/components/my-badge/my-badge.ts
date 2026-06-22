import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent, baseStyles } from '../../base-component';

const badgeStyles = css`
  :host {
    display: inline-flex;
    vertical-align: middle;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: var(--mk-space-1);
    padding: 2px var(--mk-space-2);
    border-radius: var(--mk-radius-full);
    font-family: var(--mk-font-family);
    font-size: var(--mk-font-size-xs);
    font-weight: var(--mk-font-weight-medium);
    line-height: var(--mk-line-height-tight);
    white-space: nowrap;
  }
  .variant-default {
    background-color: var(--mk-color-bg-tertiary);
    color: var(--mk-color-text-secondary);
  }
  .variant-primary {
    background-color: rgba(37, 99, 235, 0.1);
    color: var(--mk-color-primary);
  }
  .variant-success {
    background-color: rgba(22, 163, 74, 0.1);
    color: var(--mk-color-success);
  }
  .variant-warning {
    background-color: rgba(217, 119, 6, 0.1);
    color: var(--mk-color-warning);
  }
  .variant-danger {
    background-color: rgba(220, 38, 38, 0.1);
    color: var(--mk-color-danger);
  }
`;

@customElement('mk-badge')
export class MyBadge extends BaseComponent {
  static styles = [baseStyles, badgeStyles];

  @property({ type: String, reflect: true }) variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' = 'default';

  render() {
    return html`
      <span class="badge variant-${this.variant}" part="badge">
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mk-badge': MyBadge;
  }
}
