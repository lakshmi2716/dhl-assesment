import { definePreset } from '@primeuix/themes';
import Nora from '@primeuix/themes/nora';
import { designTokens } from '../tokens/design-tokens';

const { color, radius, spacing, typography, shadow } = designTokens;

const CustomPreset = definePreset(Nora, {
  semantic: {
    primary: color.primary,
  },
  components: {
    button: {
      root: {
        borderRadius: radius.control,
        paddingX: spacing.buttonX,
        paddingY: spacing.buttonY,
      },
    },
    inputtext: {
      root: {
        borderRadius: radius.control,
        paddingX: spacing.inputX,
        paddingY: spacing.inputY,
        background: '{surface.0}',
        color: '{surface.700}',
        borderColor: '{surface.300}',
        placeholderColor: '{surface.400}',
      },
    },
    checkbox: {
      root: {
        width: '1.25rem',
        height: '1.25rem',
        background: '{surface.0}',
        borderRadius: radius.checkbox,
        borderColor: '{surface.300}',
      },
    },
    card: {
      root: {
        background: '{content.background}',
        color: '{text.color}',
        shadow: shadow.card,
        borderRadius: radius.card,
      },
      body: {
        padding: `${spacing.cardBodyY} ${spacing.cardBodyX}`,
      },
      title: {
        fontSize: typography.size.cardTitle,
      },
      subtitle: {
        color: '{text.muted.color}',
      },
    },
  },
});

export default CustomPreset;
