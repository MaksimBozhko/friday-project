import React from "react";
import s from "./registration.module.scss";

import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";

export const Registration = () => {
  return (
    <AuthWrapper>
      <h1 className={s.title}>Sign Up</h1>
      <div className={s.form}>
        <TextField className={s.input} label="Email" variant="standard" />
        <TextField className={s.input} label="Password" type="password" autoComplete="current-password"
                   variant="standard" />
        <TextField className={s.input} label="Confirm password" type="password" autoComplete="current-password"
                   variant="standard" />
        <SuperButton className={s.btn}>Sign Up</SuperButton>
      </div>
      <div className={s.signIn}>
        <p className={s.account}>Already have an account?</p>
        <NavLink className={s.signInBtn} to="/friday-project/login">Sign In</NavLink>
      </div>
    </AuthWrapper>
  );
};