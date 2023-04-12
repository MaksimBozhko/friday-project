import React from "react";
import s from "./btnBack.module.scss"
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { ReactComponent as ArrowBack} from "common/assets/img/arrowBack.svg";

export const BtnBack = () => {
  return (
    <div className={s.block}>
      <ArrowBack/>
      <SuperButton style={{backgroundColor: "inherit", color: "black"}}>Back to Packs List</SuperButton>
    </div>
  );
};