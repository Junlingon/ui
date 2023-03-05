import React from 'react';
import { createHashRouter } from 'react-router-dom';
import '../react-i18next-config';
import Main from '../layout/main';
import Home from '../views/home';
import Doc from '../views/doc';

import MenuCN from '../components-docs/menuCN.mdx';
import ButtonCN from '../components-docs/buttonCN.mdx';
import AvatarCN from '../components-docs/avatarCN.mdx';

import CodeBlock from './components/code-block';
const components = {
  code: CodeBlock as any,
};

export const router = createHashRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [],
      },
      {
        path: '/doc',
        element: <Doc />,
        children: [
          {
            path: '/doc/button',
            element: <ButtonCN components={components} />,
          },
          {
            path: '/doc/menu',
            element: <MenuCN components={components} />,
          },
          {
            path: '/doc/title',
            element: <AvatarCN components={components} />,
          },
        ],
      },
    ],
  },
]);

export default router;
