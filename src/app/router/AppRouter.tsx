// App.tsx
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routerConfig';
import { Layout } from '@/app/layout/Layout';

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            {routes.map(({ path, component }, index) => (
              <Route key={index} path={path} element={component} />
            ))}
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
