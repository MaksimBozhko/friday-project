import React from "react";
import s from "./registration.module.scss";

import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { authAPI } from "common/api/API";

export const Registration = () => {
  const {register, handleSubmit} = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (FieldValues) => {
    console.log(FieldValues);
    authAPI.register(FieldValues)
      .then((data) => console.log(data))
  }
  return (
    <AuthWrapper>
      <h1 className={s.title}>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <TextField {...register('email')} className={s.input} label="Email" variant="standard" />
        <TextField {...register('password')} className={s.input} label="Password" type="password" autoComplete="current-password"
                   variant="standard" />
        <TextField className={s.input} label="Confirm password" type="password" autoComplete="current-password"
                   variant="standard" />
        <SuperButton className={s.btn}>Sign Up</SuperButton>
      </form>
      <div className={s.signIn}>
        <p className={s.account}>Already have an account?</p>
        <NavLink className={s.signInBtn} to="/friday-project/login">Sign In</NavLink>
      </div>
    </AuthWrapper>
  );
};