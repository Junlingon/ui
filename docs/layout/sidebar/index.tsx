import React, { memo, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Menu, MenuItem } from '../../../src';
import { useNavigate } from 'react-router-dom';
import { IRouterConfig, ISiderbarConfig } from '../../views/doc/doc.type';
import { siderbarConfig } from '../../views/doc/doc.config';

interface IProps {
  children?: ReactNode;
  config: ISiderbarConfig[];
}

const Siderbar: React.FC<IProps> = () => {
  const [menuConfig, setMenuConfig] = useState<IRouterConfig[]>([]);

  useEffect(() => {
    setMenuConfig([
      { title: siderbarConfig[0].title, disabled: true },
      ...siderbarConfig[0].children,
    ]);
  }, []);

  const navgate = useNavigate();

  const handleClick = (index: number) => {
    navgate(menuConfig[index].path as string);
  };

  return (
    <div className='siderbar'>
      <Menu
        mode='vertical'
        defaultIndex={1}
        style={{ width: '220px' }}
        onSelect={(i) => handleClick(i)}
      >
        {menuConfig.map((item, index) => (
          <MenuItem disabled={item.disabled} index={index} key={index}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default memo(Siderbar);
