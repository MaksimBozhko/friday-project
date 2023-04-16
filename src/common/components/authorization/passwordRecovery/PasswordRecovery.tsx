import React from "react";
import s from "./passwordRecovery.module.scss";

import { Navigate, NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { authAPI } from "common/api/API";
import { useActions } from "common/hooks";
import { authThunks } from "common/components/authorization/login/authSlice";

export const PasswordRecovery = () => {
  const {forgotPassword} = useActions(authThunks)
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FieldValues> = (FieldValues) => {
    console.log(FieldValues);
    forgotPassword(FieldValues)
    navigate('/friday-project/checkEmail')
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