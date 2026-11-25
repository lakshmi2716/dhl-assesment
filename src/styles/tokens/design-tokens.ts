export const designTokens = {
  color: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0284c7',
      600: '#0369a1',
      700: '#075985',
      800: '#0c4a6e',
      900: '#083b5c',
      950: '#062b45',
    },
    white: '#ffffff',
    muted:'#e5e5e5'
  },
  radius: {
    control: '0.5rem',
    card: '0.75rem',
    checkbox: '0.375rem',
  },
  spacing: {
    buttonX: '1.25rem',
    buttonY: '0.65rem',
    inputX: '0.875rem',
    inputY: '0.625rem',
    card: '1.25rem',
    cardBodyX: '1.25rem',
    cardBodyY: '1rem',
  },
  typography: {
    weight: {
      semibold: '600',
      bold: '700',
    },
    size: {
      cardTitle: '1.25rem',
    },
  },
  shadow: {
    card: '0 1px 2px 0 rgb(0 0 0 / 5%)',
  },
  focusRing: {
    width: '3px',
    offset: '1px',
    none: '0',
  },
} as const;
