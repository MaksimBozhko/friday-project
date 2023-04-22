import React, { FC } from "react"
import s from "common/components/popup/pack/Pack.module.scss"
import SuperButton from "common/components/superComponents/superButton/SuperButton"
import { ReactComponent as Close } from "common/assets/img/close.svg"
import { Modal } from "common/components/modal/Modal"
import { cls } from "common/lib/cls"

type DeletePropsType = {
  title: string
  name: string
  isOpen?: boolean
  onClose?: () => void
  className?: string
}

export const Delete: FC<DeletePropsType> = ({
                                              title,
                                              name,
                                              isOpen,
                                              onClose,
                                              className
                                            }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={cls('', {}, [className])}
    >
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
    </Modal>
  )
}