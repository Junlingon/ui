import React from 'react';
import { createRoot } from 'react-dom/client';
import router from './router';
import { RouterProvider } from 'react-router-dom';

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
