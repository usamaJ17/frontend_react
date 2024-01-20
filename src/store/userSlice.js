import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  email: "",
  auth: false,
  lang:"en"
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { _id, email, auth } = action.payload;

      state._id = _id;
      state.email = email;
      state.auth = auth;
    },
    resetUser: (state) => {
      state._id = "";
      state.email = "";
      state.auth = false;
    },
    setLang(state,action){
      state.lang = action.payload
    }
  },
});

export const { setUser, resetUser,setLang } = userSlice.actions;

export default userSlice.reducer;
