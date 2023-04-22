import React, { FC } from "react";
import s from "./Card.module.scss";
import { ReactComponent as Close } from "common/assets/img/close.svg";
import TextField from "@mui/material/TextField";
import { Modal } from "common/components/modal/Modal"
import { cls } from "common/lib/cls"

type CardModalPropsType = {
  title: string
  isOpen?: boolean
  onClose?: () => void
  className?: string
}

export const CardModal: FC<CardModalPropsType> = ({
  title,
  onClose,
  className,
  isOpen
  }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={cls('', {}, [className])}
    >
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
    </Modal>
  );
};