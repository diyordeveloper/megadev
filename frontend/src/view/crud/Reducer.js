import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "./Api";
import { toast } from "react-toastify";
const slice = createSlice({
  name: "task",
  initialState: {
    post: [],
    comment: [],
    album: [],
    todos: [],
    user: [],
  },
  reducers: {
    //////////////get
    getPost: (state, action) => {
      state.post = action.payload;
    },
    getComment: (state, action) => {
      state.comment = action.payload;
    },
    getAlbum: (state, action) => {
      state.album = action.payload;
    },
    getTodos: (state, action) => {
      state.todos = action.payload;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
    ////////////////save
    postPost: (state, action) => {
      state.post.unshift(action.payload);
      toast.success("Post saved");
    },
    postComment: (state, action) => {
      state.comment.unshift(action.payload);
      toast.success("Comment saved");
    },
    postAlbum: (state, action) => {
      state.album.unshift(action.payload);
      toast.success("Album saved");
    },
    postTodos: (state, action) => {
      state.todos.unshift(action.payload);
      toast.success("Todos saved");
    },
    postUser: (state, action) => {
      state.user.unshift(action.payload);
      toast.success("User saved");
    },
    ///////////////Update
    EditPostt: (state, action) => {
      state.post.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.body = action.payload.body;
        }
      });
      toast.warning("Post update");
    },
    EditCommentt: (state, action) => {
      state.comment.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
          item.email = action.payload.email;
          item.body = action.payload.body;
        }
      });
      toast.warning("Comment update");
    },
    EditAlbumm: (state, action) => {
      state.album.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
      });
      toast.warning("Album update");
    },
    EditTodoss: (state, action) => {
      state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
      });
      toast.warning("Todos update");
    },
    EditUserr: (state, action) => {
      state.user.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
          item.username = action.payload.username;
          item.email = action.payload.email;
          item.address.street = action.payload.address.street;
        }
      });
      toast.warning("User update");
    },
    // ///////// delete
    DelPost: (state, action) => {
      state.post.splice(action.payload.id, 1);
      toast.error("User delete");
    },
    DelComment: (state, action) => {
      state.comment.splice(action.payload.id, 1);
      toast.error("User delete");
    },
    DelAlbum: (state, action) => {
      state.album.splice(action.payload.id, 1);
      toast.error("User delete");
    },
    DelTodos: (state, action) => {
      state.todos.splice(action.payload.id, 1);
      toast.error("User delete");
    },
    DelUser: (state, action) => {
      state.user.splice(action.payload.id, 1);
      toast.error("User delete");
    },
    // ////////////Ckecked Todos
  },
});

export const Postt = () =>
  apiCall({
    url: "/posts",
    method: "get",
    onSuccess: slice.actions.getPost.type,
  });
export const Commentt = () =>
  apiCall({
    url: "/comments",
    method: "get",
    onSuccess: slice.actions.getComment.type,
  });
export const Albumm = () =>
  apiCall({
    url: "/albums",
    method: "get",
    onSuccess: slice.actions.getAlbum.type,
  });
export const Todoss = () =>
  apiCall({
    url: "/todos",
    method: "get",
    onSuccess: slice.actions.getTodos.type,
  });
export const Userr = () =>
  apiCall({
    url: "/users",
    method: "get",
    onSuccess: slice.actions.getUser.type,
  });
////////////save
export const postPostt = (data) =>
  apiCall({
    url: "/posts",
    method: "post",
    data,
    onSuccess: slice.actions.postPost.type,
  });
export const postCommentt = (data) =>
  apiCall({
    url: "/comments",
    method: "post",
    data,
    onSuccess: slice.actions.postComment.type,
  });
export const postAlbumm = (data) =>
  apiCall({
    url: "/albums",
    method: "post",
    data,
    onSuccess: slice.actions.postAlbum.type,
  });
export const postTodoss = (data) =>
  apiCall({
    url: "/todos",
    method: "post",
    data,
    onSuccess: slice.actions.postTodos.type,
  });
export const postUserr = (data) =>
  apiCall({
    url: "/users",
    method: "post",
    data,
    onSuccess: slice.actions.postUser.type,
  });
////////////////////////Update
export const EditPost = (data) =>
  apiCall({
    url: "/posts/" + data.id,
    method: "put",
    data,
    onSuccess: slice.actions.EditPostt.type,
  });
export const EditComment = (data) =>
  apiCall({
    url: "/comments/" + data.id,
    method: "put",
    data,
    onSuccess: slice.actions.EditCommentt.type,
  });
export const EditAlbum = (data) =>
  apiCall({
    url: "/albums/" + data.id,
    method: "put",
    data,
    onSuccess: slice.actions.EditAlbumm.type,
  });
export const EditTodos = (data) =>
  apiCall({
    url: "/todos/" + data.id,
    method: "put",
    data,
    onSuccess: slice.actions.EditTodoss.type,
  });
export const EditUser = (data) =>
  apiCall({
    url: "/users/" + data.id,
    method: "put",
    data,
    onSuccess: slice.actions.EditUserr.type,
  });
///////////////////////delete
export const DeletePost = (data) =>
  apiCall({
    url: "/posts/" + data.id,
    method: "delete",
    data,
    onSuccess: slice.actions.DelPost.type,
  });
export const DeleteComment = (data) =>
  apiCall({
    url: "/comments/" + data.id,
    method: "delete",
    data,
    onSuccess: slice.actions.DelComment.type,
  });
export const DeleteAlbum = (data) =>
  apiCall({
    url: "/albums/" + data.id,
    method: "delete",
    data,
    onSuccess: slice.actions.DelAlbum.type,
  });
export const DeleteTodos = (data) =>
  apiCall({
    url: "/todos/" + data.id,
    method: "delete",
    data,
    onSuccess: slice.actions.DelTodos.type,
  });
export const DeleteUser = (data) =>
  apiCall({
    url: "/users/" + data.id,
    method: "delete",
    data,
    onSuccess: slice.actions.DelUser.type,
  });
export default slice.reducer;
