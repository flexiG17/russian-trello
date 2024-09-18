import { EModalTypes } from '../enum/EModalTypes.ts';

interface IModalButton {
  text?: string;
}

export interface IModal {
  isOpen: boolean,
  type: EModalTypes,
  title: string,
  workspaceKey?: string,
  submitButton?: IModalButton,
  closeButton?: IModalButton,
}