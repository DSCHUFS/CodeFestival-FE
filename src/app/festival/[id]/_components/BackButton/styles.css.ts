import { style } from '@vanilla-extract/css';

import { rem } from '@/utils/pxto';

export const root = style({
  width: 'fit-content',
  padding: rem(10),
  color: 'rgba(255, 255, 255, 0.7)',
  fontFamily: 'var(--font-pretendard)',
  fontSize: rem(13),
  fontWeight: 500,
  borderRadius: rem(7),
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
});
