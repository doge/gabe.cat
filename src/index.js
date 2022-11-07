import React from 'react';
import ReactDOM from 'react-dom/client';

import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
