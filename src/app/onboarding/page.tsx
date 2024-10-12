'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import CIShape from '@/components/CIShape';
import { BLUR } from '@/constants/blur';
import { rem } from '@/utils/pxto';

import * as styles from './page.css';

export default function Page() {
  const searchParams = useSearchParams();
  const ci = (searchParams.get('ci') ?? '480') + 'px';
  const logo = searchParams.get('logo') ?? '156';

  return (
    <div className={styles.root}>
      <div className={styles.background}>
        <Image
          src="/static/images/bg.webp"
          alt="background"
          blurDataURL={BLUR.bg}
          quality={100}
          fill
          priority
        />
      </div>

      <div className={styles.content}>
        <div style={{ width: rem(ci), height: rem(ci) }}>
          <CIShape />
        </div>
        <Image
          src="/static/images/ci.svg"
          alt="logo"
          width={Number(logo)}
          height={(Number(logo) / 156) * 52}
          draggable={false}
          blurDataURL={BLUR.ci}
        />
      </div>
    </div>
  );
}
