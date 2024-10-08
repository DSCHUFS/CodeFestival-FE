import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  position: 'fixed',
  left: 0,
  width: '100%',
  height: theme.sizes.appHeaderHeight,
  backdropFilter: `blur(${rem(8)})`,
  zIndex: theme.zIndices.header,
});

export const inner = style({
  ...theme.layouts.rowBetween,
  width: '100%',
  height: '100%',
  maxWidth: theme.sizes.appWidth,
  paddingInline: theme.sizes.appInlinePadding,
  marginInline: 'auto',
});

export const ci = style({
  userSelect: 'none',
});

export const navigation = style({
  ...theme.layouts.centerY,
  userSelect: 'none',
  gap: theme.spaces.xl,
});

export const menu = style({
  color: theme.colors.white,
  fontFamily: 'var(--font-jetbrains), var(--font-pretendard)',
  fontSize: rem(16),
  fontWeight: 500,
  letterSpacing: rem(-0.1),
  lineHeight: '100%',
});
