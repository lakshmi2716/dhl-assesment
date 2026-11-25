export const designTokens = {
  color: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
    white: '#ffffff',
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
