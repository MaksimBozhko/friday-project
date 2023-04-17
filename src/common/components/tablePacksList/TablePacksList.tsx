import React, { useEffect } from "react";
import s from "common/components/tablePacksList/table.module.scss"
import { useActions } from "common/hooks";
import { packThunks } from "features/packsList/packsSlice";

export const TablePacksList = () => {
  const { fetchPack } = useActions(packThunks)
  useEffect(() => {
    fetchPack()
  }, [])
  const data = [
    {
      name: 'name',
      cards: 'Cards',
      lastUpdated: 'lastUpdated',
      createdBy: 'createdBy',
      actions: 'actions',
    },
    {
      name: 'name',
      cards: 'Cards',
      lastUpdated: 'lastUpdated',
      createdBy: 'createdBy',
      actions: 'actions',
    },
    {
      name: 'name',
      cards: 'Cards',
      lastUpdated: 'lastUpdated',
      createdBy: 'createdBy',
      actions: 'actions',
    },
    {
      name: 'name',
      cards: 'Cards',
      lastUpdated: 'lastUpdated',
      createdBy: 'createdBy',
      actions: 'actions',
    },{
      name: 'name',
      cards: 'Cards',
      lastUpdated: 'lastUpdated',
      createdBy: 'createdBy',
      actions: 'actions',
    },{
      name: 'name',
      cards: 'Cards',
      lastUpdated: 'lastUpdated',
      createdBy: 'createdBy',
      actions: 'actions',
    },


  ]
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
      {data.map((row, index) => (
        <tr key={index} className={s.row}>
          <td>{row.name}</td>
          <td>{row.cards}</td>
          <td>{row.lastUpdated}</td>
          <td>{row.createdBy}</td>
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