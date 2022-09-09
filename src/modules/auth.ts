import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as AuthAPI from "@apis/auth";

const name = "auth";
export interface User {
  username: string;
}

export const check = createAsyncThunk<User>(`${name}/getTodoList`, async () => {
  const response = await AuthAPI.check();
  return response;
});

const initialState = {
  error: null,
  user: null as User | null,
};

export default createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(check.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
}).reducer;
