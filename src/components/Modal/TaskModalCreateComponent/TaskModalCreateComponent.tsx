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
import Input from "../../Input/Input.tsx";
import EnumSelector from "../../EnumSelector/EnumSelector.tsx";
import Textarea from "../../Textarea/Textarea.tsx";

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
    <div className={styles.taskCreate}>
      <p className={styles.taskCreate_text}>
        Название
      </p>
      <Input
        value={name}
        type="text"
        action={(e: ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
        placeholder="Введите название задачи"
      />
      <p className={styles.taskCreate_text}>
        Описание
      </p>
      <Textarea
        value={description}
        placeholder="Введите описание задачи"
        action={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setDescription(e.target.value);
        }}
      />
      <p className={styles.taskCreate_text}>
        Приоритет
      </p>
      <EnumSelector field={ETaskPriority} value={priority} setValue={(e: ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.target.value as any);
      }} />
      <ModalActionsComponent submitButtonAction={handleCreateTask} />
    </div>
  );
};

export default TaskModalCreateComponent;