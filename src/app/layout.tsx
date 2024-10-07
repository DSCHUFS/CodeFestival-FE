import '@/styles/globals.css';

import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600'],
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

export const metadata: Metadata = {
  title: '2024 HUFS CodeFestival',
  description: '2024 HUFS CodeFestival',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={clsx(pretendard.variable, jetbrains.variable)}>{children}</body>
    </html>
  );
}
