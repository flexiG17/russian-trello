import { ETaskStatus } from '../../../../constants/enums/ETaskStatus.ts';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../../store/reducers/tasks.ts';
import EnumSelector from '../../../../components/EnumSelector/EnumSelector.tsx';
import { useAppSelector } from '../../../../hooks/redux.ts';

const StatusFilterComponent = () => {
  const dispatch = useDispatch();
  const state = useAppSelector(state => state.tasks);
  const [value, setValue] = useState<ETaskStatus>(state.filter?.value as ETaskStatus);

  useEffect(() => {
    setValue(state.filter?.value as ETaskStatus)
  }, [state.filter]);

  const handleFilter = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as ETaskStatus);
    dispatch(setFilter({
      field: 'status',
      value: e.target.value,
    }));
  }, [dispatch]);

  return (
    <EnumSelector value={value} setValue={handleFilter} field={ETaskStatus} />
  );
};

export default StatusFilterComponent;