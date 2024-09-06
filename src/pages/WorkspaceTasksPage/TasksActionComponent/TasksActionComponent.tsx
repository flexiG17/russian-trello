import React, { useCallback } from 'react';

import styles from './TasksActionComponent.module.scss';
import { useAppDispatch } from '../../../hooks/redux.ts';
import { showModal } from '../../../store/reducers/modal.ts';
import { EModalTypes } from '../../../components/Modal/enum/EModalTypes.ts';
import StatusFilterComponent from './StatusFilterComponent';
import TagFilterComponent from './TagFilterComponent/TagFilterComponent.tsx';
import PriorityFilterComponent from './PriorityFilterComponent/PriorityFilterComponent.tsx';
import NameSortComponent from './NameSortComponent';
import CreatedAtSortComponent from './CreatedAtSortComponent';
import PrioritySortComponent from './PrioritySortComponent';

const TasksActionComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleCreateTask = useCallback(() => {
    dispatch(showModal({
      isOpen: true,
      type: EModalTypes.TASK_CREATE,
    }));
  }, [dispatch]);

  return (
    <div className={styles.taskAction}>
      <button onClick={handleCreateTask}>
        создать
      </button>
      <StatusFilterComponent />
      <TagFilterComponent />
      <PriorityFilterComponent />
      <NameSortComponent />
      <CreatedAtSortComponent />
      <PrioritySortComponent />
    </div>
  );
};

export default TasksActionComponent;