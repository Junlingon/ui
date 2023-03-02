import React, { memo } from 'react';
import Header from '../../layout/header';

const Home: React.FC = () => {
  return (
    <div>
      <Header></Header>
      Home
    </div>
  );
};

export default memo(Home);
