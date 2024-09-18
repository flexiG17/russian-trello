import { ETaskPriority } from '../../../../constants/enums/ETaskPriority.ts';
import { useDispatch } from 'react-redux';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { setFilter } from '../../../../store/reducers/tasks.ts';
import EnumSelector from '../../../../components/EnumSelector/EnumSelector.tsx';
import { useAppSelector } from '../../../../hooks/redux.ts';

const PriorityFilterComponent = () => {
  const dispatch = useDispatch();
  const state = useAppSelector(state => state.tasks);
  const [value, setValue] = useState<ETaskPriority>(state.filter?.value as ETaskPriority);

  useEffect(() => {
    setValue(state.filter?.value as ETaskPriority)
  }, [state.filter]);

  const handleFilter = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as ETaskPriority);
    dispatch(setFilter({
      field: 'priority',
      value: e.target.value,
    }));
  }, [dispatch]);

  return (
    <>
      <EnumSelector value={value} setValue={handleFilter} field={ETaskPriority} />
    </>
  );
};

export default PriorityFilterComponent;