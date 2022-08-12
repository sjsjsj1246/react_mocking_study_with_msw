import axios from "axios";

export const register = async (username: string, password: string) =>
  (await axios.post("/api/auth/register", { username, password })).data;
export const login = async (username: string, password: string) =>
  (await axios.post("/api/auth/login", { username, password })).data;
export const check = async () => (await axios.get("/api/auth/check")).data;
export const logout = async () => (await axios.post("/api/auth/logout")).data;
