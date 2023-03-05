import React from 'react';
import { createHashRouter } from 'react-router-dom';
import '../react-i18next-config';
import Main from '../layout/main';
import Home from '../views/home';
import Doc from '../views/doc';

export const router = createHashRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [],
      },
      {
        path: '/doc',
        element: <Doc />,
        children: [],
      },
    ],
  },
]);

export default router;
