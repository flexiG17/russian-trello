import React from 'react';

import styles from './WorkspaceTasksBodyComponent.module.scss';
import { useParams } from 'react-router-dom';
import { useWorkspaceTasks } from '../../../hooks/workspace.ts';
import ColumnTasksComponent from './ColumnTasksComponent';
import { ETaskStatus } from '../../../constants/enums/ETaskStatus.ts';

const WorkspaceTasksBodyComponent: React.FC = () => {
  const { id } = useParams();
  const workspaceTasksList = useWorkspaceTasks(id!);

  return (
    <div className={styles.parent}>
      <div className={`${styles.div1} ${styles.column}`}>
        <ColumnTasksComponent
          workspaceTasksList={workspaceTasksList!}
          columnProps={{
            status: ETaskStatus.OPEN,
            title: 'Открытые задачи'
          }}
        />
      </div>
      <div className={`${styles.div2} ${styles.column}`}>
        <ColumnTasksComponent
          workspaceTasksList={workspaceTasksList!}
          columnProps={{
            status: ETaskStatus.IN_PROGRESS,
            title: 'Задачи в работе'
          }}
        />
      </div>
      <div className={`${styles.div3} ${styles.column}`}>
        <ColumnTasksComponent
          workspaceTasksList={workspaceTasksList!}
          columnProps={{
            status: ETaskStatus.REVIEW,
            title: 'Задачи на проверке'
          }}
        />
      </div>
      <div className={`${styles.div4} ${styles.column}`}>
        <ColumnTasksComponent
          workspaceTasksList={workspaceTasksList!}
          columnProps={{
            status: ETaskStatus.DONE,
            title: 'Выполненные задачи'
          }}
        />
      </div>
    </div>
  );
};

export default WorkspaceTasksBodyComponent;