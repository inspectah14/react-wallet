import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cardList",
  initialState: {
    cards: [],
    latestId: 0,
  },
  status: "",
  reducers: {
    addCard: (state, action) => {
      if (state.cards.length <= 3) {
        state.cards.push(action.payload);
      } else {
        alert("You cannot add more than 4 cards");
      }
      state.latestId += 1;
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
    deactivateCard: (state, action) => {
      state.cards.forEach((card) => (card.active = false));
    },
    activateCard: (state, action) => {
      state.cards.forEach((card) => {
        if (card.id === action.payload.id) {
          card.active = true;
        } else {
          card.active = false;
        }
      });
    },
  },
});

export const { addCard, deleteCard, activateCard } = cardSlice.actions;
export default cardSlice.reducer;
