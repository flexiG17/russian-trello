import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo } from 'react';
import columnsList from './columnsList.tsx';
import TableBodyComponent from './TableBodyComponent';
import TableHeaderComponent from './TableHeaderComponent';
import { IWorkspace } from '../../../../interfaces/IWorkspace.ts';
import { useAppSelector } from '../../../../hooks/redux.ts';

const WorkspacesTable = () => {
  const columns = useMemo<Array<ColumnDef<IWorkspace, any>>>(
    () => columnsList,
    []
  );

  const workspaceStore = useAppSelector((state) => state.workspaceReducer);

  const table = useReactTable({
    data: workspaceStore,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <TableHeaderComponent table={table} />
      <TableBodyComponent table={table} />
    </table>
  );
};

export default WorkspacesTable;
