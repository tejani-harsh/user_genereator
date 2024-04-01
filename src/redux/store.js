import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice.js";
import usernameReducer from "./username/usernameSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    username: usernameReducer,
  },
});
