import React from 'react';

import CloseSvg from '../../images/close.svg';

import styles from './Modal.module.scss';
import { IModal } from './interface/IModal.ts';
import { useAppDispatch } from '../../hooks/redux.ts';
import { closeModal } from '../../store/reducers/modal.ts';
import GetComponentByModalType from './ComponentByModalType.tsx';

const Modal: React.FC<IModal> = (props) => {
  const dispatch = useAppDispatch();

  console.log(props);
  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.modal_close} onClick={handleCloseModal}>
          <img src={CloseSvg} alt="close logo" className={styles.modal_close_icon} />
        </button>
        <h3 className={styles.modal_title}>
          {props.title}
        </h3>
        <GetComponentByModalType type={props.type} />
      </div>
    </div>
  );
};

export default Modal;