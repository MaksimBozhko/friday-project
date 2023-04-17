import React from "react";
import s from "common/components/tablePacksList/table.module.scss";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";
import { NavLink } from "react-router-dom";

export const TablePacksList = () => {
  const cardPacks = useSelector((state: AppRootStateType) => state.pack.cardPacks);
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
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};