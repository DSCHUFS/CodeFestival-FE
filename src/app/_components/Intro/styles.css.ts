import { style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const title = style({
  marginTop: rem(60),
  color: theme.colors.white,
  fontFamily: 'var(--font-jetbrains)',
  fontSize: rem(28),
  fontWeight: 600,
  lineHeight: '100%',
  textAlign: 'center',

  ...breakpoint({ tablet: { fontSize: rem(32) } }),
});

export const description = style({
  paddingInline: theme.sizes.appInlinePadding,
  marginTop: rem(28),
  paddingBottom: rem(60),
  color: theme.colors.white,
  fontFamily: 'var(--font-jetbrains)',
  fontWeight: 400,
  fontSize: rem(14.5),
  lineHeight: '200%',
  textAlign: 'center',
  wordBreak: 'break-word',
});