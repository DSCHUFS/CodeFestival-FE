import { style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  paddingBlock: rem(32),
  rowGap: rem(32),

  ...breakpoint({ tablet: { gridTemplateColumns: 'repeat(3, 1fr)' } }),
});

export const organization = style({
  ...theme.layouts.columnCenterX,
  gap: rem(16),
});

export const logo = style({
  width: rem(256),
  height: rem(28),
  userSelect: 'none',
});

export const title = style({
  color: 'rgba(255, 255, 255, 0.9)',
  fontFamily: 'var(--font-jetbrains)',
  fontSize: rem(16),
  fontWeight: 500,
  lineHeight: '100%',
  textAlign: 'center',
  userSelect: 'none',
});
