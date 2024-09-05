import { RouteObject } from 'react-router-dom';
import { ERoutes } from './enums/ERoutes.ts';
import { lazy, Suspense } from 'react';

const WorkspacesListPage = lazy(() => import('../pages/WorkspacesListPage'));
const WorkspacePage = lazy(() => import('../pages/WorkspaceTasksPage/WorkspaceTasksPage.tsx'));
const TaskPage = lazy(() => import('../pages/TaskPage'));

export const appRoutesList: RouteObject[] = [{
  path: ERoutes.main,
  element: <Suspense fallback={<></>}>
    <WorkspacesListPage />
  </Suspense>
}, {
  path: ERoutes.workspace,
  element: <Suspense fallback={<></>}>
    <WorkspacePage />
  </Suspense>
}, {
  path: ERoutes.task,
  element: <Suspense fallback={<></>}>
    <TaskPage />
  </Suspense>
},
];