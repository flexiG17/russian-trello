import { ITask } from './ITask.ts';
import { TaskFilterType } from '../constants/types/TaskFilterType.ts';
import { ETaskStatus } from '../constants/enums/ETaskStatus.ts';
import { ETaskPriority } from '../constants/enums/ETaskPriority.ts';
import { SortSymbolType } from '../constants/types/SortSymbolType.ts';
import { TaskSortFieldType } from '../constants/types/TaskSortFieldType.ts';

export interface IFilterTask {
  field: TaskFilterType | '',
  value: ETaskStatus | ETaskPriority | Date | string
}

export interface ISortTask {
  field: TaskSortFieldType | '',
  order: SortSymbolType
}

export interface ITaskState {
  taskList: ITask[],
  filter?: IFilterTask,
  sort?: ISortTask
}