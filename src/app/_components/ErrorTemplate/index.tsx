'use client';
import { useRouter } from 'next/navigation';

import { METADATA } from '@/constants/metadata';

import * as styles from './styles.css';

type ErrorTemplateProps = {
  title?: string;
  description?: string;
};

const ErrorTemplate = ({ title, description }: ErrorTemplateProps) => {
  const router = useRouter();

  return (
    <div className={styles.root}>
      <div className={styles.stoneContainer}>
        <span className={styles.stone}>🪦</span>
        <h1 className={styles.errorTitle}>{title || '오류'}</h1>
        <p className={styles.errorDescription}>{description || '요청하신 페이지를 찾을 수 없음'}</p>
      </div>

      <h3 className={styles.recommend}>왔던 길로 돌아가는 게 좋겠어요</h3>
      <p className={styles.contact}>
        다시 시도해보시고, 문제가 지속된다면 <a href={`mailto:${METADATA.email}`}>여기</a>로
        알려주세요!
      </p>

      <button className={styles.backButton} onClick={() => router.back()}>
        이전으로 돌아가기
      </button>
    </div>
  );
};

export default ErrorTemplate;
