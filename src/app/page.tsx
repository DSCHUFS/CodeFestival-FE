import Layout from '@/components/Layout';

import Dashboard from './_components/Dashboard';
import Gallery from './_components/Gallery';
import Sponsor from './_components/Sponsor';

export default function Page() {
  return (
    <Layout>
      <Dashboard />
      <Sponsor />
      <Gallery />
    </Layout>
  );
}
