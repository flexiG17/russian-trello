import React, { useCallback } from 'react';
import { useAppDispatch } from '../../../hooks/redux.ts';
import { showModal } from '../../../store/reducers/modal.ts';
import { EModalTypes } from '../../../components/Modal/enum/EModalTypes.ts';
import StatusFilterComponent from './StatusFilterComponent';
import PriorityFilterComponent from './PriorityFilterComponent/PriorityFilterComponent.tsx';
import SortTaskActionComponent from './SortTaskActionComponent';

import styles from './WorkspaceTasksActionComponent.module.scss';
import { dropFilters } from '../../../store/reducers/tasks.ts';
import Button from '../../../components/Button/Button.tsx';

const WorkspaceTasksActionComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleCreateTask = useCallback(() => {
    dispatch(showModal({
      isOpen: true,
      type: EModalTypes.TASK_CREATE,
    }));
  }, [dispatch]);

  const handleDropFilters = useCallback(() => {
    dispatch(dropFilters())
  }, [dispatch])

  return (
    <div className={styles.taskAction}>
      <Button text='создать' action={handleCreateTask} />
      <StatusFilterComponent />
      {/*<TagFilterComponent />*/}
      <PriorityFilterComponent />
      <SortTaskActionComponent field='name' title='название' />
      <SortTaskActionComponent field='createdAt' title='дата создания' />
      <SortTaskActionComponent field='priority' title='приоритет' />
      <button onClick={handleDropFilters}>
        Сбросить фильтры
      </button>
    </div>
  );
};

export default WorkspaceTasksActionComponent;