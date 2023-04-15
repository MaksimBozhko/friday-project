import React, { FC } from "react";
import { BtnBack } from "common/components/btnBack/BtnBack";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import s from "./emptyPack.module.scss"

type EmptyPackProps = {
  title: string
}

export const EmptyPack: FC<EmptyPackProps> = ({title}) => {
  return <>
    <BtnBack />
    <h2 className={s.title}>{title} Name Pack</h2>
    <div className={s.content}>
      <p className={s.text}>This pack is empty. Click add new card to fill this pack</p>
      <div className={s.btnBlock}>
        <SuperButton>Add new card</SuperButton>
      </div>
    </div>
  </>;
};