import * as styles from './styles.css';

const Gallery = () => {
  return (
    <section>
      <h2 className={styles.title}>Gallery</h2>
      <p className={styles.description}>This is the photo gallery from last season</p>

      <div className={styles.grid}></div>
    </section>
  );
};

export default Gallery;
