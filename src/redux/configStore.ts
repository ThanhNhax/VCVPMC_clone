import { configureStore } from "@reduxjs/toolkit";
import hopDongReducer from "./hopDongReducer/hopDongReducer";
import khoBanghiReducer from "./khoBanGhi/khoBanghiReducer";
import lapLichPhatReducer from "./lapLichPhat/lapLichPhatReducer";
import playListReducer from "./playListReducer/playListReducer";
import userReducer from "./userReducer/userReducer";
// ...

export const store = configureStore({
  reducer: {
    khoBanGhi: khoBanghiReducer,
    user: userReducer,
    playList: playListReducer,
    lapLichPhat: lapLichPhatReducer,
    hopDong: hopDongReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
