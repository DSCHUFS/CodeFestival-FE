'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { GALLERY, GalleryItem } from '@/constants/gallery';

import * as styles from './page.css';

type PageParams = {
  params: { year: string; id: string };
};

export default function Page({ params }: PageParams) {
  const { year, id } = params;

  const router = useRouter();

  const image: GalleryItem = GALLERY[year][id] || undefined;

  if (!image) return null;

  return (
    <div className={styles.imageContainer}>
      <Image className={styles.image} src={image.src} alt={image.alt} fill sizes="100%" />
      <button className={clsx(styles.close)} onClick={() => router.back()}>
        <Image src="/static/icons/ic_close_24dp.svg" alt="close" width={24} height={24} />
      </button>
    </div>
  );
}
