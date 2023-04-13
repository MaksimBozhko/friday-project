import axios from "axios";

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/' ,
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:7542/2.0/" : "https://neko-back.herokuapp.com/2.0/",
  withCredentials: true
});

export const authAPI = {
  login(data: LoginParamsType) {
    return instance.post("auth/login", data);
  },
  logout() {
    return instance.delete("auth/me");
  },
  regiter(data: RegisterParamsType) {
    return instance.post("auth/register", data);
  },
  auth() {
    return instance.post("auth/me");
  },
  updateProfile(data: UpdateProfileParamsType) {
    return instance.put("auth/me", data);
  },
  forgotPassword(email: string) {
    const data = {
      email,
      from: "test-front-admin <ai73a@yandex.by>", // можно указать разработчика фронта)
      message: `<div style="background-color: lime; padding: 15px">password recovery link: 
      <a href="http://localhost:3000/#/set-new-password/$token$">link</a>
      </div>`
    };
    return instance.post("https://neko-back.herokuapp.com/2.0/auth/forgot", data);
  },
  NewPassword(data: NewPasswordParamsType) {
    return instance.post("auth/set-new-password", data);
  }
};

export type LoginParamsType = {
  email: string
  password: string
  rememberMe: boolean
}
export type RegisterParamsType = {
  email: string
  password: string
}
export type NewPasswordParamsType = {
  password: string
  resetPasswordToken: string
}
export type UpdateProfileParamsType = {
  name: string
  avatar: string
}