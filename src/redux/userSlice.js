import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "userGenerator" / "getUser",
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
      state.user = action.payload;
      state.status = "Found data!";
    },
    [getUser.pending]: (state, action) => {
      state.user = action.payload;
      state.status = "Loading data...";
    },
    [getUser.rejected]: (state, action) => {
      state.user = action.payload;
      state.status = "Failed to get data.";
    },
  },
});

export default userSlice.reducer;
