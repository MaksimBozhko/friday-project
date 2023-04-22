import React, { useState } from "react"
import { ReactComponent as Edit } from "../../assets/img/tableIcon/Edit.svg"
import { ReactComponent as Delete } from "../../assets/img/tableIcon/Delete.svg"
import { useSelector } from "react-redux"
import { AppRootStateType } from "app/store"
import { useActions } from "common/hooks"
import s from "common/components/table/tableIcons.module.scss"
import { DeleteModal } from "common/components/modal/deleteModal/DeleteModal"
import { cardThunks } from "features/pack/cardsSlice"
import { CardModal } from "common/components/modal/cardModal/CardModal"

type CardIconsType = {
  user_id: string
  id: string
}

export const CardIcons = ({ user_id, id }: CardIconsType) => {
  const myId = useSelector((state: AppRootStateType) => state.auth.id)
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)
  const { updateCard, deleteCard } = useActions(cardThunks)

  const onClose = () => {
    setIsOpenModalEdit(false)
    setIsOpenModalDelete(false)
  }


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
    deleteCard({ _id: id })
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