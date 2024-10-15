import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  ...theme.layouts.columnCenterX,
});

export const stoneContainer = style({
  ...theme.layouts.columnCenter,
  padding: rem(32),
  borderRadius: rem(16),
  backgroundColor: theme.colors.white05,
});

export const stone = style({
  fontSize: rem(64),
});

export const errorTitle = style({
  marginTop: rem(12),
  color: theme.colors.white,
  fontFamily: 'var(--font-jetbrains)',
  fontSize: rem(28),
  fontWeight: 600,
});

export const errorDescription = style({
  marginTop: rem(6),
  color: theme.colors.white,
  fontFamily: 'var(--font-jetbrains)',
  fontSize: rem(15),
  fontWeight: 400,
});

export const recommend = style({
  marginTop: rem(48),
  color: theme.colors.white,
  fontFamily: 'var(--font-pretendard)',
  fontSize: rem(22),
  fontWeight: 500,
});

export const contact = style({
  marginTop: rem(8),
  color: theme.colors.white60,
  fontFamily: 'var(--font-pretendard)',
  fontSize: rem(13),
  fontWeight: 500,
});

globalStyle(`${contact} > a`, {
  color: theme.colors.white70,
  textDecoration: 'underline',
  transition: 'color 0.2s',
});

globalStyle(`${contact} > a:hover`, {
  color: theme.colors.white90,
});

export const backButton = style({
  width: 'fit-content',
  padding: rem(10),
  marginTop: rem(24),
  color: 'rgba(255, 255, 255, 0.7)',
  fontFamily: 'var(--font-pretendard)',
  fontSize: rem(13),
  fontWeight: 500,
  border: `${rem(1)} solid rgba(255, 255, 255, 0.1)`,
  borderRadius: rem(7),
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  transition: 'border-color 0.2s, background-color 0.2s',

  ':hover': {
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
});
