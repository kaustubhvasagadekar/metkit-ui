# @metkit/ui

Framework-agnostic Web Components UI library. Works in React, Vue, Svelte, Angular, and plain HTML — no external intervention needed.

## Install

```bash
npm install @metkit/ui
```

## Usage (Vanilla HTML)

```html
<link rel="stylesheet" href="@metkit/ui/styles/tokens.css">
<script type="module" src="@metkit/ui"></script>

<mk-button variant="primary">Click me</mk-button>
<mk-input label="Email" placeholder="you@example.com"></mk-input>
<mk-card elevated>
  <p>Card content</p>
</mk-card>
```

## Usage (React)

```tsx
import { MkButton, MkInput, MkCard } from '@metkit/ui/react';

function App() {
  return (
    <MkButton variant="primary">Click me</MkButton>
    <MkInput label="Email" placeholder="you@example.com" />
    <MkCard elevated><p>Card content</p></MkCard>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `<mk-button>` | Button with variants, sizes, loading/disabled states |
| `<mk-input>` | Text input with label, helper text, error state |
| `<mk-card>` | Container with header/body/footer slots |
| `<mk-badge>` | Status indicator with color variants |
| `<mk-tooltip>` | Hover tooltip with position control |
| `<mk-icon>` | Built-in SVG icons (check, close, info, warning, etc.) |

## Theming

Override CSS custom properties for theming. Dark mode included via `[data-theme="dark"]`.

```css
:root {
  --mk-color-primary: #7c3aed;
  --mk-radius-md: 12px;
}
```

## External Styling

Use `::part()` to style specific parts of components from outside Shadow DOM:

```css
mk-button::part(button) {
  border-radius: 20px;
}
```

## License

MIT
