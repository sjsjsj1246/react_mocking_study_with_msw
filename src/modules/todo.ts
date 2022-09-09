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

export const getTodo = createAsyncThunk<Todo, { id: number }>(
  `${name}/getTodo`,
  async ({ id }) => {
    const response = await todoAPI.getTodoById(id);
    return response;
  }
);

export const deleteTodo = createAsyncThunk<Todo[], { id: number }>(
  `${name}/deleteTodo`,
  async ({ id }) => {
    await todoAPI.deleteTodo(id);
    const response = await todoAPI.getTodoList();
    return response;
  }
);

export const editTodo = createAsyncThunk<Todo[], { id: number }>(
  `${name}/editTodo`,
  async ({ id }) => {
    await todoAPI.editTodo(id);
    const response = await todoAPI.getTodoList();
    return response;
  }
);

export const toggleTodo = createAsyncThunk<Todo[], { id: number }>(
  `${name}/toggleTodo`,
  async ({ id }) => {
    await todoAPI.toggleTodo(id);
    const response = await todoAPI.getTodoList();
    return response;
  }
);

const initialState = {
  error: null,
  todoList: [] as Todo[],
  todo: null as Todo | null,
};

export default createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoList.fulfilled, (state, { payload }) => {
      state.todoList = payload;
    });
    builder.addCase(getTodo.fulfilled, (state, { payload }) => {
      state.todo = payload;
    });
    builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
      state.todoList = payload;
    });
    builder.addCase(editTodo.fulfilled, (state, { payload }) => {
      state.todoList = payload;
    });
    builder.addCase(toggleTodo.fulfilled, (state, { payload }) => {
      state.todoList = payload;
    });
  },
}).reducer;
