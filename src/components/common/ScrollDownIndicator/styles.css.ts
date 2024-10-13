import { style, keyframes } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

const anim = keyframes({
  '0%': {
    opacity: 0,
    transform: `translate(0, ${rem(-8)})`,
  },
  '50%': {
    opacity: 1,
    transform: 'translate(0, 0)',
  },
  '100%': {
    opacity: 0,
    transform: `translate(0, ${rem(8)})`,
  },
});

export const wrapper = style({
  position: 'absolute',
  left: '50%',
  bottom: 0,
  transform: 'translate(-50%, -50%)',
  opacity: 0.9,
});

export const scroll = style({
  ...theme.layouts.center,
  border: `${rem(2)} solid ${theme.colors.white}`,
  borderRadius: rem(30),
  height: rem(48),
  margin: `0 auto ${rem(8)}`,
  textAlign: 'center',
  width: rem(30),
});

export const dot = style({
  animationDuration: '2500ms',
  animationName: anim,
  animationIterationCount: 'infinite',
  fill: theme.colors.white,
});

export const dot2 = style({
  animationDuration: '2500ms',
  animationName: anim,
  animationIterationCount: 'infinite',
  fill: theme.colors.white,
  animationDelay: '1250ms',
});
