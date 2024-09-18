import { useAppSelector } from './redux.ts';
import { ITask } from '../interfaces/ITask.ts';

export const useWorkspaceTasks = (currentWorkspaceKey: string) => {
  const taskList = useAppSelector((state) => state.tasks);
  let resultWorkspaceTasks = [...taskList.taskList.filter(({ workspaceKey }) => workspaceKey === currentWorkspaceKey)]

  if (taskList.filter!.field)
    resultWorkspaceTasks = resultWorkspaceTasks
      .filter((task) => {
        return task[taskList.filter!.field as keyof ITask] === taskList.filter!.value;
      });

  if (taskList.sort!.field) {
    const sortValueType = taskList.sort!.field;
    const sortOrder = taskList.sort!.order;

    switch (sortValueType) {
      case 'name': {
        if (sortOrder === 'ASC')
          resultWorkspaceTasks.sort((a, b) => a.name > b.name ? 1 : -1);
        else if (sortOrder === 'DESC')
          resultWorkspaceTasks.sort((a, b) => b.name > a.name ? 1 : -1);
        break;
      }
      case 'createdAt': {
        if (sortOrder === 'ASC')
          resultWorkspaceTasks
            .sort((a, b) => a.createdAt.getTime() > b.createdAt.getTime() ? 1 : -1);
        else if (sortOrder === 'DESC')
          resultWorkspaceTasks
            .sort((a, b) => b.createdAt.getTime() > a.createdAt.getTime() ? 1 : -1);
        break;
      }
      case 'priority': {
        if (sortOrder === 'ASC')
          resultWorkspaceTasks.sort((a, b) => a.priority > b.priority ? 1 : -1);
        else if (sortOrder === 'DESC')
          resultWorkspaceTasks.sort((a, b) => b.priority > a.priority ? 1 : -1);
        break;
      }
    }
  }

  return resultWorkspaceTasks;
};

export const useWorkspaceTasksCounter = (currentWorkspaceKey: string) => {
  const workspaceState = useAppSelector((state) => state.workspaceReducer);

  return workspaceState.find(({ key }) => key === currentWorkspaceKey)!.tasksCounter;
};