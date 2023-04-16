import axios from "axios";
import { FieldValues } from "react-hook-form";

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/' ,
  // baseURL: process.env.NODE_ENV === "development" ? "http://localhost:7542/2.0/" : "https://neko-back.herokuapp.com/2.0/",
  baseURL: "https://neko-back.herokuapp.com/2.0/",
  withCredentials: true
});

export const authAPI = {
  login(data: FieldValues) {
    return instance.post("auth/login", data);
  },
  logout() {
    return instance.delete("auth/me");
  },
  register(data: FieldValues) {
    return instance.post("auth/register", data);
  },
  me() {
    return instance.post<{email: string, name: string, _id:string}>("auth/me");
  },
  updateProfile(data: FieldValues) {
    return instance.put("auth/me", data);
  },
  forgotPassword({email}: FieldValues) {
    const data = {
      email,
      from: "test-front-admin <ai73a@yandex.by>", // можно указать разработчика фронта)
      message: `<div style="background-color: lime; padding: 15px">password recovery link: 
      <a href="http://localhost:3000/friday-project/set-new-password/$token$">link</a>
      </div>`
    };
    return instance.post("auth/forgot", data);
  },
  setNewPassword(data: FieldValues) {
    return instance.post("auth/set-new-password", data);
  }
};