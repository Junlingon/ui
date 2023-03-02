import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './header.less';
import myImg from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className={'left'}>
        <div className={'logo'}>
          <img src={myImg} alt='' style={{ width: '30px', height: '30px' }} />
          <span style={{ marginLeft: '10px' }}> MiniEx UI</span>
        </div>
      </div>
      <div className={'right'}>
        <Link to={'/home'}>home</Link>
        <Link to={'/Doc'}>Doc</Link>
      </div>
    </div>
  );
};

export default memo(Header);
