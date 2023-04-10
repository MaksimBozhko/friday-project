import React from "react";
import s from "./newPassword.module.scss";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export const NewPasswordInput = () => {
  return (
    <Paper elevation={2} className={s.newPassword} >
      <h1 className={s.title}>Create new password</h1>
      <div className={s.form}>
        <TextField className={s.input} label="Password" type="password" autoComplete="current-password" variant="standard" />
        <label>Create new password and we will send you further instructions to email</label>
        <Button className={s.btn} variant="contained">Contained</Button>
      </div>
    </Paper>
  );
};