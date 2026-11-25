# Styling and design tokens

## Layers

- `tokens/` contains primitive Sass scales. These are compile-time values; they do not create CSS output.
- `theme/_semantic.scss` exposes app-level CSS custom properties and maps semantic color roles to PrimeNG theme variables where available.
- `theme/custom-preset.ts` configures PrimeNG's Nora preset and component tokens.
- `base/` contains global baseline styles.
- `_index.scss` is the global stylesheet entrypoint, imported by `src/styles.scss`.

## Using Sass tokens in component styles

Import the token barrel explicitly in a component stylesheet:

```scss
@use 'src/styles/tokens' as tokens;

.panel {
  padding: map-get(tokens.$spacing, 4);
  border-radius: map-get(tokens.$radius, lg);
  box-shadow: map-get(tokens.$shadow, sm);
}
```

Sass tokens are build-time only. For values that need runtime theme changes, use semantic CSS custom properties instead:

```scss
.panel {
  color: var(--app-color-text);
  background: var(--app-color-surface);
  border-color: var(--app-color-border);
}
```

Keep primitive values out of component styles. Prefer PrimeNG's semantic tokens or the app-level `--app-*` variables so theme changes remain centralized.
