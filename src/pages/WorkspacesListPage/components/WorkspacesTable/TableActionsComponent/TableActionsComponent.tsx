import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../../../store/reducers/modal.ts';
import { EModalTypes } from '../../../../../components/Modal/enum/EModalTypes.ts';

const TableActionsComponent = () => {const dispatch = useDispatch();
  const handleOpenModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(showModal({
      isOpen: true,
      type: EModalTypes.WORKSPACE_CREATE,
    }));
  };

  return (
    <>
      <button type="submit" onClick={handleOpenModal}>
        Создать
      </button>
    </>
  );
};

export default TableActionsComponent;
