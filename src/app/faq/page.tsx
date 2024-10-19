import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';
import Image from 'next/image';

import Layout from '@/components/common/Layout';
import { faq } from '@/constants/faq';

import * as styles from './page.css';

export default function Page() {
  return (
    <Layout>
      <Accordion className={styles.list} type="multiple">
        {faq.map(({ id, question, answer }) => (
          <AccordionItem className={styles.item} key={id} value={id}>
            <AccordionTrigger className={styles.trigger}>
              <Image
                src="/static/icons/ic_arrow_right_24dp.svg"
                alt="Chevron Icon"
                width={24}
                height={24}
                aria-hidden
              />
              {question}
            </AccordionTrigger>
            <AccordionContent className={styles.content}>
              <p className={styles.answer}>{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Layout>
  );
}
