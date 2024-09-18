import { useDispatch } from 'react-redux';
import { showModal } from '../../../../../store/reducers/modal.ts';
import { EModalTypes } from '../../../../../components/Modal/enum/EModalTypes.ts';
import Button from '../../../../../components/Button/Button.tsx';

const TableActionsComponent = () => {const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(showModal({
      isOpen: true,
      type: EModalTypes.WORKSPACE_CREATE,
      title: 'Создать таблицу'
    }));
  };

  return (
    <>
      <Button text='создать таблицу' action={handleOpenModal} />
    </>
  );
};

export default TableActionsComponent;
