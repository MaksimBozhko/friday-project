import React from "react";
import { ReactComponent as Logo } from "common/assets/img/logo.svg";
import s from "pages/main/Header/Header.module.scss";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { User } from "pages/main/Header/user/User";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <Logo />
        <SuperButton className={s.btn}>Sign in</SuperButton>
        {/*<User/>*/}
      </div>
    </div>
  );
};