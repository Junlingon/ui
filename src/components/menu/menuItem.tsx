import React, { memo } from 'react';
import { MenuItemProps } from './type';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { useTranslation } from 'react-i18next';

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;

  const { index: currentActive, onSelect } = React.useContext(MenuContext);

  const handleClick = () => {
    if (onSelect && !disabled && typeof index === 'number') {
      onSelect(index);
    }
  };

  const classes = classNames('menu-item', className, {
    'is-active': currentActive === index && !disabled,
    'is-disabled': disabled,
  });

  const { t } = useTranslation(); // 加载组件
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {t(`${children}`)}
    </li>
  );
};

MenuItem.defaultProps = {
  disabled: false,
};

export default memo(MenuItem);
