import Head from 'next/head';

import { Navbar } from '../Navbar';
import layoutCss from './MainLayout.module.css';

export const MainLayout = ({ children }) => {
  return (
    <div className={layoutCss.container}>
      <Head>
        <title>Home - NextJs</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={layoutCss.main}>{children}</main>
    </div>
  );
};
