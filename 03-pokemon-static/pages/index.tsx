import { NextPage } from 'next';

import { Button } from '@nextui-org/react';
import { Layout } from '@/components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title="Pokemon List">
      <h1>Home: NextPage</h1>
      <Button color={'gradient'}>click</Button>
    </Layout>
  );
};

export default HomePage;
