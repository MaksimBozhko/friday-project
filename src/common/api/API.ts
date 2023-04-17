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
    return instance.post<ResponseUserType>("auth/login", data);
  },
  logout() {
    return instance.delete("auth/me");
  },
  register(data: FieldValues) {
    return instance.post("auth/register", data);
  },
  me() {
    return instance.post<ResponseUserType>("auth/me");
  },
  updateProfile(data: FieldValues) {
    return instance.put<ResponseUserType>("auth/me", data);
  },
  forgotPassword({ email }: FieldValues) {
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

export const packsAPI = {
  fetch() {
    return instance.get("cards/pack");
  },
  create(name: string) {
    return instance.post("cards/pack", { name });
  },
  delete(id: string) {
    return instance.delete(`cards/pack?id=${id}`);
  },
  update({ id, name }: { id: string, name: string }) {
    return instance.put("cards/pack", { _id: id, name });
  }

};

export const cardsAPI = {
  fetch(id: string) {
    return instance.get(`cards/card?cardsPack_id=${id}`);
  },
  create() {
    return instance.post("cards/card", { question: "it is question", answer: "it is answer" });
  },
  delete(id: string) {
    return instance.delete(`cards/card?id=${id}`);
  },
  update(id: string) {
    return instance.put("cards/card", { _id: id, question: "it is new question" });
  }
};

export type ResponseUserType = {
  _id: string
  name: string
  email: string
  publicCardPacksCount: number
  avatar: string
}