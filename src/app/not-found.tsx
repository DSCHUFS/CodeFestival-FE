import Layout from '@/components/common/Layout';

import ErrorTemplate from './_components/ErrorTemplate';
import * as styles from './styles.css';

export default function NotFound() {
  return (
    <Layout className={styles.errorContainer}>
      <ErrorTemplate title="404 오류" />
    </Layout>
  );
}
