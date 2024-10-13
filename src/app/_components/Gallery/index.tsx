import Link from 'next/link';

import ImagePlaceholder from '@/components/system/ImagePlaceholder';
import { GALLERY } from '@/constants/gallery';

import * as styles from './styles.css';

const Gallery = () => {
  return (
    <section>
      <h2 className={styles.title}>GALLERY</h2>

      <div className={styles.grid}>
        {GALLERY.map(image => (
          <Link href={image.href} className={styles.imageContainer} key={image.src}>
            <ImagePlaceholder src={image.src} alt={image.alt} fill sizes="100%" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
