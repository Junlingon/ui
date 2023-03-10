import React, { memo } from 'react';
import classNames from 'classnames';
import { FormProps } from './type';

export const Form: React.FC<FormProps> = (props) => {
  const { className, width, children, ...restProps } = props;

  const classes = classNames('mi-form', className);

  return (
    <div className={classes} style={{ width: `${width}` }} {...restProps}>
      {children}
    </div>
  );
};

Form.defaultProps = {
  width: '',
  labelwidth: 'auto',
  labelalign: 'end',
  direction: 'x',
};

export default memo(Form);
