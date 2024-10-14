import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  padding: theme.sizes.appInlinePadding,
});

export const article = style({
  marginTop: rem(48),
  color: theme.colors.white,
  fontFamily: 'var(--font-pretendard)',
});

globalStyle(`${article} h1`, {
  fontSize: rem(40),
  fontWeight: 600,
  marginTop: rem(32),
});

globalStyle(`${article} h2`, {
  fontSize: rem(32),
  fontWeight: 600,
  marginTop: rem(24),
});

globalStyle(`${article} h3`, {
  fontSize: rem(24),
  fontWeight: 600,
  marginTop: rem(16),
  color: '#ffffff',
});

globalStyle(`${article} p`, {
  fontSize: rem(16),
  fontWeight: 400,
  marginTop: rem(16),
});

globalStyle(`${article} strong`, {
  fontWeight: 600,
});

globalStyle(`${article} ul, ${article} ol`, {
  paddingLeft: rem(24),
  marginTop: rem(16),
});

globalStyle(`${article} li`, {
  fontSize: rem(16),
  marginTop: rem(8),
  lineHeight: 1.6,
});

globalStyle(`${article} table`, {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: rem(16),
});

globalStyle(`${article} th`, {
  border: `1px solid #ffffff`,
  padding: rem(8),
  fontWeight: 600,
});

globalStyle(`${article} td`, {
  border: `1px solid #ffffff`,
  padding: rem(8),
});

globalStyle(`${article} blockquote`, {
  margin: `${rem(16)} 0`,
  paddingLeft: rem(16),
  borderLeft: `4px solid #ffffff`,
  color: '#cccccc',
  fontStyle: 'italic',
});
