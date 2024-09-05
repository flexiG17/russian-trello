import React, { lazy, Suspense } from 'react';
import WorkspacesTable from './components/WorkspacesTable';

import TableActionsComponent from './components/WorkspacesTable/TableActionsComponent';
import { useAppSelector } from '../../hooks/redux.ts';

const Modal = lazy(() => import('../../components/Modal'));

const WorkspacesListPage: React.FC = () => {
  const modalState = useAppSelector(state => state.modalReducer);

  return (
    <div>
      {modalState.isOpen &&
        <Suspense fallback={<></>}>
          <Modal {...modalState} />
        </Suspense>
      }
      <TableActionsComponent />
      <WorkspacesTable />
    </div>
  );
};

export default WorkspacesListPage;
