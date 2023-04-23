import React, { useState } from "react"
import { ReactComponent as Learn } from "common/assets/img/tableIcon/teacher.svg"
import { ReactComponent as Edit } from "common/assets/img/tableIcon/Edit.svg"
import { ReactComponent as Delete } from "common/assets/img/tableIcon/Delete.svg"
import s from "./tableIcons.module.scss"
import { useSelector } from "react-redux"
import { AppRootStateType } from "app/store"
import { PackModal } from "common/components/modal/packModal/PackModal"
import { DeleteModal } from "common/components/modal/deleteModal/DeleteModal"
import { useDeletePackMutation, useUpdatePackMutation } from "features/packsList/packsAPI"

export const TableIcons = ({ user_id, packId: id, name }: { user_id: string, packId: string, name: string }) => {
  const myId = useSelector((state: AppRootStateType) => state.auth.id)
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)

  const [updatePack] = useUpdatePackMutation()
  const [deletePack] = useDeletePackMutation()

  const onClose = () => {
    setIsOpenModalEdit(false)
    setIsOpenModalDelete(false)
  }

  const learnPackHandler = () => {
  }
  const editPackHandler = () => {
    setIsOpenModalEdit(true)
  }
  const deletePackHandler = () => {
    setIsOpenModalDelete(true)
  }

  const updatePackCallback = (arg: any) => {
    updatePack({ _id: id, name: arg.name })
  }
  const deletePackCallback = () => {
    deletePack(id)
  }
  return (
    <>
      <div className={s.icons}>
        <Learn onClick={learnPackHandler} />
        {myId === user_id && (
          <>
            <Edit onClick={editPackHandler} />
            <Delete onClick={deletePackHandler} />
          </>
        )}
      </div>
      {isOpenModalEdit && (
        <PackModal title={"Edit pack"}
                   onClose={onClose}
                   callback={updatePackCallback} />
      )}
      {isOpenModalDelete && (
        <DeleteModal title={"Delete Pack"}
                     name={name}
                     onClose={onClose}
                     callback={deletePackCallback} />
      )}
    </>
  )
}