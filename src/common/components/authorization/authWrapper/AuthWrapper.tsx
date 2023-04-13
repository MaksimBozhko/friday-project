import React, { FC, PropsWithChildren } from "react";
import Paper from '@mui/material/Paper';
import s from "./authWrapper.module.scss"

export const AuthWrapper: FC<PropsWithChildren> = ({children}) => {
  return (
    <Paper elevation={2} className={s.wrapper}>
      {children}
    </Paper>
  );
};