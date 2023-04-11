import React from "react";
import s from "./registration.module.scss";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export const CheckEmail = () => {
  return (
    <Paper elevation={2} className={s.login}>
      <h1 className={s.title}>Sign Up</h1>
      <p>We’ve sent an Email with instructions to example@mail.com</p>
      <Button className={s.btn} variant="contained">Back to login</Button>
    </Paper>
  );
};