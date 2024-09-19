import React, { ChangeEvent } from 'react';
import { ETaskPriority } from '../../constants/enums/ETaskPriority.ts';
import { ETaskStatus } from '../../constants/enums/ETaskStatus.ts';

import styles from './EnumSelector.module.scss'
import inputStyles from '../Input/Input.module.scss'

export const getEnumFields = (type: typeof ETaskPriority | typeof ETaskStatus) => {
  if (type === ETaskPriority) {
    return Object.entries(ETaskPriority);
  }
  if (type === ETaskStatus) {
    return Object.entries(ETaskStatus);
  }
  return ['', ''];
};

interface IEnumSelector {
  value: ETaskPriority | ETaskStatus,
  setValue: (e: ChangeEvent<HTMLSelectElement>) => void,
  field: typeof ETaskPriority | typeof ETaskStatus
}

const EnumSelector: React.FC<IEnumSelector> = ({ value, setValue, field }) => {
  return (
    <select
      name="taskPrioritySelect"
      id="taskPrioritySelect"
      value={value}
      onChange={setValue}
      className={`${styles.enumSelector} ${inputStyles.input}`}
    >
      <option value="" hidden>
        Выберите {field === ETaskStatus ? 'статус' : 'приоритет'}
      </option>
      {getEnumFields(field).map((enumField) => {
        if (enumField[1] !== '' && field !== ETaskPriority)
          return (
            <option key={enumField[0]} value={enumField[1]}>
              {enumField[1]}
            </option>
          );
        if (enumField[1] !== '' && field === ETaskPriority)
          return (
            <option key={enumField[0]} value={enumField[1]}>
              {enumField[0].toLowerCase()}
            </option>
          );
      })}
    </select>
  );
};

export default EnumSelector;