import { RouterProvider } from 'react-router-dom';
import routerConfig from './routerConfig';

const AppRouter = () => {
  return (
      <RouterProvider router={routerConfig}/>
  );
};

export default AppRouter;
