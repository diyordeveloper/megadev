import { configureStore } from "@reduxjs/toolkit";
import BlogsReducer from "./reducer/blogs/BlogsReducer";
export const store = configureStore({
  reducer: {
    blogs: BlogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
