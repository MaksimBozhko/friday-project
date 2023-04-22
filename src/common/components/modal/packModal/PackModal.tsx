import React, { ChangeEvent, FC, SyntheticEvent, useState } from "react"
import s from "./packModal.module.scss"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import SuperButton from "common/components/superComponents/superButton/SuperButton"
import { styled } from "@mui/material/styles"
import { ReactComponent as Close } from "common/assets/img/close.svg"
import { Modal } from "common/components/modal/Modal"
import { cls } from "common/lib/cls"
import { CreatePackRequestType } from "common/types"

const CustomTextField = styled(TextField)(({}) => ({
  "& .MuiInputBase-input": {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px"
  }
}))

type PackModalPropsType = {
  title: string
  isOpen?: boolean
  onClose?: () => void
  className?: string
  callback?: (arg: CreatePackRequestType) => void
}

export const PackModal: FC<PackModalPropsType> = ({
                                                    title,
                                                    isOpen,
                                                    onClose,
                                                    className,
                                                    callback
                                                  }) => {

  const [value, setValue] = useState("")
  const [privateCheck, setPrivateCheck] = useState(false)

  const onCloseHandler = () => {
    if (onClose) {
      onClose()
    }
  }
  const onSaveHandler = () => {
    if (callback) {
      callback({ name: value, private: privateCheck })
    }
    if (onClose) {
      onClose()
    }
  }

  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const onChangeCheck = (e: any) => {
    setPrivateCheck(e.target.checked)
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={cls("", {}, [className])}
    >
      <div className={s.titleBlock}>
        <h5 className={s.title}>{title}</h5>
        <div className={s.close} onClick={onCloseHandler}><Close /></div>
      </div>
      <CustomTextField className={s.input}
                       value={value}
                       onChange={onChangeValue}
                       id="standard-basic"
                       label="Name pack"
                       variant="standard" />
      <div className={s.checkBox}>
        <FormControlLabel control={<Checkbox defaultChecked />}
                          value={privateCheck}
                          onChange={onChangeCheck}
                          label="Private pack" />
      </div>
      <div className={s.btnBlock}>
        <SuperButton className={s.btn} onClick={onCloseHandler} xType={"secondary"}>Cancel</SuperButton>
        <SuperButton className={s.btn} onClick={onSaveHandler}>Save</SuperButton>
      </div>
    </Modal>
  )
}