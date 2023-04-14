import React from "react";
import s from "./newPassword.module.scss";
import TextField from "@mui/material/TextField";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { authAPI } from "common/api/API";

export const NewPasswordInput = () => {
  const {register, handleSubmit} = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (FieldValues) => {
    console.log(FieldValues);
    authAPI.newPassword(FieldValues)
      .then((data) => console.log(data))
  }
  return (
    <AuthWrapper>
      <h1 className={s.title}>Create new password</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <TextField {...register('password')} className={s.input} label="Password" type="password" autoComplete="current-password" variant="standard" />
        <label className={s.text}>Create new password and we will send you further instructions to email</label>
        <SuperButton className={s.btn}>Create new password</SuperButton>
      </form>
    </AuthWrapper>
  );
};