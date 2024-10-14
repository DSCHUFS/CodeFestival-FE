'use client';
import { useRouter } from 'next/navigation';

import * as styles from './styles.css';

const BackButton = () => {
  const router = useRouter();
  return (
    <button className={styles.root} onClick={() => router.back()}>
      이전으로 돌아가기
    </button>
  );
};

export default BackButton;
