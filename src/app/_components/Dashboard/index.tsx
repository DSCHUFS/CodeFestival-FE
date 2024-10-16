'use client';
import { clsx } from 'clsx';
import Image from 'next/image';
import { Fragment } from 'react';

import CIShape from '@/components/common/CIShape';
import ScrollDownIndicator from '@/components/common/ScrollDownIndicator';
import { BLUR } from '@/constants/blur';
import { FESTIVAL } from '@/constants/menu';

import * as styles from './styles.css';

const Dashboard = () => {
  const currentTime = new Date();
  const registrationDeadline = new Date(FESTIVAL.current.registrationDeadline);

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
        {currentTime < registrationDeadline ? (
          <a
            className={styles.registerLink}
            href={FESTIVAL.current.registrationLink}
            target="_blank"
          >
            Registration
          </a>
        ) : (
          <span className={clsx(styles.registerLink, styles.registerClosed)}>
            Registration Closed
          </span>
        )}
        <p className={styles.souvenir}>간단한 식사와 기념품이 제공됩니다</p>
        <div className={styles.ci}>
          <CIShape />
        </div>
      </section>
    </Fragment>
  );
};

export default Dashboard;
