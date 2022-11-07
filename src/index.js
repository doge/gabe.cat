import React from 'react';
import ReactDOM from 'react-dom/client';

import { 
  createBrowserRouter,
  redirect,
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
    loader: () => { return redirect("/about"); }
  },
  {
    path: '*',
    loader: () => { return redirect("/"); }
  },
  {
    path: '/about',
    element: <Home />,
    children: [
      {
        path: '/about',
        element: <About />
      }
    ]
  },
  {
    path: '/projects',
    element: <Home />,
    children: [
      {
        path: '/projects',
        element: <Projects />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
