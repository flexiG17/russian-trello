import { ITask } from '../../interfaces/ITask.ts';

export type TaskSortFieldType = keyof Pick<ITask, 'name' | 'createdAt' | 'priority'>