'use client';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '@/components/system/Dialog';
import { GALLERY, GalleryItem } from '@/constants/gallery';

import * as styles from './page.css';

type GalleryModalParams = {
  params: { id: string; year: string };
};

export default function GalleryModal({ params }: GalleryModalParams) {
  const { id, year } = params;
  const router = useRouter();

  const onOpenChange = (open: boolean) => {
    if (!open) router.back();
  };

  const image: GalleryItem = GALLERY[year][id] || undefined;

  if (!image) return null;

  return (
    <Dialog open={true} onOpenChange={onOpenChange}>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={styles.hidden}></DialogTitle>
          <DialogDescription className={styles.hidden}></DialogDescription>
        </DialogHeader>

        <div className={styles.imageContainer}>
          <button className={styles.imageOverlay} onClick={() => router.back()} />
          <Image className={styles.image} src={image.src} alt={image.alt} fill sizes="100%" />
          <DialogClose asChild>
            <button className={clsx(styles.close, 'material-symbols-rounded')}>close</button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
