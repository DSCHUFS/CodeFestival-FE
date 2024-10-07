'use client';
import CIShape from '@/components/CIShape';
import Layout from '@/components/Layout';

import * as styles from './page.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.background}></div>
      <h1 className={styles.branding}>HUFS CodeFestival</h1>
      <p className={styles.time}>31 September 2024</p>
      <a className={styles.registerLink} href="https://naver.com" target="_blank">
        Registration
      </a>
      <div className={styles.ci}>
        <CIShape />
      </div>
    </Layout>
  );
}
