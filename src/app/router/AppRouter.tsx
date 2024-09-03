import { RouterProvider } from 'react-router-dom';
import routes from './routerConfig';

const AppRouter = () => {
  return (
      <RouterProvider router={routes}/>
  );
};

export default AppRouter;
