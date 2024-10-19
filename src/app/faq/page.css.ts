import { globalStyle, keyframes, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

const slideDown = keyframes({
  from: { height: '0' },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: '0' },
});

export const list = style({
  ...theme.layouts.column,
  padding: theme.sizes.appInlinePadding,
  gap: rem(16),
});

export const item = style({
  width: '100%',
  padding: rem(16),
  borderRadius: rem(8),
  backgroundColor: theme.colors.white10,
});

export const trigger = style({
  ...theme.layouts.centerY,
  color: theme.colors.white,
  fontFamily: 'var(--font-pretendard)',
  fontSize: rem(14),
  fontWeight: 500,
  textAlign: 'left',
  lineHeight: '160%',
});

globalStyle(`${trigger} > img`, {
  transition: 'transform 300ms',
});

globalStyle(`${trigger}[data-state="open"] > img`, {
  transform: 'rotate(90deg)',
});

export const content = style({
  overflow: 'hidden',
});

globalStyle(`${content}[data-state="open"]`, {
  animation: `${slideDown} 300ms forwards`,
});

globalStyle(`${content}[data-state="closed"]`, {
  animation: `${slideUp} 300ms forwards`,
});

export const answer = style({
  paddingTop: rem(12),
  marginTop: rem(12),
  color: theme.colors.white,
  fontFamily: 'var(--font-pretendard)',
  fontSize: rem(16),
  fontWeight: 400,
  textAlign: 'left',
  lineHeight: '160%',
  borderTop: `${rem(1)} solid ${theme.colors.white10}`,
  whiteSpace: 'pre-wrap',
});
