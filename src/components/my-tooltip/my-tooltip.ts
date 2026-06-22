import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent, baseStyles } from '../../base-component';

const tooltipStyles = css`
  :host {
    display: inline-flex;
    position: relative;
  }
  .tooltip {
    position: absolute;
    z-index: 1000;
    padding: var(--mk-space-1) var(--mk-space-2);
    border-radius: var(--mk-radius-sm);
    background-color: var(--mk-color-text);
    color: var(--mk-color-bg);
    font-family: var(--mk-font-family);
    font-size: var(--mk-font-size-xs);
    line-height: var(--mk-line-height-tight);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--mk-transition-fast);
  }
  :host([open]) .tooltip {
    opacity: 1;
  }
  .tooltip.pos-top {
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
  }
  .tooltip.pos-bottom {
    top: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
  }
  .tooltip.pos-left {
    right: calc(100% + 6px);
    top: 50%;
    transform: translateY(-50%);
  }
  .tooltip.pos-right {
    left: calc(100% + 6px);
    top: 50%;
    transform: translateY(-50%);
  }
`;

@customElement('mk-tooltip')
export class MyTooltip extends BaseComponent {
  static styles = [baseStyles, tooltipStyles];

  @property({ type: String }) content = '';
  @property({ type: String, reflect: true }) position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @property({ type: Boolean, reflect: true }) open = false;

  render() {
    return html`
      <slot @slotchange=${this._onSlotChange}></slot>
      <div class="tooltip pos-${this.position}" part="tooltip" role="tooltip" aria-hidden=${!this.open}>
        ${this.content}
      </div>
    `;
  }

  private _onSlotChange() {
    const trigger = this.querySelector(':first-child');
    if (trigger) {
      trigger.addEventListener('mouseenter', () => (this.open = true));
      trigger.addEventListener('mouseleave', () => (this.open = false));
      trigger.addEventListener('focus', () => (this.open = true));
      trigger.addEventListener('blur', () => (this.open = false));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mk-tooltip': MyTooltip;
  }
}
