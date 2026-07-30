import api from "./axios";

export const signup = (userData) => {
  return api.post("/auth/signup", userData);
};

export const login = (credentials) => {
  return api.post("/auth/login", credentials);
};