import React, { useState } from 'react';
import { useAppDispatch } from '../../../../hooks/redux.ts';
import { SortSymbolType } from '../../../../constants/types/SortSymbolType.ts';

import { setSort } from '../../../../store/reducers/tasks.ts';
import { TaskSortFieldType } from '../../../../constants/types/TaskSortFieldType.ts';

import styles from './SortTaskActionComponent.module.scss';

interface ISortTaskActionComponent {
  field: TaskSortFieldType,
  title: string
}

const getCurrentOrderStyle = (orderState: SortSymbolType, currentOrder: SortSymbolType) => {
  return orderState === currentOrder ? styles.orderButton_selected : '';
};

const SortTaskActionComponent: React.FC<ISortTaskActionComponent> = ({ field, title }) => {
  const [orderType, setOrderType] = useState<SortSymbolType>('');
  const dispatch = useAppDispatch();
  const handleChangeSortType = (orderType: SortSymbolType) => {
    setOrderType(orderType);
    dispatch(setSort({
      field,
      order: orderType
    }));
  };

  return (
    <div className={styles.sortComponent}>
      <span>
        {title}
      </span>
      <button
        className={`${styles.orderButton} ${getCurrentOrderStyle(orderType, 'DESC')}`}
        onClick={() => handleChangeSortType('DESC')}
      >
        ▲
      </button>
      <button
        className={`${styles.orderButton} ${getCurrentOrderStyle(orderType, 'ASC')}`}
        onClick={() => handleChangeSortType('ASC')}>
        ▼
      </button>
    </div>
  );
};

export default SortTaskActionComponent;