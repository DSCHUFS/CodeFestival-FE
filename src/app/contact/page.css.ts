import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  paddingInline: theme.sizes.appInlinePadding,
  marginTop: rem(24),
  fontFamily: 'var(--font-jetbrains)',
  fontSize: rem(14),
  lineHeight: '200%',
});
