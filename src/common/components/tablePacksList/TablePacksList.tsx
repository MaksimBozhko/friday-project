import React from "react";
import s from "common/components/tablePacksList/table.module.scss";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";
import { NavLink } from "react-router-dom";
import { ReactComponent as Learn } from "common/assets/img/tableIcon/teacher.svg";
import { ReactComponent as Edit } from "common/assets/img/tableIcon/Edit.svg";
import { ReactComponent as Delete } from "common/assets/img/tableIcon/Delete.svg";

export const TablePacksList = () => {
  const cardPacks = useSelector((state: AppRootStateType) => state.pack.cardPacks);
  const myId = useSelector((state: AppRootStateType) => state.auth.id);
  return (
    <table className={s.table}>
      <thead className={s.head}>
      <tr className={s.row}>
        <th>Name</th>
        <th>Cards</th>
        <th>Last Updated</th>
        <th>Created by</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody className={s.body}>
      {cardPacks.map(pack => (
        <tr key={pack._id} className={s.row}>
          <td>
            <NavLink to={`/friday-project/cards/${pack._id}`}>
              {pack.name}
            </NavLink>
          </td>
          <td>{pack.cardsCount}</td>
          <td>{pack.updated}</td>
          <td>{pack.user_name}</td>
          <td>
            <Learn />
            {myId === pack._id && (
              <>
                <Edit />
                <Delete />
              </>
            )}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};