import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const hidden = style({
  display: 'none',
});

export const imageContainer = style({
  ...theme.layouts.center,
  position: 'relative',
  width: '100%',
  height: `calc((var(--vh, 1vh) * 100) - (2 * ${theme.sizes.appInlinePadding}))`,
});

export const close = style({
  position: 'absolute',
  top: theme.sizes.appInlinePadding,
  right: theme.sizes.appInlinePadding,
  width: 'fit-content',
  padding: rem(8),
  color: theme.colors.white,
  opacity: 0.9,
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  transition: 'background-color 0.2s, opacity 0.2s',

  ':hover': {
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
});

export const imageOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const image = style({
  width: 'auto !important',
  height: 'auto !important',
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
  margin: 'auto',
});
