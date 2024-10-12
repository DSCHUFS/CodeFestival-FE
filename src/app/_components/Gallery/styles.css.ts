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
});

export const description = style({
  marginTop: rem(13),
  color: theme.colors.white,
  fontFamily: 'var(--font-jetbrains)',
  fontWeight: 400,
  fontSize: rem(16),
  lineHeight: '150%',
  textAlign: 'center',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  paddingBlock: rem(38),
  rowGap: rem(32),

  ...breakpoint({ tablet: { gridTemplateColumns: 'repeat(4, 1fr)' } }),
});
