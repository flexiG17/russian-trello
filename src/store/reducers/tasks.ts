import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../interfaces/ITask.ts';
import { ETaskStatus } from '../../constants/enums/ETaskStatus.ts';
import { ETaskPriority } from '../../constants/enums/ETaskPriority.ts';
import { IFilterTask, ISortTask, ITaskState } from '../../interfaces/ITaskState.ts';

const initialTasksState: ITaskState = {
  taskList: [
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
      key: '91fe2e0b-23cb-4291-98f0-d2312c01f07c',
      workspaceKey: '6919d8bc-28ec-4771-9809-ed37bd1b03b1',
      number: `CRP-${5}`,
      name: 'Пятая тестовая задача',
      description: 'Описание пятой задачи',
      status: ETaskStatus.IN_PROGRESS,
      priority: ETaskPriority.MIDDLE,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      key: 'f6c08043-60d8-4273-98e2-38f5279b1d73',
      workspaceKey: '6919d8bc-28ec-4771-9809-ed37bd1b03b1',
      number: `CRP-${6}`,
      name: 'Шестая тестовая задача',
      description: 'Описание шестой задачи',
      status: ETaskStatus.REVIEW,
      priority: ETaskPriority.LOW,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      key: '0291f685-5275-41ae-8e46-91410c0e8af4',
      workspaceKey: '6919d8bc-28ec-4771-9809-ed37bd1b03b1',
      number: `CRP-${7}`,
      name: 'Седьмая тестовая задача',
      description: 'Описание седьмой задачи',
      status: ETaskStatus.OPEN,
      priority: ETaskPriority.HIGH,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      key: '62bf4c27-c82e-4a0d-8f96-433a3a748736',
      workspaceKey: 'd463e1ac-7d9b-4663-a64f-057a54eb44cf',
      number: `CRP-${8}`,
      name: 'Задача второго workspace',
      description: 'Описание задачи второго workspace',
      status: ETaskStatus.IN_PROGRESS,
      priority: ETaskPriority.HIGH,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  filter: {
    field: '',
    value: '',
  },
  sort: {
    field: '',
    order: ''
  }
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasksState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.taskList.push(action.payload);
    },
    setFilter: (state, action: PayloadAction<IFilterTask>) => {
      state.filter = action.payload;
    },
    setSort: (state, action: PayloadAction<ISortTask>) => {
      state.sort = action.payload;
    },
    changeTask: (state, action: PayloadAction<{ key: string, editedTask: ITask }>) => {
      state.taskList[state.taskList.findIndex(task => task.key === action.payload.key)] = {
        ...action.payload.editedTask,
        updatedAt: new Date()
      };
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        taskList: state.taskList.filter(task => task.key !== action.payload)
      };
    },
    dropFilters: (state) => {
      return {
        taskList: [...state.taskList],
        filter: {
          field: '',
          value: '',
        },
        sort: {
          field: '',
          order: ''
        }
      }
    }
  }
});

export const {
  addTask,
  setFilter,
  setSort,
  changeTask,
  deleteTask,
  dropFilters
} = tasksSlice.actions;

export default tasksSlice.reducer;