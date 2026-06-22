import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent, baseStyles } from '../../base-component';

const modalStyles = css`
  :host {
    display: contents;
  }
  .overlay {
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--mk-transition-normal), visibility var(--mk-transition-normal);
  }
  :host([open]) .overlay {
    opacity: 1;
    visibility: visible;
  }
  .dialog {
    position: relative;
    background-color: var(--mk-color-bg);
    border: 1px solid var(--mk-color-border);
    border-radius: var(--mk-radius-xl);
    box-shadow: var(--mk-shadow-lg);
    max-height: calc(100vh - 48px);
    width: var(--mk-modal-width, 520px);
    max-width: calc(100vw - 48px);
    display: flex;
    flex-direction: column;
    transform: scale(0.95) translateY(8px);
    transition: transform var(--mk-transition-normal);
  }
  :host([open]) .dialog {
    transform: scale(1) translateY(0);
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--mk-space-5) var(--mk-space-6);
    border-bottom: 1px solid var(--mk-color-border);
  }
  .title {
    font-size: var(--mk-font-size-lg);
    font-weight: var(--mk-font-weight-semibold);
    color: var(--mk-color-text);
    margin: 0;
  }
  .close-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: var(--mk-radius-md);
    background: transparent;
    color: var(--mk-color-text-secondary);
    cursor: pointer;
    transition: background-color var(--mk-transition-fast), color var(--mk-transition-fast);
    flex-shrink: 0;
  }
  .close-btn:hover {
    background-color: var(--mk-color-bg-tertiary);
    color: var(--mk-color-text);
  }
  .close-btn:focus-visible {
    box-shadow: 0 0 0 2px var(--mk-color-bg), 0 0 0 4px var(--mk-color-border-focus);
    outline: none;
  }
  .body {
    padding: var(--mk-space-6);
    overflow-y: auto;
    flex: 1;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--mk-space-2);
    padding: var(--mk-space-4) var(--mk-space-6);
    border-top: 1px solid var(--mk-color-border);
  }
`;

@customElement('mk-modal')
export class MyModal extends BaseComponent {
  static styles = [baseStyles, modalStyles];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) title = '';
  @property({ type: Boolean }) hideClose = false;
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  private _sizeMap: Record<string, string> = {
    sm: '400px',
    md: '520px',
    lg: '720px',
  };

  connectedCallback() {
    super.connectedCallback();
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('open')) {
      if (this.open) {
        document.addEventListener('keydown', this._onKeyDown);
        document.body.style.overflow = 'hidden';
      } else {
        document.removeEventListener('keydown', this._onKeyDown);
        document.body.style.overflow = '';
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._onKeyDown);
    document.body.style.overflow = '';
  }

  private _onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.open) {
      this._close();
    }
  }

  private _close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('mk-close', { bubbles: true, composed: true }));
  }

  private _onOverlayClick(e: Event) {
    if ((e.target as HTMLElement).classList.contains('overlay')) {
      this._close();
    }
  }

  render() {
    return html`
      <div class="overlay" part="overlay" @click=${this._onOverlayClick}>
        <div class="dialog" part="dialog" role="dialog" aria-modal="true" aria-label=${this.title}
             style="--mk-modal-width: ${this._sizeMap[this.size] || this._sizeMap.md}">
          <div class="header" part="header">
            <h2 class="title" part="title">${this.title}</h2>
            ${this.hideClose ? '' : html`
              <button class="close-btn" part="close-button" @click=${this._close} aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            `}
          </div>
          <div class="body" part="body">
            <slot></slot>
          </div>
          <div class="footer" part="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mk-modal': MyModal;
  }
}
