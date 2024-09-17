import { Routes } from '@/shared/routes';
import { lazy } from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";

const Portfolio = lazy(() => import('@/pages/portfolio/'));
const News = lazy(() => import('@/pages/news'));
const NotFound = lazy(() => import('@/pages/notFound'));
const Asset = lazy(() => import('@/pages/asset'));
const Layout = lazy(() => import('@/app/layout'));

const routerConfig = createBrowserRouter([
  {
    path: Routes.Main,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Portfolio />
      },
      {
        index: true,
        element: <Portfolio />
      },
      {
        path: Routes.News,
        element: <News />
      },
      {
        path: Routes.Asset,
        element: <Asset />
      },
      {
        path: Routes.Other,
        element: <NotFound />
      },
    ]
  },

]);

export default routerConfig;