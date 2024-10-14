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
      <button
        className={clsx(styles.close, 'material-symbols-rounded')}
        onClick={() => router.back()}
      >
        close
      </button>
    </div>
  );
}
