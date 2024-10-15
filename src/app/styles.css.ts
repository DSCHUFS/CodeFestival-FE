import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const divider = style({
  width: rem(120),
  height: rem(2),
  margin: '0 auto',
  border: 'none',
  borderRadius: rem(8),
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
});

export const errorContainer = style({
  ...theme.layouts.center,
});
