import React from 'react';
import { createHashRouter } from 'react-router-dom';

import Home from '../views/home';

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    children: [],
  },
]);

export default router;
