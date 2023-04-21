import React, { FC } from "react";
import { PopupContainer } from "common/components/popup/popupContainer/PopupContainer";
import s from "common/components/popup/pack/Pack.module.scss";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { ReactComponent as Close } from "common/assets/img/close.svg";

type DeletePropsType = {
  title: string
  name: string
}

export const Delete: FC<DeletePropsType> = ({ title, name }) => {
  return (
    <PopupContainer>
      <div className={s.titleBlock}>
        <h5 className={s.title}>{title}</h5>
        <div className={s.close}><Close /></div>
      </div>
      <span>Do you really want to remove</span> {name}?
      <p>All cards will be deleted.</p>
      <div className={s.btnBlock}>
        <SuperButton className={s.btn} xType={"secondary"}>Cancel</SuperButton>
        <SuperButton className={s.btn} xType={"red"}>Delete</SuperButton>
      </div>
    </PopupContainer>
  );
};