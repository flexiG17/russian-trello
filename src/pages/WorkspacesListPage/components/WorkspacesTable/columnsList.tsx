import { ColumnDef } from '@tanstack/react-table';

import { IWorkspace } from '../../../../interfaces/IWorkspace.ts';
import HeaderTitleComponent from './TableHeaderComponent/HeaderTitleComponent';
import TableRowActionsComponent from './TableRowActions';

const columnsList: Array<ColumnDef<IWorkspace, any>> = [
  {
    accessorFn: (row) => row.name,
    id: 'workspaceName',
    header: () => HeaderTitleComponent({ title: 'Название таблицы' }),
  },
  {
    accessorFn: (row) => row.tasksCounter,
    id: 'tasksCounter',
    header: () => HeaderTitleComponent({ title: 'Количество задач' }),
  },
  {
    id: 'actions',
    cell: (info) => <TableRowActionsComponent workspace={info.row.original} />
  },
];

export default columnsList;
