import { lazy } from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";

const Portfolio = lazy(() => import('@/pages/portfolio/'));
const News = lazy(() => import('@/pages/news'));
const NotFound = lazy(() => import('@/pages/notFound'));
const Asset = lazy(() => import('@/pages/asset'));
const Layout = lazy(() => import('@/app/layout'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/news',
        element: <News />
      },
      {
        path: '/asset',
        element: <Asset />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  },

]);

export default routes;