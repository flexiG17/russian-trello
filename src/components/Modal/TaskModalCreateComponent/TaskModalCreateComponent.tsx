import { ChangeEvent, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import styles from './TaskModalCreateComponent.module.scss';
import ModalActionsComponent from '../ModalActionsComponent/ModalActionsComponent.tsx';
import { useAppDispatch } from '../../../hooks/redux.ts';
import { closeModal } from '../../../store/reducers/modal.ts';
import { ETaskPriority } from '../../../constants/enums/ETaskPriority.ts';
import { addTask } from '../../../store/reducers/tasks.ts';
import { ETaskStatus } from '../../../constants/enums/ETaskStatus.ts';
import { useWorkspaceTasksCounter } from '../../../hooks/workspace.ts';
import { setTasksCounter } from '../../../store/reducers/workspaces.ts';

const TaskModalCreateComponent = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<ETaskPriority>(ETaskPriority.LOW);
  const { id } = useParams();

  let workspaceTasksCounter = useWorkspaceTasksCounter(id!)
  
  const dispatch = useAppDispatch();
  const handleCreateTask = useCallback(() => {
    dispatch(addTask({
      key: uuidv4(),
      workspaceKey: id!,
      number: `CRP-${++workspaceTasksCounter}`,
      name,
      description,
      status: ETaskStatus.OPEN,
      priority,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
    dispatch(setTasksCounter({
      workspaceKey: id!
    }))
    dispatch(closeModal());
  }, [description, dispatch, id, name, priority, workspaceTasksCounter]);

  return (
    <div className={styles.tasCreate}>
      <h4>
        Создать задачу
      </h4>
      <p>
        Название
      </p>
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
        placeholder="Введите название задачи"
      />
      <p>
        Описание
      </p>
      <textarea
        style={{ resize: 'none' }}
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setDescription(e.target.value);
        }}
        placeholder="Введите описание задачи"
        rows={4}
      />
      <p>
        Приоритет
      </p>
      <select
        name="taskPriority"
        value={priority}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setPriority(e.target.value as any);
        }}
      >
        <option value={ETaskPriority.LOW}>
          Низкий
        </option>
        <option value={ETaskPriority.MIDDLE}>
          Средний
        </option>
        <option value={ETaskPriority.HIGH}>
          Высокий
        </option>
      </select>
      <ModalActionsComponent submitButtonAction={handleCreateTask} />
    </div>
  );
};

export default TaskModalCreateComponent;