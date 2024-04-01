import { createSlice } from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
  name: "username",
  initialState: {
    value: "",
  },
  reducers: {
    userLogName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userLogName } = usernameSlice.actions;

export default usernameSlice.reducer;
