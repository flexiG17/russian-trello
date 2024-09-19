import React, { useCallback } from 'react';
import { useAppDispatch } from '../../../hooks/redux.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTask } from '../../../store/reducers/tasks.ts';
import { ERoutes } from '../../../constants/enums/ERoutes.ts';
import { useTask } from '../../../hooks/task.ts';
import Button from "../../../components/Button/Button.tsx";

interface ITaskActions {
  setIsEditMode: () => void;
}

const TaskActionsComponent: React.FC<ITaskActions> = ({setIsEditMode}) => {
  const { id }  = useParams();

  const task = useTask(id!)!;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleDeleteTask = useCallback(() => {
    dispatch(deleteTask(id!));
    navigate(`${ERoutes.workspacePathForNavigate}${task.workspaceKey}`)
  }, [dispatch, id, navigate, task.workspaceKey]);

  return (
    <div style={{display: 'flex', gap: '15px'}}>
      <Button text='редактировать' action={setIsEditMode}/>
      <Button text='удалить' action={handleDeleteTask} type='cancel'/>
    </div>
  )
}

export default TaskActionsComponent;