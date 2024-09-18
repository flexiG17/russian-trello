import { lazy, Suspense } from 'react';
import WorkspaceTasksActionComponent from './TasksActionComponent';

import WorkspaceTasksBodyComponent from './TasksBodyComponent';
import styles from './TasksBodyComponent.module.scss'
import { useAppSelector } from '../../hooks/redux.ts';
import Layout from '../../components/Layout/Layout.tsx';

const Modal = lazy(() => import('../../components/Modal'));

const WorkspaceTasksListPage = () => {
  const modalState = useAppSelector(state => state.modalReducer);

  return (
    <Layout>
      <div className={styles.workspaceTasks}>
        <WorkspaceTasksActionComponent />
        <WorkspaceTasksBodyComponent />
        {modalState.isOpen &&
          <Suspense fallback={<></>}>
            <Modal {...modalState} />
          </Suspense>
        }
      </div>
    </Layout>
  )
}

export default WorkspaceTasksListPage;