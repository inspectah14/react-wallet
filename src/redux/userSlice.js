import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "userGenerator" / "getUser",
  // async () => {
  //   return fetch("https://randomuser.me/api/").then((res) => res.json());
  // }
  async () => {
    let res = await fetch("https://randomuser.me/api/");
    let data = await res.json();
    return data.results;
  }
);

const userSlice = createSlice({
  name: "userGenerator",
  initialState: {
    user: [],
    status: "No data",
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      state.status = "Found data!";
      console.log(state.status);
    },
    [getUser.pending]: (state, action) => {
      state.status = "Loading data...";
      console.log(state.status);
    },
    [getUser.rejected]: (state, action) => {
      state.status = "Failed to get data.";
      console.log(state.status);
    },
  },
});

export default userSlice.reducer;
