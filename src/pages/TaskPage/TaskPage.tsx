import { useParams } from 'react-router-dom';
import { useTask } from '../../hooks/task.ts';

const TaskPage = () => {
  const { id } = useParams();
  const task = useTask(id!);
  return (
    <>
      {JSON.stringify(task, null, 2)}
    </>
  )
}

export default TaskPage;