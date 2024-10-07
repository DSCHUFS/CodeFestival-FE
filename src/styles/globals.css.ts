import { globalStyle } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

import './reset.css';

globalStyle('html', {
  backgroundColor: theme.colors.black,
});

globalStyle('body', {
  paddingBottom: 'env(safe-area-inset-bottom)',
  overflowX: 'hidden',
});
