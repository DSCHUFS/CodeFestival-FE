import { createGlobalTheme } from '@vanilla-extract/css';

import { rem } from '@/utils/pxto';

export const theme = createGlobalTheme(':root', {
  colors: {
    black: '#000105',
    white: '#FFFFFF',
    white90: 'rgba(255, 255, 255, 0.9)',
    white80: 'rgba(255, 255, 255, 0.8)',

    primary: '#7D8296',
  },

  spaces: {
    xxs: rem(4),
    xs: rem(8),
    sm: rem(12),
    default: rem(16),
    lg: rem(24),
    xl: rem(32),
  },

  sizes: {
    appWidth: rem(1080),
    appInlinePadding: rem(20),
    appHeaderHeight: rem(74),
  },

  layouts: {
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerX: {
      display: 'flex',
      justifyContent: 'center',
    },
    centerY: {
      display: 'flex',
      alignItems: 'center',
    },
    rowBetween: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    columnCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    columnCenterX: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    columnCenterY: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },

  zIndices: {
    hide: '-1',
    auto: 'auto',
    base: '0',
    tab: '10',
    header: '100',
    navigation: '200',
    dropdown: '1000',
    sticky: '1100',
    banner: '1200',
    overlay: '1300',
    modal: '1400',
    popover: '1500',
    toast: '1700',
    tooltip: '1800',
  },
});
