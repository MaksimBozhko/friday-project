import React from "react";
import s from "./login.module.scss";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { authAPI } from "common/api/API";

export const Login = () => {
  const {register, handleSubmit} = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (FieldValues) => {
    console.log(FieldValues);
    authAPI.login(FieldValues)
      .then((data) => console.log(data))
  }
  return (
    <AuthWrapper>
      <h1 className={s.title}>Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <TextField {...register('email')} className={s.input} label="Email" variant="standard" />
        <TextField {...register('password')} className={s.input} label="Password" type="password" autoComplete="current-password"
                   variant="standard" />
        <label className={s.checkBox}>
          <Checkbox {...register('rememberMe')} defaultChecked />
          <p>Remember me</p>
        </label>
        <NavLink className={s.forgotPas} to="/passwordRecovery">Forgot Password?</NavLink>
        <SuperButton type="submit" className={s.btn}>Sign In</SuperButton>
      </form>
      <div className={s.signUp}>
        <p className={s.account}>Already have an account?</p>
        <NavLink className={s.signUpBtn} to="/friday-project/registration">Sign Up</NavLink>
      </div>

    </AuthWrapper>
  );
};