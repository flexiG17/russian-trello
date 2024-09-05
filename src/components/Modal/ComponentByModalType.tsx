import React from 'react';
import { EModalTypes } from './enum/EModalTypes.ts';

import TaskModalCreateComponent from './TaskModalCreateComponent/TaskModalCreateComponent.tsx';
import WorkspaceModalCreateComponent from './WorkspaceModalCreateComponent/WorkspaceModalCreateComponent.tsx';
import WorkspaceModalDeleteComponent from './WorkspaceModalDeleteComponent/WorkspaceModalDeleteComponent.tsx';
import WorkspaceModalUpdateComponent from './WorkspaceModalUpdateComponent/WorkspaceModalUpdateComponent.tsx';

const GetComponentByModalType: React.FC<{ type: EModalTypes }> = ({ type }) => {
  switch (type) {
    case EModalTypes.WORKSPACE_CREATE:
      return <WorkspaceModalCreateComponent />;
    case EModalTypes.WORKSPACE_DELETE:
      return <WorkspaceModalDeleteComponent />;
    case EModalTypes.WORKSPACE_UPDATE:
      return <WorkspaceModalUpdateComponent />;
    case EModalTypes.TASK_CREATE:
      return <TaskModalCreateComponent />;
  }
};

export default GetComponentByModalType;