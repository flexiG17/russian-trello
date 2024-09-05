import React from 'react';
import { ETaskStatus } from '../../../../constants/enums/ETaskStatus.ts';

import styles from './ColumnTasksComponent.module.scss';
import TaskCardComponent from './TaskCardComponent';
import { ITask } from '../../../../interfaces/ITask.ts';

interface IColumnTasksComponent {
  workspaceTasksList: ITask[],
  columnProps: {
    status: ETaskStatus,
    title: 'Открытые задачи' | 'Задачи в работе' | 'Задачи на проверке' | 'Выполненные задачи'
  },
}

const getStyleByStatus = (status: ETaskStatus) => {
  switch (status) {
    case ETaskStatus.OPEN:
      return styles.title_open;
    case ETaskStatus.IN_PROGRESS:
      return styles.title_inProgress;
    case ETaskStatus.REVIEW:
      return styles.title_review;
    case ETaskStatus.DONE:
      return styles.title_done;
  }
};

const ColumnTasksComponent: React.FC<IColumnTasksComponent> = ({ workspaceTasksList, columnProps }) => {
  return (
    <div className={styles.columnTasks}>
      <div className={`${styles.title} ${getStyleByStatus(columnProps.status)}`}>
        <p className={styles.title_text}>
          {columnProps.title}
        </p>
      </div>
      <div className={styles.cardsBlock}>
        {workspaceTasksList.map((task) => {
          if (columnProps.status === task.status)
            return (
              <TaskCardComponent key={task.key} task={task} />
            );
        })}
      </div>
    </div>
  );
};

export default ColumnTasksComponent;