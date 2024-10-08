import { useAppSelector } from './redux.ts';

export const useTask = (taskKey: string) => {
  const taskState = useAppSelector((state) => state.tasks)

  return taskState.taskList.find((task) => task.key === taskKey)
}