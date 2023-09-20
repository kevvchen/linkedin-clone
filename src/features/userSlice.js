import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  // name and initialState are both necessary
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    // state - current state, action we want to perform
    // What we get out of it is a reduced state (1 state which is the new state)
    login: (state, action) => {
      // key name of this reducer function is login
      // Behind the scenes, we are making a copy of state which is null, and then updating the copy with the new value
      state.user = action.payload;
    },
    logout: (state) => {
      // key name of this reducer function is logout
      state.user = null;
    },
  },
});

// two named action exports
export const { login, logout } = userSlice.actions;

// Selectors - the current user
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
