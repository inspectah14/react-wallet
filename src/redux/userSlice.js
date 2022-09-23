import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "userGenerator" / "getUser",
  async () => {
    // Fetch currently wrong on purpose until value function is fixed on input accountName
    let res = await fetch("https://randomuserrr.me/api/");
    let data = await res.json();
    return data.results.map(
      (user) =>
        `${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`
    );
    // return data.results;
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
