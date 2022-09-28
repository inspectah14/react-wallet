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
      },
    ],
    user: [],
    status: "No data",
    id: 0,
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
      state.id += 1;
    },
    addUser: (state, action) => {
      state.cards.map((card) => {
        return (card.accountName = action.payload);
      });
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

export const { addCard, addUser } = cardSlice.actions;
export default cardSlice.reducer;
