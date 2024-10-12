'use client';
import { ReactNode } from 'react';

import useScreenSize from '@/hooks/useScreenSize';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  useScreenSize();

  return <>{children}</>;
};

export default Providers;
