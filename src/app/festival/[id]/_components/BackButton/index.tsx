'use client';
import { clsx } from 'clsx';
import { useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

import * as styles from './styles.css';

type BackButtonProps = ComponentProps<'button'>;

const BackButton = ({ className, ...props }: BackButtonProps) => {
  const router = useRouter();
  return (
    <button className={clsx(styles.root, className)} onClick={() => router.replace('/')} {...props}>
      이전으로 돌아가기
    </button>
  );
};

export default BackButton;
