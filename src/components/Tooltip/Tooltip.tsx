import React, { ReactNode } from 'react';

import styles from './Tooltip.module.scss'

interface ITooltip {
  children: ReactNode;
  isOpen: boolean;
}

const Tooltip: React.FC<ITooltip> = ({children}) => {
  return (
    <div className={styles.tooltipWrapper}>
      <div className={styles.tooltipBody}>
        <div className={styles.tooltipBody_buttonsGroup}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;