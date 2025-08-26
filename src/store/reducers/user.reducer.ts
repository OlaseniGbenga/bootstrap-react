import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ReduxSlices } from "@/types/enums";
import { User } from "@/types/user";

export const initialUserState: User = {
  user_id: "",
  display_name: null,
  email: "",
  username: "",
  phone_number: null,
};

export const userSlice = createSlice({
  name: ReduxSlices.User,
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
