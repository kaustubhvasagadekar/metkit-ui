import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent, baseStyles } from '../../base-component';

const cardStyles = css`
  :host {
    display: block;
  }
  .card {
    background-color: var(--mk-color-bg);
    border: 1px solid var(--mk-color-border);
    border-radius: var(--mk-radius-lg);
    overflow: hidden;
  }
  .card-header {
    padding: var(--mk-space-4) var(--mk-space-5);
    border-bottom: 1px solid var(--mk-color-border);
  }
  .card-body {
    padding: var(--mk-space-5);
  }
  .card-footer {
    padding: var(--mk-space-4) var(--mk-space-5);
    border-top: 1px solid var(--mk-color-border);
    background-color: var(--mk-color-bg-secondary);
  }
  :host([elevated]) .card {
    box-shadow: var(--mk-shadow-md);
    border-color: transparent;
  }
`;

@customElement('mk-card')
export class MyCard extends BaseComponent {
  static styles = [baseStyles, cardStyles];

  @property({ type: Boolean, reflect: true }) elevated = false;

  render() {
    return html`
      <div class="card" part="card">
        <div class="card-header" part="header">
          <slot name="header"></slot>
        </div>
        <div class="card-body" part="body">
          <slot></slot>
        </div>
        <div class="card-footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mk-card': MyCard;
  }
}
