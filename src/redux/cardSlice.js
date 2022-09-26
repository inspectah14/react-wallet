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
      },
    ],
    user: [],
    id: 0,
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
      state.id += 1;
    },
  },
  extraReducers: {
    [getCardUser.pending]: (state, action) => {
      state.user = action.payload;
    },
    [getCardUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [getCardUser.rejected]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
