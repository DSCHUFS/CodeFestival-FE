'use client';
import Image from 'next/image';
import { Fragment } from 'react';

import CIShape from '@/components/common/CIShape';
import ScrollDownIndicator from '@/components/common/ScrollDownIndicator';
import { BLUR } from '@/constants/blur';

import * as styles from './styles.css';

const Dashboard = () => {
  return (
    <Fragment>
      <div className={styles.background}>
        <Image
          src="/static/images/bg.webp"
          alt="background"
          placeholder="blur"
          blurDataURL={BLUR.bg}
          quality={100}
          fill
          priority
        />
        <div className={styles.backgroundGradient} />
        <ScrollDownIndicator />
      </div>
      <section className={styles.root}>
        <h1 className={styles.branding}>HUFS CodeFestival</h1>
        <p className={styles.time}>31 October 2024</p>
        <a
          className={styles.registerLink}
          href="https://forms.gle/dGGqMTxni4RL2Moq7"
          target="_blank"
        >
          Registration
        </a>
        <p className={styles.souvenir}>간단한 식사와 기념품이 제공됩니다</p>
        <div className={styles.ci}>
          <CIShape />
        </div>
      </section>
    </Fragment>
  );
};

export default Dashboard;
