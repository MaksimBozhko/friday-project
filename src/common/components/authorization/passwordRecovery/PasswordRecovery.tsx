import React from "react";
import s from "./passwordRecovery.module.scss";

import { NavLink } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export const PasswordRecovery = () => {
  return (
    <Paper elevation={2} className={s.login} >
      <h1 className={s.title}>Forgot your password?</h1>
      <div className={s.form}>
        <TextField className={s.input} label="Email" variant="standard" />
        <label>Enter your email address and we will send you further instructions </label>
        <Button className={s.btn} variant="contained">Contained</Button>
      </div>
      <div className={s.signIn}>
        <p className={s.remember}>Did you remember your password?</p>
        <NavLink className={s.signInBtn} to="/login">Try logging in</NavLink>
      </div>
    </Paper>
  );
};