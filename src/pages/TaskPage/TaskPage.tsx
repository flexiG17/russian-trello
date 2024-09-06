import { useParams } from 'react-router-dom';
import { useTask } from '../../hooks/task.ts';

import styles from './TaskPage.module.scss'

const TaskPage = () => {
  const { id } = useParams();
  const task = useTask(id!)!;

  return (
    <>
      <h3>{task.number}</h3>
      <div className={styles.titleWithText}>
        <h4>Название:</h4>
        <p>{task.name}</p>
      </div>
      <div className={styles.titleWithText}>
        <h4>Описание:</h4>
        <p>{task.description}</p>
      </div>
      <div className={styles.titleWithText}>
        <h4>Статус:</h4>
        <p>{task.status}</p>
      </div>
      <div className={styles.titleWithText}>
        <h4>Приоритет:</h4>
        <p>{task.priority}</p>
      </div>
      <div className={styles.titleWithText}>
        <h4>Дата создания:</h4>
        <p>{task.createdAt.toLocaleString()}</p>
      </div>
      <div className={styles.titleWithText}>
        <h4>Дата изменения:</h4>
        <p>{task.updatedAt.toLocaleString()}</p>
      </div>
    </>
  )
}

export default TaskPage;