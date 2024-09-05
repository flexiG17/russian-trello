import { lazy, Suspense } from 'react';
import TasksActionComponent from './TasksActionComponent';

import TasksBodyComponent from './TasksBodyComponent';
import styles from './TasksBodyComponent.module.scss'
import { useAppSelector } from '../../hooks/redux.ts';

const Modal = lazy(() => import('../../components/Modal'));

const WorkspaceTasksPage = () => {
  const modalState = useAppSelector(state => state.modalReducer);

  return (
    <div className={styles.workspaceTasks}>
      <TasksActionComponent />
      <TasksBodyComponent />
      {modalState.isOpen &&
        <Suspense fallback={<></>}>
          <Modal {...modalState} />
        </Suspense>
      }
    </div>
  )
}

export default WorkspaceTasksPage;