import { html, css, svg, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent, baseStyles } from '../../base-component';

const iconStyles = css`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
    flex-shrink: 0;
  }
  :host([size="xs"]) svg { width: 12px; height: 12px; }
  :host([size="sm"]) svg { width: 16px; height: 16px; }
  :host([size="md"]) svg { width: 20px; height: 20px; }
  :host([size="lg"]) svg { width: 24px; height: 24px; }
  :host([size="xl"]) svg { width: 32px; height: 32px; }
`;

const icons: Record<string, TemplateResult<2>> = {
  'check': svg`<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  'close': svg`<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  'info': svg`<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  'warning': svg`<path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  'error': svg`<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  'chevron-down': svg`<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  'chevron-up': svg`<path d="M18 15l-6-6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  'chevron-left': svg`<path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  'chevron-right': svg`<path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  'plus': svg`<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  'minus': svg`<path d="M5 12h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  'search': svg`<circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" fill="none"/><path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  'loading': svg`<path d="M12 2a10 10 0 019.95 9" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/></path>`,
};

@customElement('mk-icon')
export class MyIcon extends BaseComponent {
  static styles = [baseStyles, iconStyles];

  @property({ type: String }) name = '';
  @property({ type: String, reflect: true }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  render() {
    const icon = icons[this.name];
    return icon ? html`<svg part="svg" aria-hidden="true" viewBox="0 0 24 24">${icon}</svg>` : html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mk-icon': MyIcon;
  }
}
