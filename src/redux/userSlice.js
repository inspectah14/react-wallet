import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user" / "getUser", async () => {
  // Fetch currently wrong on purpose until value function is fixed on input accountName
  let res = await fetch("https://randomuser.me/api/");
  let data = await res.json();
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  status: "",
  reducers: {
    //actions
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = "Loading data...";
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "Found data!";
    },
    [getUser.rejected]: (state, action) => {
      state.status = "Failed to get data.";
    },
  },
});

export default userSlice.reducer;
