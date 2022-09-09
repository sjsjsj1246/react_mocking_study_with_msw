import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as todoAPI from "@apis/todo";

const name = "todo";
export interface Todo {
  id: string;
  content: string;
  publishedDate: Date;
}

export const getTodoList = createAsyncThunk<Todo[]>(
  `${name}/getTodoList`,
  async () => {
    const response = await todoAPI.getTodoList();
    return response;
  }
);

const initialState = {
  error: null,
  todoList: [] as Todo[],
};

export default createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoList.fulfilled, (state, { payload }) => {
      state.todoList = payload;
    });
  },
}).reducer;
