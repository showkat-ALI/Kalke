import { configureStore } from "@reduxjs/toolkit";
import authApi from "../services/utils/features/api/authApi";

import userApi from "../services/utils/features/api/userApi";
import userReducer from "../services/utils/features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: userReducer,

    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
  devTools: true,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
