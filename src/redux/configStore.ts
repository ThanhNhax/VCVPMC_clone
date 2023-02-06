import { configureStore } from "@reduxjs/toolkit";
import khoBanghiReducer from "./khoBanGhi/khoBanghiReducer";
import userReducer from "./userReducer/userReducer";
// ...

export const store = configureStore({
  reducer: {
    khoBanGhi: khoBanghiReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
