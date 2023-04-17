import React from "react";
import s from "common/components/tablePacksList/table.module.scss";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";

export const TableCardsList = () => {
  const cardPacks = useSelector((state: AppRootStateType) => state.card.cards);
  return (
    <table className={s.table}>
      <thead className={s.head}>
      <tr className={s.row}>
        <th>Question</th>
        <th>Answer</th>
        <th>Last Updated</th>
        <th>Grade</th>
      </tr>
      </thead>
      <tbody className={s.body}>
      {cardPacks.map(card => (
        <tr key={card._id} className={s.row}>
          <td>{card.question}</td>
          <td>{card.answer}</td>
          <td>{card.updated}</td>
          <td>{card.grade}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};