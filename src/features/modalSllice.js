import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWinnerModalOpen: false,
  isTieModalOpen: false,
  isPlayerMode: false,
  isCPUMode: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openWinnerModal(state) {
      state.isWinnerModalOpen = true;
    },
    closeWinnerModal(state) {
      state.isWinnerModalOpen = false;
    },
    openTieModal(state) {
      state.isTieModalOpen = true;
    },
    closeTieModal(state) {
      state.isTieModalOpen = false;
    },
    openPlayerGameModal(state) {
      state.isPlayerMode = true;
    },
    closePlayerGameModal(state) {
      state.isPlayerMode = false;
    },
    openCpuGameModal(state) {
      state.isCPUMode = true;
    },
    closeCpuGameModal(state) {
      state.isCPUMode = false;
    },
  },
});

export const modalActions = modalSlice.actions;
