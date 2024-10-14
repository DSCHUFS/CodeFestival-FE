'use client';

import { clsx } from 'clsx';
import { useEffect, useState, useRef } from 'react';

import * as styles from './styles.css';

export type TOCType = {
  id: string;
  text: string;
  depth: number;
};

type TableOfContentsProps = {
  toc: TOCType[];
};

const TableOfContents = ({ toc }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleClick = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      let lastVisibleId = activeId;
      entries.forEach(entry => {
        if (entry.isIntersecting) lastVisibleId = entry.target.id;
      });
      if (lastVisibleId) setActiveId(lastVisibleId);
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '0px 0px -85% 0px',
      threshold: 0,
    });

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, [toc, activeId]);

  return (
    <ul className={styles.list}>
      {toc.map(({ id, text, depth }) => (
        <li key={id}>
          <button
            className={clsx(styles.item, { [styles.active]: id === activeId })}
            style={{ marginLeft: `${(depth - 2) * 16}px` }}
            onClick={() => handleClick(id)}
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TableOfContents;
