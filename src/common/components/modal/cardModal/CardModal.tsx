import React, { FC, useState } from "react"
import s from "./card.module.scss";
import { ReactComponent as Close } from "common/assets/img/close.svg";
import TextField from "@mui/material/TextField";
import { Modal } from "common/components/modal/Modal"
import { cls } from "common/lib/cls"
import SuperButton from "common/components/superComponents/superButton/SuperButton"

type CardModalPropsType = {
  title: string
  isOpen?: boolean
  onClose?: () => void
  className?: string
  callback?: (arg: { question: string, answer: string }) => void
}

export const CardModal: FC<CardModalPropsType> = ({
  title,
  onClose,
  className,
  isOpen,
  callback
  }) => {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const onCloseHandler = () => {
    if (onClose) {
      onClose()
    }
  }
  const onSaveHandler = () => {
    if (callback) {
      callback({ question, answer })
    }
    if (onClose) {
      onClose()
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={cls('', {}, [className])}
    >
      <div className={s.titleBlock}>
        <h5 className={s.title}>{title}</h5>
        <div className={s.close} onClick={onCloseHandler} ><Close/></div>
      </div>
      <div className={s.content}>
        <div className={s.block}>
          <label>Choose a question format</label>
        </div>
        <div className={s.block}>
          <TextField className={s.input}
                     value={question}
                     onChange={(e) =>setQuestion(e.currentTarget.value)}
                     id="standard-basic"
                     label="Question"
                     variant="standard" />
        </div>
        <div className={s.block}>
          <TextField className={s.input}
                     value={answer}
                     onChange={(e) =>setAnswer(e.currentTarget.value)}
                     id="standard-basic"
                     label="Answer"
                     variant="standard" />
        </div>
        <div>
          <SuperButton onClick={onSaveHandler}>Save</SuperButton>
        </div>
      </div>
    </Modal>
  );
};