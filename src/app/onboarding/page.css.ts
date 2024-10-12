import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const root = style({
  ...theme.layouts.columnCenter,
  width: '100%',
  height: 'calc(var(--vh, 1vh) * 100)',
});

export const background = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 'calc(var(--vh, 1vh) * 100)',
  opacity: 0.7,
});

globalStyle(`${background} > img`, {
  objectFit: 'cover',
});

export const content = style({
  ...theme.layouts.columnCenter,
  width: '100%',
  height: '100%',
  zIndex: 1,
});

globalStyle(`${content} > img`, {
  userSelect: 'none',
});

export const sponsor = style({
  ...theme.layouts.center,
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 'auto',
  zIndex: 1,
});

export const sponsorInner = style({
  width: '100%',
  maxWidth: theme.sizes.appWidth,
});
