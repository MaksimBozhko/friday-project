import React, { useState } from "react"
import { ReactComponent as Edit } from "../../assets/img/tableIcon/Edit.svg"
import { ReactComponent as Delete } from "../../assets/img/tableIcon/Delete.svg"
import { useSelector } from "react-redux"
import { AppRootStateType } from "app/store"
import s from "common/components/table/cardIcons.module.scss"
import { DeleteModal } from "common/components/modal/deleteModal/DeleteModal"
import { CardModal } from "common/components/modal/cardModal/CardModal"
import { useDeleteCardMutation, useUpdateCardMutation } from "features/pack/CreateAPI"

type CardIconsType = {
  user_id: string
  id: string
}

export const CardIcons = ({ user_id, id }: CardIconsType) => {
  const myId = useSelector((state: AppRootStateType) => state.auth.id)
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)

  const [updateCard] = useUpdateCardMutation()
  const [deleteCard] = useDeleteCardMutation()

  const editPackHandler = () => {
    setIsOpenModalEdit(true)
  }
  const deletePackHandler = () => {
    setIsOpenModalDelete(true)
  }

  const updatePackCallback = (arg: any) => {
    updateCard({ _id: id, question: arg.question, answer: arg.answer })
  }
  const deletePackCallback = () => {
    deleteCard(id)
  }
  const onClose = () => {
    setIsOpenModalEdit(false)
    setIsOpenModalDelete(false)
  }

  return (
    <>
      <div className={s.icons}>
        {myId === user_id && (
          <>
            <Edit onClick={editPackHandler} />
            <Delete onClick={deletePackHandler} />
          </>
        )}
      </div>
      {isOpenModalEdit && (
        <CardModal title={"Edit card"}
                   onClose={onClose}
                   callback={updatePackCallback} />
      )}
      {isOpenModalDelete && (
        <DeleteModal title={"Delete Pack"}
                     name={"card"}
                     onClose={onClose}
                     callback={deletePackCallback} />
      )}
    </>
  )
}