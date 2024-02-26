import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../hook";
interface Blogs_ {
  title: string;
  author: string;
  description: string;
  view: number;
  images: [];
  status: string;
}
interface Blog_ {
  title: string;
  author: string;
  description: string;
  view: number;
  images: [];
  status: string;
}
interface BlogsState {
  blogs: Blogs_[];
  blog: Blog_[];
  loader: boolean;
  error: any;
  loader_id: boolean;
  error_id: any;
}
const initialState: BlogsState = {
  blogs: [],
  blog: [],
  loader: false,
  error: "",
  loader_id: false,
  error_id: "",
};

// -----------------------------------
// @ts-ignore
export const GET_BLOGS = createAsyncThunk("blogs/get", async (thunkAPI) => {
  const response = await axios.get(`${url}/blogs`);
  const data = response.data.result;
  return data;
});
export const GET_BLOGS_ID = createAsyncThunk(
  "blogs/:id/get",
  // @ts-ignore
  async (id: any, thunkAPI) => {
    const response = await axios.get(`${url}/blogs/${id}`);
    const data = response.data.result;
    return data;
  }
);
// -----------------------------------

const BlogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // @ts-ignore
    builder.addCase(GET_BLOGS.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(GET_BLOGS.fulfilled, (state, action) => {
      state.loader = false;
      state.blogs = action.payload;
    });
    builder.addCase(GET_BLOGS.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
      state.blogs = [];
    });
    // GET ID
    // @ts-ignore
    builder.addCase(GET_BLOGS_ID.pending, (state, action) => {
      state.loader_id = true;
    });
    builder.addCase(GET_BLOGS_ID.fulfilled, (state, action) => {
      state.loader_id = false;
      state.blog = [action.payload];
    });

    builder.addCase(GET_BLOGS_ID.rejected, (state, action) => {
      state.loader_id = false;
      state.error_id = action.error.message;
      state.blog = [];
    });
  },
});

export default BlogsSlice.reducer;
