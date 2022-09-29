import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cardList: cardSlice,
  },
});

export default store;
