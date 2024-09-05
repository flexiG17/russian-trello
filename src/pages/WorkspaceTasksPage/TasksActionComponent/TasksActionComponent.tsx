import React, { useCallback } from 'react';

import styles from './TasksActionComponent.module.scss'
import { useAppDispatch } from '../../../hooks/redux.ts';
import { showModal } from '../../../store/reducers/modal.ts';
import { EModalTypes } from '../../../components/Modal/enum/EModalTypes.ts';

const TasksActionComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleCreateTask = useCallback(() => {
    dispatch(showModal({
      isOpen: true,
      type: EModalTypes.TASK_CREATE,
    }))
  }, [dispatch])
  
  return (
    <div className={styles.taskAction}>
      <button onClick={handleCreateTask}>создать</button>
      <button>фильтр по статусам</button>
      <button>фильтр по метке</button>
      <button>фильтр по приоритету</button>
      <button>сортировка по названию</button>
      <button>сортировка по дате создания</button>
      <button>сортировка по приоритету</button>
    </div>
  )
}

export default TasksActionComponent;