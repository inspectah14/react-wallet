import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import masterCardLogo from "../assets/mastercard.png";

export const getCardUser = createAsyncThunk(
  "cardList" / "getCardUser",
  async () => {
    let res = await fetch("https://randomuser.me/api/");
    let data = await res.json();
    return data.results.map(
      (user) =>
        `${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`
    );
  }
);

const cardSlice = createSlice({
  name: "cardList",
  initialState: {
    cards: [
      {
        accountNumber: "6980590932017867",
        accountName: "",
        expiryDate: "2024-01",
        cvcNumber: "111",
        vendorSelector: masterCardLogo,
        activeCard: true,
        id: 0,
      },
    ],
    latestId: 0,
    user: [],
    status: "No data",
  },
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
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
  extraReducers: {
    [getCardUser.pending]: (state, action) => {
      state.status = "Loading";
    },
    [getCardUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
      state.cards.map((card) => {
        return (card.accountName = action.payload);
      });
    },
    [getCardUser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { addCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;
