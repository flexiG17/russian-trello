import React, { lazy, useState, MouseEvent } from 'react';

import MenuSvg from '../../../../../images/menuDots.svg';

import styles from './TableRowActionsComponent.module.scss';
import { IWorkspace } from '../../../../../interfaces/IWorkspace.ts';
import DeleteWorkspaceComponent from './DeleteWorkspaceComponent';
import UpdateWorkspaceComponent from './UpdateWorkspaceComponent';

const Tooltip = lazy(() => import('../../../../../components/Tooltip'));

const TableRowActionsComponent: React.FC<{ workspace: IWorkspace }> = ({ workspace }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleOpenTooltip = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsTooltipOpen(prevState => !prevState);
  };

  return (
    <>
      {isTooltipOpen && (
        <Tooltip isOpen={isTooltipOpen}>
          <DeleteWorkspaceComponent workspaceKey={workspace.key} />
          <UpdateWorkspaceComponent workspaceKey={workspace.key} />
        </Tooltip>
      )}
      <button onClick={handleOpenTooltip} className={styles.button}>
        <img src={MenuSvg} alt="menu logo" className={styles.menuLogo} />
      </button>
    </>
  );
};

export default TableRowActionsComponent;