import { EModalTypes } from '../enum/EModalTypes.ts';

interface IModalButton {
  text?: string;
}

export interface IModal {
  isOpen: boolean,
  type: EModalTypes,
  workspaceKey?: string,
  // children?: ReactNode,
  // handleOpenModal: () => void,
  submitButton?: IModalButton,
  closeButton?: IModalButton,
}