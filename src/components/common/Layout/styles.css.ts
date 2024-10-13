import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const wrapper = style({
  ...theme.layouts.column,
  maxWidth: theme.sizes.appWidth,
  height: 'calc(var(--vh, 1vh) * 100)',
  margin: 'auto',
});

export const main = style({
  ...theme.layouts.column,
  paddingTop: theme.sizes.appHeaderHeight,
  flex: 1,
});
