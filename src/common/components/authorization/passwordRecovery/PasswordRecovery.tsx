import React from "react";
import s from "./passwordRecovery.module.scss";

import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";

export const PasswordRecovery = () => {
  return (
    <AuthWrapper>
      <h1 className={s.title}>Forgot your password?</h1>
      <div className={s.form}>
        <TextField className={s.input} label="Email" variant="standard" />
        <label>Enter your email address and we will send you further instructions </label>
        <SuperButton className={s.btn}>Send Instructions</SuperButton>
      </div>
      <div className={s.toLogin}>
        <p className={s.remember}>Did you remember your password?</p>
        <NavLink className={s.signInBtn} to="/friday-project/login">Try logging in</NavLink>
      </div>
    </AuthWrapper>
  );
};