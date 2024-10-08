import Image from 'next/image';
import { Fragment } from 'react';

import CIShape from '@/components/CIShape';
import ScrollDownIndicator from '@/components/ScrollDownIndicator';
import { BLUR } from '@/constants/blur';

import * as styles from './styles.css';

const Dashboard = () => {
  return (
    <Fragment>
      <div className={styles.background}>
        <Image src="/static/images/bg.webp" alt="background" blurDataURL={BLUR.bg} fill priority />
        <div className={styles.backgroundGradient} />
        <ScrollDownIndicator />
      </div>
      <section className={styles.root}>
        <h1 className={styles.branding}>HUFS CodeFestival</h1>
        <p className={styles.time}>31 September 2024</p>
        <a className={styles.registerLink} href="https://naver.com" target="_blank">
          Registration
        </a>
        <div className={styles.ci}>
          <CIShape />
        </div>
      </section>
    </Fragment>
  );
};

export default Dashboard;
