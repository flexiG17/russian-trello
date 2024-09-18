import React, { ChangeEvent, useState } from 'react';
import { showModal } from '../../../store/reducers/modal.ts';
import { EModalTypes } from '../enum/EModalTypes.ts';
import ModalActionsComponent from '../ModalActionsComponent/ModalActionsComponent.tsx';
import { useDispatch } from 'react-redux';
import styles
  from '../../../pages/WorkspacesListPage/components/WorkspacesTable/TableActionsComponent/TableActionsComponent.module.scss';
import { addWorkspace } from '../../../store/reducers/workspaces.ts';
import { v4 as uuidv4 } from 'uuid';
import Input from '../../Input/Input.tsx';

const WorkspaceModalCreateComponent: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddTable = () => {
    dispatch(addWorkspace({ key: uuidv4(), name: workspaceName, tasksCounter: 0 }));
    setWorkspaceName('');
    dispatch(showModal({
      isOpen: false,
      type: EModalTypes.WORKSPACE_CREATE,
      title: 'Создание таблицы'
    }));
  };

  const [workspaceName, setWorkspaceName] = useState('');
  const handleSetWorkspaceName = (e: ChangeEvent<HTMLInputElement>) => setWorkspaceName(e.target.value);

  return (
    <>
      <div className={styles.form}>
        <Input
          type='text'
          value={workspaceName}
          action={handleSetWorkspaceName}
          placeholder={'Введите название таблицы'}
        />
      </div>
      <ModalActionsComponent submitButtonAction={handleAddTable} />
    </>
  )
}

export default WorkspaceModalCreateComponent;
