import { clsx } from 'clsx';
import Image from 'next/image';
import { Fragment } from 'react';

import CIShape from '@/components/common/CIShape';
import ScrollDownIndicator from '@/components/common/ScrollDownIndicator';
import { FESTIVAL } from '@/constants/menu';

import * as styles from './styles.css';

const Dashboard = () => {
  const currentTime = new Date();
  const registrationDeadline = new Date(FESTIVAL.current.registrationDeadline);
  const registrationClosed = currentTime > registrationDeadline;
  const competitionDate = new Date(FESTIVAL.current.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Fragment>
      <div className={styles.background}>
        <Image src="/static/images/bg.webp" alt="background" quality={100} fill priority />
        <div className={styles.backgroundGradient} />
        <ScrollDownIndicator />
      </div>
      <section className={styles.root}>
        <h1 className={styles.branding}>HUFS CodeFestival</h1>
        <p className={styles.time}>{competitionDate}</p>
        {registrationClosed ? (
          <span className={clsx(styles.registerLink, styles.registerClosed)}>
            Registration Closed
          </span>
        ) : (
          <a
            className={styles.registerLink}
            href={FESTIVAL.current.registrationLink}
            target="_blank"
          >
            Registration
          </a>
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
