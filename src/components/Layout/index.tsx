import { ReactNode } from 'react';

import Header from './Header';
import * as styles from './styles.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
