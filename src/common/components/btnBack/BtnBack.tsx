import React from "react";
import s from "./btnBack.module.scss";
import { ReactComponent as ArrowBack } from "common/assets/img/arrowBack.svg";
import { NavLink } from "react-router-dom";

export const BtnBack = () => {
  return (
    <NavLink to={'/back'} className={s.block}>
      <ArrowBack/>
      Back to Packs List
    </NavLink>
  );
};