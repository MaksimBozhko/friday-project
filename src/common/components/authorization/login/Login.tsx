import React from "react";
import s from "./login.module.scss";
import st from "../../formSignInUp/formSignInUp.module.scss";

import { NavLink } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { FormSignInUp } from "common/components/formSignInUp/FormSignInUp";

export const Login = () => {
  return (
    <>
    <Paper elevation={2} className={s.login} >
      <h1 className={s.title}>Sign in</h1>
      <div className={s.form}>
        <TextField className={s.input} label="Email" variant="standard" />
        <TextField className={s.input} label="Password" type="password" autoComplete="current-password" variant="standard" />
        <label className={s.checkBox}>
          <Checkbox defaultChecked />
          <p>Remember me</p>
        </label>
        <NavLink className={s.forgotPas} to="/passwordRecovery">Forgot Password?</NavLink>
        <Button className={s.btn} variant="contained">Contained</Button>
      </div>
      <div className={s.signUp}>
        <p className={s.account}>Already have an account?</p>
        <NavLink className={s.signUpBtn} to="/friday-project/registration">Sign Up</NavLink>
      </div>
    </Paper>
      <FormSignInUp>
        <div className={st.form}>
          <TextField className={st.input} label="Email" variant="standard" />
          <TextField className={st.input} label="Password" type="password" autoComplete="current-password" variant="standard" />
          <label className={st.checkBox}>
            <Checkbox defaultChecked />
            <p className={st.remember}>Remember me</p>
          </label>
          <NavLink className={st.forgotPas} to="/passwordRecovery">Forgot Password?</NavLink>
        </div>
      </FormSignInUp>
    </>
  );
};