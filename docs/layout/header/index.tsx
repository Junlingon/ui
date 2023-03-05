/* eslint-disable camelcase */
import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.less';
import myImg from '../../assets/logo.png';
import { Button } from '../../../src/';
import i18n from '../../react-i18next-config';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [themeMode, setThemeMode] = useState('light');
  const handleModule = () => {
    if (themeMode === 'light') {
      setThemeMode('mi-dark');
      document.body.classList.add('mi-dark');
    } else {
      setThemeMode('light');
      document.body.classList.remove('mi-dark');
    }
  };

  const [pre_lang, setPreLang] = useState(localStorage.getItem('i18nextLng') || 'zh'); // 上一次保存的语言
  const [pre_name, setPreName] = useState(`切换${pre_lang === 'zh' ? '英文' : '中文'}`); // 上一次保存的名称

  // 切换语言
  const changeLang = () => {
    if (pre_lang.toString() == 'zh') {
      i18n.changeLanguage('en'); // 更改i18n语言

      setPreLang('en');
      setPreName('切换中文');
    } else {
      i18n.changeLanguage('zh');

      setPreLang('zh');
      setPreName('切换英文');
    }
  };

  const { t } = useTranslation(); // 加载组件
  return (
    <div className='header'>
      <div className={'left'}>
        <div className={'logo'}>
          <img src={myImg} alt='' style={{ width: '30px', height: '30px' }} />
          <span style={{ marginLeft: '10px' }}> MiniEx UI</span>
        </div>
      </div>
      <div className={'right'}>
        <Link to={'/home'}>{t('home')}</Link>
        <Link to={'/Doc'}>Doc</Link>
        <Button onClick={handleModule}>{themeMode}</Button>
        <Button onClick={changeLang}>{pre_name}</Button>
      </div>
    </div>
  );
};

export default memo(Header);
