import { Typography } from '@material-ui/core';
import React from 'react';

const Parts = () => {
  return (
    <div>
      <Typography variant="h1">Da Lord</Typography>
      Dis da Parts page boy!
    </div>
  );
};

Parts.getInitialProps = async () => {
  return {
    showLayout: true,
    meta: {
      title: 'Donkey',
      page: 'Parts',
      description: 'Your friendly donkey app!',
    },
  };
};

export default Parts;
