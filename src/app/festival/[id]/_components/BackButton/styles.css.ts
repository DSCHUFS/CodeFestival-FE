import { style } from '@vanilla-extract/css';

import { rem } from '@/utils/pxto';

export const root = style({
  width: 'fit-content',
  padding: rem(10),
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
