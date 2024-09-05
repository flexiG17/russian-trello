import React, { ChangeEvent, useState } from 'react';
import { showModal } from '../../../store/reducers/modal.ts';
import { EModalTypes } from '../enum/EModalTypes.ts';
import ModalActionsComponent from '../ModalActionsComponent/ModalActionsComponent.tsx';
import { useDispatch } from 'react-redux';
import styles
  from '../../../pages/WorkspacesListPage/components/WorkspacesTable/TableActionsComponent/TableActionsComponent.module.scss';
import { addWorkspace } from '../../../store/reducers/workspaces.ts';
import { v4 as uuidv4 } from 'uuid';

const WorkspaceModalCreateComponent: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddTable = () => {
    dispatch(addWorkspace({ key: uuidv4(), name: workspaceName }));
    setWorkspaceName('');
    dispatch(showModal({
      isOpen: false,
      type: EModalTypes.WORKSPACE_CREATE,
    }));
  };

  const [workspaceName, setWorkspaceName] = useState('');
  const handleSetWorkspaceName = (e: ChangeEvent<HTMLInputElement>) => setWorkspaceName(e.target.value);

  return (
    <>
      <div className={styles.form}>
        <h3 className={styles.fieldTitle}>
          Название таблицы
        </h3>
        <input
          type="text"
          value={workspaceName}
          onChange={handleSetWorkspaceName}
          placeholder='Введите название таблицы'
        />
      </div>
      <ModalActionsComponent submitButtonAction={handleAddTable} />
    </>
  )
}

export default WorkspaceModalCreateComponent;
