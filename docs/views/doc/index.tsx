import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Siderbar from '../../layout/sidebar';
import { siderbarConfig } from './doc.config';
import './doc.less';

const Doc: React.FC = () => {
  return (
    <div className={'doc'}>
      {/* 侧边栏 */}
      <div className={'siderbar'}>
        <Siderbar config={siderbarConfig} />
      </div>
      {/* 组件展示 */}
      <div className={'content'}>
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Doc);
