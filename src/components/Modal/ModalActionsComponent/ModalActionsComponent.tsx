import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../store/reducers/modal.ts';

import styles from '../Modal.module.scss'
import { useAppSelector } from '../../../hooks/redux.ts';

interface IModalActions {
  submitButtonAction: () => void,
  closeButtonAction?: () => void,
}

const ModalActionsComponent: React.FC<IModalActions> = ({submitButtonAction}) => {
  const dispatch = useDispatch();
  const {submitButton, closeButton} = useAppSelector((state) => state.modalReducer)
  const handleCloseModal = () => dispatch(closeModal());

  return (
    <div className={styles.modal_buttonGroup}>
      <button onClick={submitButtonAction}>
        {submitButton && submitButton.text ? submitButton.text : 'Ок'}
      </button>
      <button onClick={handleCloseModal}>
        {closeButton && closeButton.text ? closeButton.text : 'Отменить'}
      </button>
    </div>
  )
}

export default ModalActionsComponent;