import React from 'react';
import { flexRender, Table } from '@tanstack/react-table';
// @ts-ignore
import { ITableData } from '../../../interfaces/ITableData.ts';

interface ITableHeaderComponentProps {
  table: Table<ITableData>,
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
