import React from 'react';
import { ITask } from '../../../../../interfaces/ITask.ts';
import { Link } from 'react-router-dom';
import { ERoutes } from '../../../../../constants/enums/ERoutes.ts';

import styles from './TaskCardComponent.module.scss';

const TaskCardComponent: React.FC<{ task: ITask }> = ({ task }) => {

  return (
    <Link
      to={`${ERoutes.taskPathForNavigate}${task.key}`}
      className={styles.taskCard}
      key={task.key}
    >
      <p className={styles.taskCard__title}>
        №{task.number}
      </p>
      <p>
        {task.name}
      </p>
    </Link>
  );
};

export default TaskCardComponent;