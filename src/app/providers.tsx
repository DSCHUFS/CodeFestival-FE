'use client';
import { Analytics } from '@vercel/analytics/react';
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
      {children}
    </>
  );
};

export default Providers;
