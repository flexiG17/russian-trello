import React from 'react';
import { useRoutes } from 'react-router-dom';
import { appRoutesList } from '../../constants/routes.tsx';

const Router: React.FC = () => {
  return useRoutes(appRoutesList);
};

const AppRouter = () => {
  return <>
    <Router />
  </>;
};

export default AppRouter;