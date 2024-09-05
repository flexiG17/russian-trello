import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWorkspace } from '../../interfaces/IWorkspace.ts';

export const initialWorkspaceState: IWorkspace[] = [
  {
    key: '6919d8bc-28ec-4771-9809-ed37bd1b03b1',
    name: 'Таблица 1',
    tasksCounter: 4
  },
  {
    key: 'd463e1ac-7d9b-4663-a64f-057a54eb44cf',
    name: 'Таблица 2',
    tasksCounter: 1
  },
];

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState: initialWorkspaceState,
  reducers: {
    addWorkspace: (state, action: PayloadAction<IWorkspace>) => {
      state.push(action.payload);
    },
    deleteWorkspace: (state, action: PayloadAction<string>) => {
      return state.filter(workspace => workspace.key !== action.payload);
    },
    changeWorkspaceName: (state, action: PayloadAction<{ key: string, name: string }>) => {
      state[state.findIndex(workspace => workspace.key === action.payload.key)].name = action.payload.name;
    },
    setTasksCounter: (state, action: PayloadAction<{ workspaceKey: string }>) => {
      state.map(workspace => {
        if (workspace.key === action.payload.workspaceKey)
          workspace.tasksCounter += 1;
      });
    }
  }
});

export const {
  addWorkspace,
  deleteWorkspace,
  changeWorkspaceName,
  setTasksCounter
} = workspaceSlice.actions;

export default workspaceSlice.reducer;