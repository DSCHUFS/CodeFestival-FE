import '@/styles/globals.css';

import { clsx } from 'clsx';
import { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import Providers from '@/app/providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://codefestival.gdghufs.com'),
  title: '2024 HUFS CodeFestival',
  description: '2024 HUFS CodeFestival',
  openGraph: {
    title: '2024 HUFS CodeFestival',
    description: '2024 HUFS CodeFestival',
    url: 'https://codefestival.gdghufs.com',
    type: 'website',
    images: [
      {
        url: '/static/images/og_image.png',
        width: 1200,
        height: 630,
        alt: '2024 HUFS CodeFestival',
      },
    ],
    siteName: '2024 HUFS CodeFestival',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2024 HUFS CodeFestival',
    description: '2024 HUFS CodeFestival',
    images: [
      {
        url: '/static/images/og_image.png',
        alt: '2024 HUFS CodeFestival',
      },
    ],
    site: '@gdghufs',
  },
  icons: {
    icon: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/static/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', url: '/static/favicon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/static/favicon/favicon-16x16.png' },
    ],
    apple: [
      { sizes: '57x57', url: '/static/favicon/apple-icon-57x57.png' },
      { sizes: '60x60', url: '/static/favicon/apple-icon-60x60.png' },
      { sizes: '72x72', url: '/static/favicon/apple-icon-72x72.png' },
      { sizes: '76x76', url: '/static/favicon/apple-icon-76x76.png' },
      { sizes: '114x114', url: '/static/favicon/apple-icon-114x114.png' },
      { sizes: '120x120', url: '/static/favicon/apple-icon-120x120.png' },
      { sizes: '144x144', url: '/static/favicon/apple-icon-144x144.png' },
      { sizes: '152x152', url: '/static/favicon/apple-icon-152x152.png' },
      { sizes: '180x180', url: '/static/favicon/apple-icon-180x180.png' },
    ],
  },
  manifest: '/static/favicon/manifest.json',
  applicationName: '2024 HUFS CodeFestival',
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  preload: true,
  variable: '--font-jetbrains',
});

const pretendard = localFont({
  src: './_fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  preload: true,
  variable: '--font-pretendard',
});

type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={clsx(pretendard.variable, jetbrains.variable)}>
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
