import React from "react";
import s from "./registration.module.scss";

import { NavLink } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export const Registration = () => {
  return (
    <Paper elevation={2} className={s.login} >
      <h1 className={s.title}>Sign Up</h1>
      <div className={s.form}>
        <TextField className={s.input} label="Email" variant="standard" />
        <TextField className={s.input} label="Password" type="password" autoComplete="current-password" variant="standard" />
        <TextField className={s.input} label="Confirm password" type="password" autoComplete="current-password" variant="standard" />
        <Button className={s.btn} variant="contained">Contained</Button>
      </div>
      <div className={s.signUp}>
        <p className={s.account}>Already have an account?</p>
        <NavLink className={s.signUpBtn} to="/registration">Sign Up</NavLink>
      </div>
    </Paper>
  );
};