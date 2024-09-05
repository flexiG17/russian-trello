import workspaceReducer from './reducers/workspaces';
import modalReducer from './reducers/modal.ts';
import tasksReducer from './reducers/tasks.ts';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  workspaceReducer,
  modalReducer,
  tasks: tasksReducer
});

export const initStore = (): any => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = initStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof initStore>;

