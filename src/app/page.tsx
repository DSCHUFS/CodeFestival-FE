import Layout from '@/components/common/Layout';

import Dashboard from './_components/Dashboard';
import Gallery from './_components/Gallery';
import Intro from './_components/Intro';
import Sponsor from './_components/Sponsor';
import * as styles from './page.css';

export default function Page() {
  return (
    <Layout>
      <Dashboard />
      <Sponsor />
      <hr className={styles.divider} />
      <Intro />
      <hr className={styles.divider} />
      <Gallery />
    </Layout>
  );
}
