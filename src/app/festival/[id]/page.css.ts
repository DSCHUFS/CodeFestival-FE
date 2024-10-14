import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  padding: theme.sizes.appInlinePadding,
});

export const article = style({
  marginTop: rem(48),
});
