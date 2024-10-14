import { globalStyle, style } from '@vanilla-extract/css';

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

export const grid = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  width: '100%',
  paddingBlock: rem(38),
  paddingInline: theme.sizes.appInlinePadding,
  gap: rem(24),

  ...breakpoint({ tablet: { gridTemplateColumns: 'repeat(4, 1fr)' } }),
});

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  height: rem(250),
  borderRadius: rem(16),
  overflow: 'hidden',
  transition: 'filter 0.3s ease',

  ':hover': { filter: 'brightness(1.2)' },
});

globalStyle(`${imageContainer} > img`, {
  objectFit: 'cover',
  transition: 'transform 0.2s',
});
