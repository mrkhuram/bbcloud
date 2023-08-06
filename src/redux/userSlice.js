import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      Cookies.set("user", JSON.stringify(action?.payload?.payload?.token));
      state.currentUser = action.payload.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginSuccess, logout, setUserLogin } = userSlice.actions;

export default userSlice.reducer;
