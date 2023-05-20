import { FC, ReactNode } from 'react';
import Head from 'next/head';

import { Navbar } from '@/components/ui';
import layoutCss from './Layout.module.css';

type Props = {
  children?: ReactNode;
  title: string;
};

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="anbreaker"></meta>
        <meta name="description" content={`Information about pokemon number ${title}`} />
        <meta name="keywords" content={`${title},pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main className={layoutCss.main}>{children}</main>
    </>
  );
};
