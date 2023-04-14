import React from "react";
import s from "./editProfile.module.scss";
import UserPhoto from "common/components/editProfile/photoUser/photoUser";
import SuperEditableSpan from "common/components/superComponents/superEditableSpan/SuperEditableSpan";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { ReactComponent as Logout } from "common/assets/img/logout.svg";
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper";
import { BtnBack } from "common/components/btnBack/BtnBack";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const EditProfile = () => {
  const { handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (FieldValues) => {
    console.log(FieldValues);
    // authAPI.updateProfile(FieldValues)
    //   .then((data) => console.log(data))
  };
  return <>
    <BtnBack />
    <AuthWrapper>
      <h1 className={s.title}>Personal Information</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <UserPhoto clasName={{ width: "96px" }}
                   defaultPhotoUrl={"data:image/png;base64,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"} />
        <div className={s.editableSpan}>
          <SuperEditableSpan value={"name23"} />
        </div>
        <p className={s.email}>your email address here</p>
        <button type="submit">save</button>
        <SuperButton xType={"secondary"} className={s.btn}>
          <Logout />
          Log out
        </SuperButton>
      </form>
    </AuthWrapper>
  </>;
};