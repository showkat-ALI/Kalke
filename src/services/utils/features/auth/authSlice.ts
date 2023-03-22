import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  profilePicture: any | null;
  isBanned: any | boolean;
  emailVerified: any | boolean;
  id: any | number;
  fullName: string;
  email: string;
  role: "employer" | "admin" | "candidate" | any;
  token: any;
};

type InitialState = {
  user: User;
  refresh: boolean;
};

const initialState: InitialState = {
  user: {
    profilePicture: "",
    isBanned: "",
    emailVerified: "",
    id: "",
    fullName: "",
    email: "",
    role: "",
    token: null,
  },
  refresh: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state: any, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.refresh = true;
    },
    logout: (state) => {
      (state.user.profilePicture = ""),
        (state.user.isBanned = ""),
        (state.user.emailVerified = ""),
        (state.user.id = ""),
        (state.user.fullName = ""),
        (state.user.email = ""),
        (state.user.role = "");
      state.user.token = "";
    },
    refresher: (state) => {
      state.refresh = true;
    },
  },
});

export default authSlice.reducer;
export const { signin, logout, refresher } = authSlice.actions;
