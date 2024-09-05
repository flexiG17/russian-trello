import React from 'react';
import { ITask } from '../../../../../interfaces/ITask.ts';

import styles from './TaskCardComponent.module.scss';
import { Link } from 'react-router-dom';
import { ERoutes } from '../../../../../constants/enums/ERoutes.ts';

const TaskCardComponent: React.FC<{ task: ITask }> = ({ task }) => {

  return (
    <Link
      to={`${ERoutes.taskPathForNavigate}${task.key}`}
      className={styles.taskCard}
      key={task.key}
    >
      <p>
        №{task.number}
      </p>
      <p>
        {task.name}
      </p>
    </Link>
  );
};

export default TaskCardComponent;