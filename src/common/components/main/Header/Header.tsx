import React from "react";
import { ReactComponent as Logo } from "common/assets/img/logo.svg";
import s from "./Header.module.scss";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { User } from "common/components/main/Header/user/User";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";
import { useActions } from "common/hooks";
import { authThunks } from "common/components/authorization/login/authSlice";

export const Header = () => {
  const isLoggedIn = useSelector((state: AppRootStateType) => state.auth.isLoggedIn)
  const {logout} = useActions(authThunks)

  const onClickHandler = () => {
    logout()
  }

  return (
    <div className={s.header}>
      <div className={s.container}>
        <Logo />
        <button onClick={onClickHandler}>logout</button>
        {isLoggedIn ? <User/> : <SuperButton className={s.btn}>Sign in</SuperButton>}
      </div>
    </div>
  );
};