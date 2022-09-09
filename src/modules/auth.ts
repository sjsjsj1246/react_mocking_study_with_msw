import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as AuthAPI from "@apis/auth";

const name = "auth";
export interface User {
  id: string;
  username: string;
}

export const check = createAsyncThunk<User>(`${name}/check`, async () => {
  const response = await AuthAPI.check();
  return response;
});

export const login = createAsyncThunk<
  User,
  { username: string; password: string }
>(`${name}/login`, async ({ username, password }) => {
  const response = await AuthAPI.login(username, password);
  return response;
});

export const register = createAsyncThunk<
  User,
  { username: string; password: string }
>(`${name}/register`, async ({ username, password }) => {
  const response = await AuthAPI.register(username, password);
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
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(check.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
}).reducer;
