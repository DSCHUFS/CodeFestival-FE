'use client';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactNode } from 'react';

import useScreenSize from '@/hooks/useScreenSize';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  useScreenSize();

  return (
    <>
      <Analytics />
      <SpeedInsights />
      {children}
    </>
  );
};

export default Providers;
