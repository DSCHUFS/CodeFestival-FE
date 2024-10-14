import Image from 'next/image';
import Link from 'next/link';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '@/components/system/Dialog';
import { MENU } from '@/constants/menu';

import * as styles from './styles.css';

type MobileMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  return (
    <Dialog open={open}>
      <DialogOverlay />
      <DialogContent className={styles.mobileMenu}>
        <DialogHeader className={styles.mobileMenuHeaderDisabled}>
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <button className={styles.mobileMenuOverlay} onClick={() => setOpen(false)}>
          <nav className={styles.mobileMenuNavigation}>
            {MENU.map(menu => (
              <Link className={styles.mobileMenuItem} href={menu.href} key={menu.href}>
                {menu.title}
              </Link>
            ))}
          </nav>
        </button>

        <button className={styles.mobileMenuClose} onClick={() => setOpen(false)}>
          <Image src="/static/icons/ic_close_24dp.svg" alt="close" width={24} height={24} />
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default MobileMenu;
