import React from 'react';
import { flexRender, Table } from '@tanstack/react-table';
import { IWorkspace } from '../../../../../interfaces/IWorkspace.ts';

import styles from './TableBodyComponent.module.scss';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from '../../../../../constants/enums/ERoutes.ts';

const TableBodyComponent: React.FC<{ table: Table<IWorkspace> }> = ({ table }) => {
  const navigate = useNavigate();

  return (
    <tbody>
    {table.getRowModel().rows.length !== 0
      ?
      table.getRowModel().rows.map((row) => {
        return (
          <tr
            key={row.id}
            onClick={() => navigate(`${ERoutes.workspacePathForNavigate}${row.original.key}`)}
            style={{cursor: 'pointer'}}
            className={styles.tableRow}
          >
            {row.getVisibleCells().map((cell) => {
              return (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              );
            })}
          </tr>
        );
      })
      :
      <tr className={styles.emptyTable}>
        <td colSpan={2}>
          Нет доступных досок
        </td>
      </tr>
    }
    </tbody>

  );
};

export default TableBodyComponent;