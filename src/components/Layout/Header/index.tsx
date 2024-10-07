import * as styles from './styles.css';
import Link from 'next/link';
import Image from 'next/image';
import { MENU } from '@/constants/menu';

const Header = () => {
  return <header className={styles.root}>
    <div className={styles.inner}>
      <Link className={styles.ci} href="/">
        <Image src="/assets/images/ci.svg" alt="logo" width={156} height={52} draggable={false} priority />
      </Link>
      <nav className={styles.navigation}>
        {MENU.map((menu) => <Link className={styles.menu} href={menu.href} key={menu.href}>{menu.title}</Link>)}
      </nav>
    </div>
  </header>;
};

export default Header;