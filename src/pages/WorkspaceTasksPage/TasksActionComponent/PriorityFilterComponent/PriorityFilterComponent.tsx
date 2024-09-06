import { ETaskPriority } from '../../../../constants/enums/ETaskPriority.ts';

const PriorityFilterComponent = () => {
  return (
    <select
      name="taskPrioritySelect"
      id="taskPrioritySelect"
    >
      <option value="" hidden>
        Выберите приоритет
      </option>
      <option value={ETaskPriority.LOW}>
        Низкий
      </option>
      <option value={ETaskPriority.MIDDLE}>
        Средний
      </option>
      <option value={ETaskPriority.HIGH}>
        Высокий
      </option>
    </select>
  )
}

export default PriorityFilterComponent;