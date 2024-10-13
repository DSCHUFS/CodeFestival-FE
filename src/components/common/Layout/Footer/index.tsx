import * as styles from './styles.css';

const Footer = () => {
  return (
    <footer className={styles.root}>
      {/*<div className={styles.brandingContainer}>*/}
      {/*  <span className={styles.branding}>*/}
      {/*    <ImagePlaceholder*/}
      {/*      className={styles.logo}*/}
      {/*      src="/static/images/ci_gdghufs.webp"*/}
      {/*      alt="GDG on Campus HUFS"*/}
      {/*      width={230.4 * 0.9}*/}
      {/*      height={25.2 * 0.9}*/}
      {/*      draggable={false}*/}
      {/*      blurDataURL={BLUR.gdghufs}*/}
      {/*    />*/}
      {/*  </span>*/}
      {/*</div>*/}
      <p className={styles.license}>
        17035 경기도 용인시 처인구 모현읍 외대로 81 한국외국어대학교 글로벌캠퍼스 공학관 |&nbsp;
        <a href="mailto:codefestival@gdghufs.com">codefestival@gdghufs.com</a>
        <br />© GDG on Campus HUFS. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
