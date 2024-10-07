import { createGlobalTheme } from '@vanilla-extract/css';
import { rem } from '@/utils/pxto';

export const theme = createGlobalTheme(':root', {
  colors: {
    black: '#000000',
    white: '#FFFFFF',

    // gray
    gray25: 'var(--hcc-colors-gray-25)',
    gray50: 'var(--hcc-colors-gray-50)',
    gray100: 'var(--hcc-colors-gray-100)',
    gray200: 'var(--hcc-colors-gray-200)',
    gray300: 'var(--hcc-colors-gray-300)',
    gray400: 'var(--hcc-colors-gray-400)',
    gray500: 'var(--hcc-colors-gray-500)',
    gray700: 'var(--hcc-colors-gray-700)',
    gray800: 'var(--hcc-colors-gray-800)',
    gray900: 'var(--hcc-colors-gray-900)',
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
    appHeaderHeight: rem(68),
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
