import CIShape from '@/components/CIShape';
import ScrollDownIndicator from '@/components/ScrollDownIndicator';

import * as styles from './styles.css';

const Dashboard = () => {
  return (
    <section className={styles.root}>
      <div className={styles.background}>
        <div className={styles.backgroundGradient} />
        <ScrollDownIndicator />
      </div>
      <h1 className={styles.branding}>HUFS CodeFestival</h1>
      <p className={styles.time}>31 September 2024</p>
      <a className={styles.registerLink} href="https://naver.com" target="_blank">
        Registration
      </a>
      <div className={styles.ci}>
        <CIShape />
      </div>
    </section>
  );
};

export default Dashboard;
