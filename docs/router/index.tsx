import React from 'react';
import { createHashRouter } from 'react-router-dom';

import Main from '../layout/main';
import Home from '../views/home';

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
    ],
  },
]);

export default router;
