import { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';

import * as styles from './styles.css';

const ScrollDownIndicator = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  (props, ref: Ref<HTMLDivElement>) => {
    return (
      <div className={styles.wrapper} ref={ref} {...props}>
        <div className={styles.scroll}>
          <svg height="30" width="10">
            <circle className={styles.dot} cx="5" cy="15" r="2" />
            <circle className={styles.dot2} cx="5" cy="15" r="2" />
          </svg>
        </div>
      </div>
    );
  },
);

export default ScrollDownIndicator;
