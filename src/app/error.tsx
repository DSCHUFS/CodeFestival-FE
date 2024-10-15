'use client';

import Layout from '@/components/common/Layout';

import ErrorTemplate from './_components/ErrorTemplate';
import * as styles from './styles.css';

export default function Error() {
  return (
    <Layout className={styles.errorContainer}>
      <ErrorTemplate title="서버 오류" />
    </Layout>
  );
}
