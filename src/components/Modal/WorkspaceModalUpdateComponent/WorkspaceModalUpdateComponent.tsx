import React, { ChangeEvent, useCallback, useState } from 'react';
import { changeWorkspaceName } from '../../../store/reducers/workspaces.ts';
import ModalActionsComponent from '../ModalActionsComponent/ModalActionsComponent.tsx';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { closeModal } from '../../../store/reducers/modal.ts';

const WorkspaceModalUpdateComponent: React.FC = () => {
  const [newWorkspaceName, setNewWorkspaceName] = useState('');

  const dispatch = useAppDispatch();
  const modalState = useAppSelector(state => state.modalReducer);
  const handleSetNewWorkspaceName = () => {
    dispatch(changeWorkspaceName({
      key: modalState.workspaceKey!,
      name: newWorkspaceName,
    }));
    dispatch(closeModal())
  };

  const handleChangeNewWorkspaceName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNewWorkspaceName(e.target.value);
  }, []);

  return (
    <>
      Изменить название таблицы
      <input
        type="text"
        value={newWorkspaceName}
        onChange={handleChangeNewWorkspaceName}
        placeholder='Введите новое название таблицы'
      />
      <ModalActionsComponent submitButtonAction={handleSetNewWorkspaceName} />
    </>
  );
};

export default WorkspaceModalUpdateComponent;