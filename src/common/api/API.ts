import axios from "axios";
import { FieldValues } from "react-hook-form";
import {
  CreateCardRequestType,
  CreatePackRequestType,
  FetchCardRequestType,
  FetchPackRequestType, UpdateCardRequestType,
  UpdatePackRequestType
} from "common/types"

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/' ,
  // baseURL: process.env.NODE_ENV === "development" ? "http://localhost:7542/2.0/" : "https://neko-back.herokuapp.com/2.0/",
   //baseURL: "http://localhost:7542/2.0/" ,
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
  fetch(arg: FetchPackRequestType) {
    return instance.get("cards/pack", {
      params: arg
    });
  },
  create(cardsPack: CreatePackRequestType) {
    return instance.post("cards/pack",  { cardsPack: cardsPack });
  },
  delete(id: string) {
    return instance.delete(`cards/pack?id=${id}`);
  },
  update(data: UpdatePackRequestType) {
    return instance.put("cards/pack", { cardsPack: data });
  }

};

export const cardsAPI = {
  fetch(arg: FetchCardRequestType) {
    return instance.get(`cards/card?cardsPack_id=${arg.cardsPack_id}`, {
      params: arg
    });
  },
  create(arg:CreateCardRequestType) {
    return instance.post("cards/card", { card: arg });
  },
  delete(id: string) {
    return instance.delete(`cards/card?id=${id}`);
  },
  update(arg: UpdateCardRequestType) {
    return instance.put("cards/card", { card: arg });
  }
};

export type ResponseUserType = {
  _id: string
  name: string
  email: string
  publicCardPacksCount: number
  avatar: string
}