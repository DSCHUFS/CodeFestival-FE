import { ReactNode } from 'react';

import * as styles from './styles.css';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>{children}</main>
  </div>;
};

export default Layout;