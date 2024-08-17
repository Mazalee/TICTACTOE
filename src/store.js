import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./features/gameSlice";
import { modalSlice } from "./features/modalSllice";

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    modal: modalSlice.reducer,
  },
});
