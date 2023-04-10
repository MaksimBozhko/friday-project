import React from "react";
import { ReactComponent as Logo } from "common/assets/img/logo.svg";
import Button from "@mui/material/Button";
import s from "pages/main/Header/Header.module.scss";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <Logo />
        <Button variant="contained">Contained</Button>
      </div>
    </div>
  );
};