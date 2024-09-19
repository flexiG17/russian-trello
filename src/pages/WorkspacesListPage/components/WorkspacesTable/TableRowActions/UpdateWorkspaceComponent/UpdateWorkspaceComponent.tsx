import React, { MouseEvent } from 'react';

import { useAppDispatch } from '../../../../../../hooks/redux.ts';
import { showModal } from '../../../../../../store/reducers/modal.ts';
import { EModalTypes } from '../../../../../../components/Modal/enum/EModalTypes.ts';


const UpdateWorkspaceComponent: React.FC<{ workspaceKey: string }> = ({ workspaceKey }) => {
  const dispatch = useAppDispatch();
  const handleOpenModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(showModal({
      isOpen: true,
      type: EModalTypes.WORKSPACE_UPDATE,
      workspaceKey,
      title: 'Изменить таблицу'
    }));
  };

  return (
    <button onClick={handleOpenModal}>
      update
    </button>
  );
};

export default UpdateWorkspaceComponent;