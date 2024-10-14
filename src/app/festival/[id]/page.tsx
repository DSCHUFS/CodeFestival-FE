import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import path from 'path';

import Layout from '@/components/common/Layout';

import BackButton from './_components/BackButton';
import * as styles from './page.css';

type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const { id } = params;

  const filePath = path.join(process.cwd(), 'content/histories', `${id}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(markdownWithMeta);

  return (
    <Layout>
      <div className={styles.root}>
        <BackButton />
        <article className={styles.article} dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </div>
    </Layout>
  );
}
