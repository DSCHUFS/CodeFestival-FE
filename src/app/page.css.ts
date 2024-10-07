import { style } from '@vanilla-extract/css';
import { rem } from '@/utils/pxto';
import { theme } from '@/styles/theme.css';

export const background = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100dvh',
  opacity: 0.7,
  background: `url('/assets/images/bg.webp')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  zIndex: -1,
});

export const branding = style({
  marginTop: rem(48),
  color: theme.colors.white,
  fontSize: rem(32),
  fontWeight: 600,
  lineHeight: '100%',
  textAlign: 'center',
});

export const time = style({
  marginTop: rem(20),
  color: theme.colors.white,
  fontSize: rem(20),
  fontWeight: 500,
  lineHeight: '100%',
  textAlign: 'center',
});

export const ci = style({
  width: rem(300),
  height: rem(300),
  marginTop: rem(24),
  marginInline: 'auto',
});