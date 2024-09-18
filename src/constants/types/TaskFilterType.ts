import { ITask } from '../../interfaces/ITask.ts';

export type TaskFilterType = keyof Pick<ITask, 'status' | 'tag' | 'priority' | 'name' | 'createdAt'>
