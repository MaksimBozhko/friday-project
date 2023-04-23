import React, { FC, useState } from "react"
import { BtnBack } from "common/components/btnBack/BtnBack"
import SuperButton from "common/components/superComponents/superButton/SuperButton"
import s from "./emptyPack.module.scss"
import { CardModal } from "common/components/modal/cardModal/CardModal"
import { useCreateCardMutation } from "features/pack/CreateAPI"

type EmptyPackProps = {
  title: string | undefined
  cardsPack_id: string | undefined
}

export const EmptyPack: FC<EmptyPackProps> = ({ title = "some pack", cardsPack_id }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [createCard] = useCreateCardMutation()

  const onOpenHandler = () => {
    setIsOpenModal(true)
  }
  const onClose = () => {
    setIsOpenModal(false)
  }

  const createPackHandler = (arg: { question: string, answer: string }) => {
    createCard({ cardsPack_id, ...arg })
  }
  return <>
    <BtnBack />
    <h2 className={s.title}>{title}</h2>
    <div className={s.content}>
      <p className={s.text}>This pack is empty. Click add new card to fill this pack</p>
      <div className={s.btnBlock}>
        <SuperButton onClick={onOpenHandler}>Add new card</SuperButton>
      </div>
    </div>
    {isOpenModal && (
      <CardModal title={"Add new card"} onClose={onClose} callback={createPackHandler} />
    )}
  </>
}