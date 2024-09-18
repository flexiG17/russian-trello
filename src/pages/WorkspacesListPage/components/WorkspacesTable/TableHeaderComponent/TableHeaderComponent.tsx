import React from 'react';
import { flexRender, Table } from '@tanstack/react-table';
import { IWorkspace } from '../../../../../interfaces/IWorkspace.ts';

interface ITableHeaderComponentProps {
  table: Table<IWorkspace>,
}

const TableHeaderComponent: React.FC<ITableHeaderComponentProps> = ({ table }) => {
  return (
    <thead>
    {table.getHeaderGroups().map((headerGroup) => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => {
          return (
            <th
              key={header.id}
              colSpan={header.colSpan}
            >
              {flexRender(
                header.column.columnDef.header,
                header.getContext()
              )}
            </th>
          );
        })}
      </tr>
    ))}
    </thead>

  );
};

export default TableHeaderComponent;
