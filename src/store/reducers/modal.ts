import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModal } from '../../components/Modal/interface/IModal.ts';
import { EModalTypes } from '../../components/Modal/enum/EModalTypes.ts';

export const initialModalSlice: IModal = {
  isOpen: false,
  type: EModalTypes.WORKSPACE_CREATE,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalSlice,
  reducers: {
    showModal: (_, action: PayloadAction<IModal>) => {
      return action.payload
    },
    closeModal: (state) => {
      state.isOpen = false
    }
  }
});

export const {
  showModal,
  closeModal,
} = modalSlice.actions;

export default modalSlice.reducer;