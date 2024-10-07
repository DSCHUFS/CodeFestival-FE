import { style } from '@vanilla-extract/css';
import { theme } from '@/styles/theme.css';

export const wrapper = style({
  ...theme.layouts.column,
  maxWidth: theme.sizes.appWidth,
  height: '100dvh',
  margin: 'auto',
});

export const main = style({
  ...theme.layouts.column,
  paddingTop: theme.sizes.appHeaderHeight,
  flex: 1,
});
