import React, { useState } from 'react';

import CodeBlock from '../../../router/components/code-block';
import { useTranslation } from 'react-i18next';
import cls from './index.module.less';

interface IShowSourceProps {
  /**
   * 组件元素
   */
  element: React.ReactElement;
  /**
   * 组件元素对应代码段
   */
  code: string;
  /**
   * 代码类型，如js、java、html...
   */
  language?: string;
}

const ShowSourceCode: React.FC<IShowSourceProps> = (props) => {
  const { element, code, language = 'tsx' } = props;
  const [isShowCode, setIsShowCode] = useState(false);
  const { t } = useTranslation(['doc']);

  return (
    <div className={cls.sourceCodeContainer}>
      <div className={cls.elementShow}>{element}</div>
      <div className={cls.blockLine}></div>
      {!isShowCode && (
        <div
          className={cls.clickArea}
          onClick={() => {
            setIsShowCode((pre) => !pre);
          }}
        >
          {t('showCode', { ns: ['doc'] })}
        </div>
      )}
      {isShowCode && (
        <>
          <div className={cls.sourceCodeArea}>
            <CodeBlock children={code} className={`language-${language}`} />
          </div>
          <div
            className={cls.clickArea}
            onClick={() => {
              setIsShowCode((pre) => !pre);
            }}
          >
            {t('hideCode', { ns: ['doc'] })}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowSourceCode;
