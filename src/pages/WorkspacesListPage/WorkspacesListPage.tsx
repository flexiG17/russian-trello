import React, { lazy, Suspense } from 'react';
import WorkspacesTable from './components/WorkspacesTable';

import TableActionsComponent from './components/WorkspacesTable/TableActionsComponent';
import { useAppSelector } from '../../hooks/redux.ts';
import Layout from '../../components/Layout/Layout.tsx';

const Modal = lazy(() => import('../../components/Modal'));

import styles from './WorkspacesListPage.module.scss';

const WorkspacesListPage: React.FC = () => {
  const modalState = useAppSelector(state => state.modalReducer);

  return (
    <Layout>
      {modalState.isOpen &&
        <Suspense fallback={<></>}>
          <Modal {...modalState} />
        </Suspense>
      }
      <div className={styles.workspacesPage}>
        <TableActionsComponent />
        <WorkspacesTable />
      </div>
    </Layout>
  );
};

export default WorkspacesListPage;
