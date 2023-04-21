import React, { FC } from "react";
import s from "./Card.module.scss";
import { PopupContainer } from "common/components/popup/popupContainer/PopupContainer";
import { ReactComponent as Close } from "common/assets/img/close.svg";
import TextField from "@mui/material/TextField";

type CardModalPropsType = {
  title: string
}

export const CardModal: FC<CardModalPropsType> = ({title}) => {
  return (
    <PopupContainer>
      <div className={s.titleBlock}>
        <h5 className={s.title}>{title}</h5>
        <div className={s.close}><Close/></div>
      </div>
      <div className={s.content}>
        <div className={s.block}>
          <label>Choose a question format</label>
        </div>
        <div className={s.block}>
          <TextField className={s.input} id="standard-basic" label="Question" variant="standard" />
        </div>
        <div className={s.block}>
          <TextField className={s.input} id="standard-basic" label="Answer" variant="standard" />
        </div>
      </div>
    </PopupContainer>
  );
};