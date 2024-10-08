import Image from 'next/image';

import * as styles from './styles.css';

const Sponsor = () => {
  return (
    <section className={styles.grid}>
      <div className={styles.organization}>
        <p className={styles.title}>Hosted By</p>
        <Image
          className={styles.logo}
          src="/static/images/ci_ai_education_center.webp"
          alt="AI Education Center @ HUFS"
          width={256}
          height={28}
          draggable={false}
        />
      </div>
      <div className={styles.organization}>
        <p className={styles.title}>Organized by</p>
        <Image
          className={styles.logo}
          src="/static/images/ci_gdghufs.webp"
          alt="GDG on Campus HUFS"
          width={256}
          height={28}
          draggable={false}
        />
      </div>
      <div className={styles.organization}>
        <p className={styles.title}>Our Sponsors</p>
        <Image
          className={styles.logo}
          src="/static/images/ci_easypub.webp"
          alt="EasysPublishing Co., Ltd."
          width={256}
          height={28}
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Sponsor;
