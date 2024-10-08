import Image from 'next/image';

import { BLUR } from '@/constants/blur';

import * as styles from './styles.css';

const Sponsor = () => {
  return (
    <section className={styles.grid}>
      <div className={styles.organization}>
        <p className={styles.title}>Hosted By</p>
        <a href="https://soft.hufs.ac.kr/" target="_blank">
          <Image
            className={styles.logo}
            src="/static/images/ci_ai_education_center.webp"
            alt="AI Education Center @ HUFS"
            width={256}
            height={28}
            draggable={false}
            blurDataURL={BLUR.ai_education_center}
          />
        </a>
      </div>
      <div className={styles.organization}>
        <p className={styles.title}>Organized by</p>
        <a href="https://gdghufs.com/" target="_blank">
          <Image
            className={styles.logo}
            src="/static/images/ci_gdghufs.webp"
            alt="GDG on Campus HUFS"
            width={256}
            height={28}
            draggable={false}
            blurDataURL={BLUR.gdghufs}
          />
        </a>
      </div>
      <div className={styles.organization}>
        <p className={styles.title}>Our Sponsors</p>
        <a href="https://www.easyspub.co.kr/" target="_blank">
          <Image
            className={styles.logo}
            src="/static/images/ci_easypub.webp"
            alt="EasysPublishing Co., Ltd."
            width={256}
            height={28}
            draggable={false}
            blurDataURL={BLUR.easypub}
          />
        </a>
      </div>
    </section>
  );
};

export default Sponsor;
