import React from "react"
import { ReactComponent as Learn } from "common/assets/img/tableIcon/teacher.svg";
import { ReactComponent as Edit } from "common/assets/img/tableIcon/Edit.svg";
import { ReactComponent as Delete } from "common/assets/img/tableIcon/Delete.svg";
import s from "./tableIcons.module.scss"

export const TableIcons = () => {

  const editPackHandler = () => {
  };
  const deletePackHandler = () => {
  };
  return (
    <div className={s.icons}>
      <Learn />
      {myId === pack.user_id && (
        <>
          <Edit onClick={editPackHandler} />
          <Delete onClick={deletePackHandler} />
        </>
      )}
    </div>
  )
}