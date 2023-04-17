import React, { useEffect } from "react";
import s from "common/components/tablePacksList/table.module.scss"
import { useActions } from "common/hooks";
import { packThunks } from "features/packsList/packsSlice";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";
import { logger } from "@storybook/node-logger";

export const TablePacksList = () => {
  const { fetchPack } = useActions(packThunks)
  const cardPacks = useSelector((state: AppRootStateType) => state.pack.cardPacks)
  useEffect(() => {
    fetchPack()
  }, [])
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
          <td>{pack.name}</td>
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
}