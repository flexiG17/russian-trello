import React from 'react';

const HeaderTitleComponent: React.FC<{ title: string }> = ({ title }) => {
  return (
    <span style={{ fontSize: '16px', color: '#656565' }}>
      {title}
    </span>
  );
};

export default HeaderTitleComponent;
