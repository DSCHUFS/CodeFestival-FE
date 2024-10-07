import { style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const background = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100dvh',
  opacity: 0.7,
  background: `url('/static/images/bg.webp')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  zIndex: -1,
});

export const branding = style({
  marginTop: rem(48),
  color: theme.colors.white,
  fontFamily: 'var(--font-jetbrains)',
  fontSize: rem(28),
  fontWeight: 600,
  lineHeight: '100%',
  textAlign: 'center',

  ...breakpoint({
    mobile: { fontSize: rem(32) },
    tablet: { fontSize: rem(38) },
  }),
});

export const time = style({
  marginTop: rem(20),
  color: theme.colors.white,
  fontFamily: 'var(--font-jetbrains)',
  fontSize: rem(16),
  fontWeight: 500,
  lineHeight: '100%',
  textAlign: 'center',

  ...breakpoint({
    mobile: { fontSize: rem(18) },
    tablet: { fontSize: rem(20) },
  }),
});

export const registerLink = style({
  width: 'fit-content',
  paddingBlock: rem(13),
  paddingInline: rem(32),
  marginTop: rem(38),
  marginInline: 'auto',
  color: 'rgba(255, 255, 255, 0.8)',
  fontFamily: 'var(--font-jetbrains)',
  fontSize: rem(14),
  fontWeight: 500,
  lineHeight: '100%',
  textAlign: 'center',
  border: `${rem(2)} solid rgba(255, 255, 255, 0.8)`,
  borderRadius: rem(36),
  transition: 'color 0.3s, border-color 0.3s, background-color 0.3s',

  ':hover': {
    color: theme.colors.white,
    borderColor: theme.colors.white,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export const ci = style({
  width: rem(300),
  height: rem(300),
  marginTop: rem(48),
  marginInline: 'auto',
});
