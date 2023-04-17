import React from "react";
import s from "./newPassword.module.scss";
import TextField from "@mui/material/TextField";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "common/hooks";
import { authThunks } from "common/components/authorization/login/authSlice";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";

export const NewPasswordInput = () => {
  const navigate = useNavigate()
  const { setNewPassword } = useActions(authThunks);
  const error = useSelector((state: AppRootStateType) => state.app.error)
  const { register, handleSubmit } = useForm();
  const { token } = useParams();
  const onSubmit: SubmitHandler<FieldValues> = (FieldValues) => {
    setNewPassword({ ...FieldValues, resetPasswordToken: token });
    navigate('/friday-project/login')
  };
  return (
    <AuthWrapper>
      <h1 className={s.title}>Create new password</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <TextField {...register("password")} className={s.input} label="Password" type="password"
                   autoComplete="current-password" variant="standard" />
        {error}
        <label className={s.text}>Create new password and we will send you further instructions to email</label>
        <SuperButton className={s.btn}>Create new password</SuperButton>
      </form>
    </AuthWrapper>
  );
};