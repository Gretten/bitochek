import { lazy } from 'react';
import { RouteConfig } from './types';

const Portfolio = lazy(() => import('@/pages/portfolio/'));
const News = lazy(() => import('@/pages/news'));
const NotFound = lazy(() => import('@/pages/notFound'));
const Asset = lazy(() => import('@/pages/asset'));

const routes: RouteConfig[] = [
  { path: '/', component: <Portfolio />, exact: true },
  { path: '/news', component: <News /> },
  { path: '/asset', component: <Asset /> },
  { path: '*', component: <NotFound /> },  
];

export default routes;