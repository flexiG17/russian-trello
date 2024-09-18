import { ETaskStatus } from '../constants/enums/ETaskStatus.ts';
import { ETaskPriority } from '../constants/enums/ETaskPriority.ts';

export interface ITask {
  key: string,
  workspaceKey: string,
  number: `CRP-${string}` | '',
  name: string,
  description: string,
  status: ETaskStatus,
  tag?: string,
  priority: ETaskPriority,
  createdAt: Date,
  updatedAt: Date,
}