import { NextPage } from 'next';

import { Button } from '@nextui-org/react';

const HomePage: NextPage = () => {
  return (
    <>
      <h1>Home: NextPage</h1>
      <Button color={'gradient'}>click</Button>
    </>
  );
};

export default HomePage;
