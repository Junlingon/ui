import React, { memo } from 'react';
import Header from '../header';
import { Outlet } from 'react-router-dom';
import './main.less';

const Main: React.FC = () => {
  return (
    <div className={'main'}>
      <Header />
      <div className={'content'}>
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Main);
