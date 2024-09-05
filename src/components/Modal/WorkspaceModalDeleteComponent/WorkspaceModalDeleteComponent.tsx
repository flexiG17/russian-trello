import React from 'react';
import ModalActionsComponent from '../ModalActionsComponent/ModalActionsComponent.tsx';
import { useDispatch } from 'react-redux';
import { deleteWorkspace } from '../../../store/reducers/workspaces.ts';
import { useAppSelector } from '../../../hooks/redux.ts';
import { closeModal } from '../../../store/reducers/modal.ts';

const WorkspaceModalDeleteComponent: React.FC = () => {
  const dispatch = useDispatch();
  const {workspaceKey} = useAppSelector(state => state.modalReducer);

  const handleDeleteWorkspace = () => {
    dispatch(deleteWorkspace(workspaceKey!));
    dispatch(closeModal())
  }

  return (
    <>
      Вы уверены, что хотите удалить таблицу?
      <ModalActionsComponent submitButtonAction={handleDeleteWorkspace} />
    </>
  );
};

export default WorkspaceModalDeleteComponent;