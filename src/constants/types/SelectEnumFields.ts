import { ITask } from '../../interfaces/ITask.ts';

export type SelectEnumFields = keyof Pick<ITask, 'status' | 'priority'>
