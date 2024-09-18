import React, {
  HTMLInputTypeAttribute,
} from 'react';
import styles from '../TaskPage.module.scss';
import { ETaskPriority } from '../../../constants/enums/ETaskPriority.ts';
import { ETaskStatus } from '../../../constants/enums/ETaskStatus.ts';
import { ITask } from '../../../interfaces/ITask.ts';
import EnumSelector from '../../../components/EnumSelector/EnumSelector.tsx';

interface ITaskFieldComponent {
  title: string,
  initValue: string | Date | ETaskPriority | ETaskStatus,
  field: keyof ITask,
  type: HTMLInputTypeAttribute | 'select',
  isEditMode: boolean,
  changeTaskField: (field: keyof ITask, value: string | ETaskPriority | ETaskStatus) => void,
}

const TaskFieldComponent: React.FC<ITaskFieldComponent>
  = ({
       title,
       initValue,
       field,
       type,
       isEditMode,
       changeTaskField
     }) => {

  return (
    <div className={styles.titleWithText}>
      <h3>{title}:</h3>
      {
        isEditMode
          ?
          type === 'select'
            ?
            <EnumSelector
              value={initValue as ETaskPriority | ETaskStatus}
              setValue={(e) => changeTaskField(field, e.target.value)}
              field={field === 'priority' ? ETaskPriority : ETaskStatus}
            />
            :
            field === 'description'
              ?
              <textarea
                name=""
                id=""
                value={initValue instanceof Date ? initValue.toISOString().slice(0, 16) : initValue}
                onChange={(e) => changeTaskField(field, e.target.value)}
                cols={20}
                rows={5}
                className={styles.description}
              />
              :
              <input
                type={type}
                name={field}
                disabled={type === 'datetime-local'}
                className={styles.inputField}
                autoFocus={true}
                value={initValue instanceof Date ? initValue.toISOString().slice(0, 16) : initValue}
                onChange={(e) => changeTaskField(field, e.target.value)}
              />
          :
          <p>{initValue instanceof Date ? initValue.toLocaleString() : initValue}</p>
      }
    </div>
  );
};

export default TaskFieldComponent;