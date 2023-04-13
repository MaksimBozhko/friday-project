import React from "react";
import s from "./login.module.scss";

import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";

export const Login = () => {
  return (
    <AuthWrapper>
      <h1 className={s.title}>Sign in</h1>
      <div className={s.form}>
        <TextField className={s.input} label="Email" variant="standard" />
        <TextField className={s.input} label="Password" type="password" autoComplete="current-password"
                   variant="standard" />
        <label className={s.checkBox}>
          <Checkbox defaultChecked />
          <p>Remember me</p>
        </label>
        <NavLink className={s.forgotPas} to="/passwordRecovery">Forgot Password?</NavLink>
        <SuperButton className={s.btn}>Sign In</SuperButton>
      </div>
      <div className={s.signUp}>
        <p className={s.account}>Already have an account?</p>
        <NavLink className={s.signUpBtn} to="/friday-project/registration">Sign Up</NavLink>
      </div>
    </AuthWrapper>
  );
};