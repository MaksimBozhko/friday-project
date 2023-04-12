import React, { FC, PropsWithChildren } from "react";
import s from "common/components/formSignInUp/formSignInUp.module.scss";

import { NavLink } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

type FormType = "signIn" | "signUp"
type FormSignInUpPropsType = {
  type?: FormType
}

export const FormSignInUp: FC<PropsWithChildren<FormSignInUpPropsType>> = (
  {
    type = "signIn",
    children
  }) => {
  const link = type === "signIn" ? "/friday-project/registration" : "/friday-project/login"
  const text = type === "signIn" ? "Sign In" : "Sign Up"
  return (
    <Paper elevation={2} className={s.login}>
      <h1 className={s.title}>{text}</h1>
      {children}
      {/*<div className={s.form}>*/}
      {/*  <TextField className={s.input} label="Email" variant="standard" />*/}
      {/*  <TextField className={s.input} label="Password" type="password" autoComplete="current-password" variant="standard" />*/}
      {/*  <label className={s.checkBox}>*/}
      {/*    <Checkbox defaultChecked />*/}
      {/*    <p>Remember me</p>*/}
      {/*  </label>*/}
      {/*  <NavLink className={s.forgotPas} to="/passwordRecovery">Forgot Password?</NavLink>*/}
      {/*</div>*/}
      <Button className={s.btn} variant="contained">{text}</Button>
      <div className={s.signUp}>
        <p className={s.account}>Already have an account?</p>
        <NavLink className={s.signUpBtn}
                 to={link}>{type === "signIn" ? "Sign Up" : "Sign In"}</NavLink>
      </div>
    </Paper>
  );
};