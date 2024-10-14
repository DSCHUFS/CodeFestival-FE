import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const imageContainer = style({
  ...theme.layouts.center,
  position: 'relative',
  width: '100%',
  height: '100%',
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

export const image = style({
  width: '100%',
  height: 'auto !important',
  maxHeight: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
  marginBlock: 'auto',
});
