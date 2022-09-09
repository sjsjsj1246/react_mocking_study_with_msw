import axios from "axios";
import { User } from "@modules/auth";

export const register = async (username: string, password: string) =>
  (await axios.post<User>("/auth/register", { username, password })).data;
export const login = async (username: string, password: string) =>
  (await axios.post<User>("/auth/login", { username, password })).data;
export const check = async () => (await axios.get<User>("/auth/check")).data;
export const logout = async () => (await axios.post<null>("/auth/logout")).data;
