import { Typography } from '@material-ui/core';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Typography variant="h1">Da Lord</Typography>
      Dis da home page boy!
    </div>
  );
};

Home.getInitialProps = async () => {
  return {
    showLayout: true,
    meta: {
      title: 'Donkey',
      page: 'Home',
      description: 'Your friendly donkey app!',
    },
  };
};

export default Home;
