import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../store/reducers/modal.ts';

import styles from '../Modal.module.scss'
import { useAppSelector } from '../../../hooks/redux.ts';
import Button from '../../Button/Button.tsx';

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
      <Button
        text={submitButton && submitButton.text ? submitButton.text : 'Ок'}
        action={submitButtonAction}
        type='submit'
      />
      <Button
        text={closeButton && closeButton.text ? closeButton.text : 'Отменить'}
        action={handleCloseModal}
        type='cancel'
      />
    </div>
  )
}

export default ModalActionsComponent;