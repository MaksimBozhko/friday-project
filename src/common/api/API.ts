import axios from "axios";
import { FieldValues } from "react-hook-form";
import { FilterParamsCardType, FilterParamsType } from "common/types";

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
  fetch(arg: FilterParamsType) {
    return instance.get("cards/pack", {
      params: arg
    });
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
  fetch(arg: FilterParamsCardType) {
    return instance.get(`cards/card?cardsPack_id=${arg.cardsPack_id}`, {
      params: arg
    });
  },
  create(arg: { question: string, answer: string }) {
    return instance.post("cards/card", arg);
  },
  delete(id: string) {
    return instance.delete(`cards/card?id=${id}`);
  },
  update(arg: { _id: string, question: string }) {
    return instance.put("cards/card", arg);
  }
};

export type ResponseUserType = {
  _id: string
  name: string
  email: string
  publicCardPacksCount: number
  avatar: string
}