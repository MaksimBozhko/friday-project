import React from "react";
import s from "./checkEmail.module.scss";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { ReactComponent as Email } from "common/assets/img/email.svg";

export const CheckEmail = () => {
  return (
    <Paper elevation={2} className={s.CheckEmail}>
      <h1 className={s.title}>Check Email</h1>
      <Email />
      <p className={s.text}>We’ve sent an Email with instructions to example@mail.com</p>

        <NavLink className={s.signInBtn} to="/friday-project/login">
          <Button className={s.btn} variant="contained">Back to login</Button>
        </NavLink>
    </Paper>
  );
};