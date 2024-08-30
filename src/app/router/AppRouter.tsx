// App.tsx
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routerConfig';
import { Layout } from '@/app/layout/Layout';

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ path, component }, index) => (
              <Route key={index} path={path} element={component} />
            ))}
          </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
