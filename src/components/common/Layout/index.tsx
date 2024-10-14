import { clsx } from 'clsx';
import { ComponentProps, ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import * as styles from './styles.css';

type LayoutProps = ComponentProps<'main'> & {
  children: ReactNode;
};

const Layout = ({ children, className, ...props }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={clsx(styles.main, className)} {...props}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
