import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import '@/styles/globals.css';

const pretendard = localFont({
  src: './_fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  preload: true,
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
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
