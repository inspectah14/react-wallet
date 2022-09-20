import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cardList",
  initialState: {
    cards: [],
    id: 0,
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
      state.id += 1;
    },
  },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
