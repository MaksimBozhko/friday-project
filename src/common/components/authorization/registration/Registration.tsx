import React, { ChangeEvent, useState } from "react";
import s from "./registration.module.scss";
import { Navigate, NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useActions } from "common/hooks";
import { authThunks } from "common/components/authorization/login/authSlice";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";

export const Registration = () => {
  const {register: registration} = useActions(authThunks)
  const isRegister = useSelector((state: AppRootStateType) => state.auth.isRegister)
  const {register, handleSubmit} = useForm()
  const [password, setPassword] = useState('')
  const appError = useSelector((state: AppRootStateType) => state.app.error)
  const [error, setError] = useState("")

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  }

  const onSubmit: SubmitHandler<FieldValues> = (FieldValues) => {
    if (password !== FieldValues.password) {
      setError('different password')
    } else {
      registration(FieldValues)
      setError('')
    }
  }

  if (isRegister) {return <Navigate to={'login'}/>}
  return (
    <AuthWrapper>
      <h1 className={s.title}>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <TextField {...register('email')} className={s.input} label="Email" variant="standard" />
        <TextField {...register('password')} className={s.input} label="Password" type="password" autoComplete="current-password"
                   variant="standard" />
        <TextField className={s.input} label="Confirm password" type="password" autoComplete="current-password"
                   variant="standard" onChange={onChangeHandler} />
        {error || appError}
        <SuperButton className={s.btn}>Sign Up</SuperButton>
      </form>
      <div className={s.signIn}>
        <p className={s.account}>Already have an account?</p>
        <NavLink className={s.signInBtn} to="/login">Sign In</NavLink>
      </div>
    </AuthWrapper>
  );
};