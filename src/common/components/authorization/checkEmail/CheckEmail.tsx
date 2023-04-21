import React from "react";
import s from "./checkEmail.module.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Email } from "common/assets/img/email.svg";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";

export const CheckEmail = () => {
  return (
    <AuthWrapper>
      <h1 className={s.title}>Check Email</h1>
      <Email />
      <p className={s.text}>We’ve sent an Email with instructions to example@mail.com</p>
      <NavLink className={s.loginBtn} to="/login">
        <SuperButton className={s.btn}>Back to login</SuperButton>
      </NavLink>
    </AuthWrapper>
  );
};