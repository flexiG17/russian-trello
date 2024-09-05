import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../interfaces/ITask.ts';
import { ETaskStatus } from '../../constants/enums/ETaskStatus.ts';
import { ETaskPriority } from '../../constants/enums/ETaskPriority.ts';

const initialTasksState: ITask[] = [
  {
    key: 'bdbe00b0-cf45-4f25-b7ec-b18339503598',
    workspaceKey: '6919d8bc-28ec-4771-9809-ed37bd1b03b1',
    number: `CRP-${1}`,
    name: 'Задача тестовая',
    description: 'Тестовая задача для проверки работы задач',
    status: ETaskStatus.OPEN,
    priority: ETaskPriority.LOW,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    key: 'd0b61673-a68e-4ef8-b640-e2755d00819e',
    workspaceKey: '6919d8bc-28ec-4771-9809-ed37bd1b03b1',
    number: `CRP-${2}`,
    name: 'Вторая задача тестовая',
    description: 'Вторая тестовая задача для проверки работы задач',
    status: ETaskStatus.IN_PROGRESS,
    priority: ETaskPriority.MIDDLE,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    key: '938a9ba5-7ec4-4ea9-953a-21496d781923',
    workspaceKey: '6919d8bc-28ec-4771-9809-ed37bd1b03b1',
    number: `CRP-${3}`,
    name: 'Третья тестовая задача',
    description: 'Описание третьей задачи',
    status: ETaskStatus.OPEN,
    priority: ETaskPriority.LOW,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    key: '15582093-e242-4e2a-84fd-b1237ca78392',
    workspaceKey: '6919d8bc-28ec-4771-9809-ed37bd1b03b1',
    number: `CRP-${4}`,
    name: 'Четвертая реальная задача',
    description: 'Описание четвертой задачи',
    status: ETaskStatus.DONE,
    priority: ETaskPriority.HIGH,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    key: 'bdbe00b0-cf45-4f25-b7ec-b18339503598',
    workspaceKey: 'd463e1ac-7d9b-4663-a64f-057a54eb44cf',
    number: `CRP-${5}`,
    name: 'Задача второго workspace',
    description: 'Описание задачи второго workspace',
    status: ETaskStatus.IN_PROGRESS,
    priority: ETaskPriority.HIGH,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasksState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.push(action.payload);
    }
  }
});

export const {
  addTask
} = tasksSlice.actions;

export default tasksSlice.reducer;