import { html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { BaseComponent, baseStyles } from '../../base-component';

const inputStyles = css`
  :host {
    display: block;
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: var(--mk-space-1);
  }
  label {
    font-size: var(--mk-font-size-sm);
    font-weight: var(--mk-font-weight-medium);
    color: var(--mk-color-text);
  }
  .required {
    color: var(--mk-color-danger);
    margin-left: 2px;
  }
  input {
    height: 40px;
    padding: 0 var(--mk-space-3);
    border: 1px solid var(--mk-color-border);
    border-radius: var(--mk-radius-md);
    background-color: var(--mk-color-bg);
    color: var(--mk-color-text);
    font-family: var(--mk-font-family);
    font-size: var(--mk-font-size-md);
    outline: none;
    transition: border-color var(--mk-transition-fast), box-shadow var(--mk-transition-fast);
  }
  input::placeholder {
    color: var(--mk-color-text-tertiary);
  }
  input:hover:not(:disabled):not(:focus) {
    border-color: var(--mk-color-secondary);
  }
  input:focus {
    border-color: var(--mk-color-border-focus);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
  }
  input:disabled {
    background-color: var(--mk-color-disabled-bg);
    color: var(--mk-color-disabled-text);
    cursor: not-allowed;
  }
  input.error {
    border-color: var(--mk-color-danger);
  }
  input.error:focus {
    box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.15);
  }
  .helper {
    font-size: var(--mk-font-size-xs);
    color: var(--mk-color-text-secondary);
  }
  .helper.error {
    color: var(--mk-color-danger);
  }
`;

@customElement('mk-input')
export class MyInput extends BaseComponent {
  static styles = [baseStyles, inputStyles];

  @property({ type: String }) label = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) helperText = '';
  @property({ type: String }) errorMessage = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: String }) type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' = 'text';
  @property({ type: String, reflect: true }) value = '';

  @query('input')
  private _input!: HTMLInputElement;

  get validity() {
    return this._input?.validity;
  }

  focus() {
    this._input?.focus();
  }

  private _onInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('mk-input', { detail: { value: this.value }, bubbles: true, composed: true }));
  }

  private _onChange(e: Event) {
    this.dispatchEvent(new CustomEvent('mk-change', { detail: { value: this.value }, bubbles: true, composed: true }));
  }

  render() {
    const hasError = !!this.errorMessage;
    return html`
      <div class="field" part="field">
        ${this.label ? html`<label part="label">${this.label}${this.required ? html`<span class="required" aria-hidden="true">*</span>` : ''}</label>` : ''}
        <input
          part="input"
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${hasError}
          aria-describedby=${hasError ? 'error' : this.helperText ? 'helper' : ''}
          class=${hasError ? 'error' : ''}
          @input=${this._onInput}
          @change=${this._onChange}
        />
        ${hasError
          ? html`<span class="helper error" id="error" part="error" role="alert">${this.errorMessage}</span>`
          : this.helperText
            ? html`<span class="helper" id="helper" part="helper">${this.helperText}</span>`
            : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mk-input': MyInput;
  }
}
