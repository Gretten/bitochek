// routesConfig.ts
import { lazy, ReactNode } from 'react';

// Ленивая загрузка компонентов для улучшения производительности
const Portfolio = lazy(() => import('../../pages/portfolio/'));
// const News = lazy(() => import('../../pages/news'));
// const Asset = lazy(() => import('../../pages/asset'));
// const NotFound = lazy(() => import('./pages/notFound'));

// Определение интерфейса для маршрутов
interface RouteConfig {
  path: string;
  component: ReactNode;
  exact?: boolean;
}

const routes: RouteConfig[] = [
  { path: '/', component: <Portfolio />, exact: true },
//   { path: '/about', component: <News /> },
//   { path: '/asset', component: <Asset /> },
//   { path: '*', component: <NotFound /> },  
];

export default routes;