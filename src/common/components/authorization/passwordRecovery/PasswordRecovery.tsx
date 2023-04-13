import React from "react";
import s from "./passwordRecovery.module.scss";

import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { authAPI } from "common/api/API";

export const PasswordRecovery = () => {
  const {register, handleSubmit} = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (FieldValues) => {
    console.log(FieldValues);
    authAPI.forgotPassword(FieldValues)
      .then((data) => console.log(data))
  }
  return (
    <AuthWrapper>
      <h1 className={s.title}>Forgot your password?</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <TextField {...register('email')} className={s.input} label="Email" variant="standard" />
        <label>Enter your email address and we will send you further instructions </label>
        <SuperButton type="submit" className={s.btn}>Send Instructions</SuperButton>
      </form>
      <div className={s.toLogin}>
        <p className={s.remember}>Did you remember your password?</p>
        <NavLink className={s.signInBtn} to="/friday-project/login">Try logging in</NavLink>
      </div>
    </AuthWrapper>
  );
};