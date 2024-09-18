import React, { ReactNode } from 'react';

import styles from './Layout.module.scss';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

export default Layout;