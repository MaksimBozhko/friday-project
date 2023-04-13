import React from "react";
import s from "./newPassword.module.scss";
import TextField from "@mui/material/TextField";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";

export const NewPasswordInput = () => {
  return (
    <AuthWrapper>
      <h1 className={s.title}>Create new password</h1>
      <div className={s.form}>
        <TextField className={s.input} label="Password" type="password" autoComplete="current-password" variant="standard" />
        <label className={s.text}>Create new password and we will send you further instructions to email</label>
        <SuperButton className={s.btn}>Create new password</SuperButton>
      </div>
    </AuthWrapper>
  );
};