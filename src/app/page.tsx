'use client';
import Layout from '@/components/Layout';

import Dashboard from './_components/Dashboard';
import Sponsor from './_components/Sponsor';

export default function Home() {
  return (
    <Layout>
      <Dashboard />
      <Sponsor />
    </Layout>
  );
}
