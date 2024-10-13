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
    </section>
  );
};

export default Intro;
