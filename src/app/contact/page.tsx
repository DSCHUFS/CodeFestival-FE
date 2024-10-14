import Layout from '@/components/common/Layout';
import { METADATA } from '@/constants/metadata';

import * as styles from './page.css';

export default function Page() {
  return (
    <Layout className={styles.root}>
      <p>문의 사항은 아래 이메일로 연락 부탁드립니다.</p>
      <a href={`mailto:${METADATA.email}`}>{METADATA.email}</a>
    </Layout>
  );
}
