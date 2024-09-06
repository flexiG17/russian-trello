import { ETaskStatus } from '../../../../constants/enums/ETaskStatus.ts';
import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const StatusFilterComponent = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleFilter = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  }, [dispatch, id])
  
  return (
    <select 
      name="taskStyleSelect" 
      id="taskStyleSelect"
      onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFilter(e)}
    >
      <option value="" hidden>
        Выберите статус
      </option>
      <option value={ETaskStatus.OPEN}>
        {ETaskStatus.OPEN}
      </option>
      <option value={ETaskStatus.IN_PROGRESS}>
        {ETaskStatus.IN_PROGRESS}
      </option>
      <option value={ETaskStatus.REVIEW}>
        {ETaskStatus.REVIEW}
      </option>
      <option value={ETaskStatus.DONE}>
        {ETaskStatus.DONE}
      </option>
    </select>
  )
}

export default StatusFilterComponent;