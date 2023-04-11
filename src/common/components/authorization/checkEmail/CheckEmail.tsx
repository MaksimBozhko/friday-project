import React from "react";
import s from "./checkEmail.module.scss";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export const CheckEmail = () => {
  return (
    <Paper elevation={2} className={s.login}>
      <h1 className={s.title}>Sign Up</h1>
      <p>We’ve sent an Email with instructions to example@mail.com</p>
      <Button className={s.btn} variant="contained"><NavLink className={s.signInBtn} to="friday-project/login">Back to login</NavLink></Button>
    </Paper>
  );
};