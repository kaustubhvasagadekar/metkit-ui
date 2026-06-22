import { LitElement, css, CSSResult } from 'lit';

export const baseStyles: CSSResult = css`
  :host {
    font-family: var(--mk-font-family);
    font-size: var(--mk-font-size-md);
    line-height: var(--mk-line-height-normal);
    color: var(--mk-color-text);
    box-sizing: border-box;
  }
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }
  :host([hidden]) {
    display: none !important;
  }
`;

export class BaseComponent extends LitElement {}
