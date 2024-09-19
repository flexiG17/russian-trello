import React, {
  HTMLInputTypeAttribute,
} from 'react';
import styles from '../TaskPage.module.scss';
import { ETaskPriority } from '../../../constants/enums/ETaskPriority.ts';
import { ETaskStatus } from '../../../constants/enums/ETaskStatus.ts';
import { ITask } from '../../../interfaces/ITask.ts';
import EnumSelector from '../../../components/EnumSelector/EnumSelector.tsx';
import Textarea from "../../../components/Textarea/Textarea.tsx";
import Input from "../../../components/Input/Input.tsx";

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
              <Textarea
                value={initValue instanceof Date ? initValue.toISOString().slice(0, 16) : initValue}
                action={(e) => changeTaskField(field, e.target.value)}
                cols={20}
                rows={5}
              />
              :
              <Input
                type={type}
                value={initValue instanceof Date ? initValue.toISOString().slice(0, 16) : initValue}
                action={(e) => changeTaskField(field, e.target.value)}
                autoFocus={true}
                disabled={type === 'datetime-local'}
              />
          :
          <p>{initValue instanceof Date ? initValue.toLocaleString() : initValue}</p>
      }
    </div>
  );
};

export default TaskFieldComponent;