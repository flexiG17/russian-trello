import { useAppSelector } from './redux.ts';

export const useWorkspaceTasks = (currentWorkspaceKey: string) => {
  const tasks = useAppSelector((state) => state.tasks)

  return tasks.filter(({ workspaceKey }) => workspaceKey === currentWorkspaceKey);
}

export const useWorkspaceTasksCounter = (currentWorkspaceKey: string) => {
  const workspaceState = useAppSelector((state) => state.workspaceReducer)

  return workspaceState.find(({ key }) => key === currentWorkspaceKey)!.tasksCounter
}