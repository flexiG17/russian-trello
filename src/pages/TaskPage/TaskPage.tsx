import { useParams } from 'react-router-dom';
import { useTask } from '../../hooks/task.ts';

import styles from './TaskPage.module.scss';
import TaskActionsComponent from './TaskActionsComponent';
import TaskFieldComponent from './TaskFieldComponent';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux.ts';
import { changeTask } from '../../store/reducers/tasks.ts';
import { ITask } from '../../interfaces/ITask.ts';
import { ETaskStatus } from '../../constants/enums/ETaskStatus.ts';
import { ETaskPriority } from '../../constants/enums/ETaskPriority.ts';
import Button from "../../components/Button/Button.tsx";

const TaskPage = () => {
  const { id } = useParams();
  const task = useTask(id!)!;

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState<ITask>(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleEditTaskField = useCallback((field: keyof ITask, value: string | ETaskPriority | ETaskStatus) => {
    setEditedTask(prevState => {
      return {
        ...prevState,
        [field]: value
      };
    });
  }, []);

  const handleChangeEditMode = () => {
    setIsEditMode(prevState => !prevState);
  };

  const dispatch = useAppDispatch();
  const handleCloseEditMode = useCallback(() => {
    dispatch(changeTask({
      key: id!,
      editedTask
    }));
    setIsEditMode(false);
  }, [dispatch, editedTask, id]);

  return (
    <div className={styles.taskPage}>
      {isEditMode
        ?
        <Button text='сохранить' action={handleCloseEditMode}/>
        :
        <TaskActionsComponent setIsEditMode={handleChangeEditMode} />
      }
      <h3>{task.number}</h3>
      <TaskFieldComponent
        key={`name-${editedTask['key']}`}
        title={'Название'}
        initValue={editedTask.name}
        type="text"
        field="name"
        isEditMode={isEditMode}
        changeTaskField={handleEditTaskField}
      />
      <TaskFieldComponent
        key={`description-${editedTask['key']}`}
        title={'Описание'}
        initValue={editedTask.description}
        type="text"
        field="description"
        isEditMode={isEditMode}
        changeTaskField={handleEditTaskField}
      />
      <TaskFieldComponent
        key={`status-${editedTask['key']}`}
        title={'Статус'}
        initValue={editedTask.status}
        type="select"
        field="status"
        isEditMode={isEditMode}
        changeTaskField={handleEditTaskField}
      />
      <TaskFieldComponent
        key={`priority-${editedTask['key']}`}
        title={'Приоритет'}
        initValue={editedTask.priority.toString()}
        type="select"
        field="priority"
        isEditMode={isEditMode}
        changeTaskField={handleEditTaskField}
      />
      <TaskFieldComponent
        key={`createdAt-${editedTask['key']}`}
        title={'Дата создания'}
        initValue={editedTask.createdAt}
        type="datetime-local"
        field="createdAt"
        isEditMode={isEditMode}
        changeTaskField={handleEditTaskField}
      />
      <TaskFieldComponent
        key={`updatedAt-${editedTask['key']}`}
        title={'Дата изменения'}
        initValue={editedTask.updatedAt}
        type="datetime-local"
        field="updatedAt"
        isEditMode={isEditMode}
        changeTaskField={handleEditTaskField}
      />
    </div>
  );
};

export default TaskPage;