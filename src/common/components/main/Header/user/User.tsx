import React from "react";
import s from "./user.module.scss";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";

export const User = () => {
  const { name, avatar } = useSelector((state: AppRootStateType) => state.auth);
  return (
    <div className={s.user}>
      <p className={s.name}>{name}</p>
      <img style={{ width: "36px" }}
           src={avatar ? avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9mpmQTUBt-FjnZ6PJQsO1U9zgWHKc5PWDhEiIGC-rw&s"} />
    </div>
  );
};