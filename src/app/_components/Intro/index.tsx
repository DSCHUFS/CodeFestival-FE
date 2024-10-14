import Image from 'next/image';
import Link from 'next/link';

import { FESTIVAL } from '@/constants/menu';

import * as styles from './styles.css';

const Intro = () => {
  return (
    <section>
      <h2 className={styles.title}>INTRO</h2>
      <p className={styles.description}>
        HUFS' largest algorithm competition, Code Festival, will be held on October 31.
        <br />
        Participants can choose between the Beginner Track, focused on basic skills, or the
        Challenger Track for more advanced problem solvers.
        <br />
        It's a great opportunity to challenge yourself and improve your skills.
        <br />
      </p>
      <Link className={styles.directLink} href={FESTIVAL.current}>
        제6회 코드페스티벌
        <Image
          src="/static/icons/ic_arrow_right_alt_24dp.svg"
          alt="navigate"
          width={24}
          height={24}
        />
      </Link>
    </section>
  );
};

export default Intro;
