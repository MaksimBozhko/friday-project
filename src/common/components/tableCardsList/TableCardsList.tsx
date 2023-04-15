import React from 'react';
import s from "common/components/tablePacksList/table.module.scss"

export const TableCardsList = () => {
  const data = [
    {
      question: 'question',
      answer: 'answer',
      lastUpdated: 'lastUpdated',
      grade: 'grade',
    },
    {
      question: 'question',
      answer: 'answer',
      lastUpdated: 'lastUpdated',
      grade: 'grade',
    },
    {
      question: 'question',
      answer: 'answer',
      lastUpdated: 'lastUpdated',
      grade: 'grade',
    },
    {
      question: 'question',
      answer: 'answer',
      lastUpdated: 'lastUpdated',
      grade: 'grade',
    },
    {
      question: 'question',
      answer: 'answer',
      lastUpdated: 'lastUpdated',
      grade: 'grade',
    },

  ]
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
      {data.map((row, index) => (
        <tr key={index} className={s.row}>
          <td>{row.question}</td>
          <td>{row.answer}</td>
          <td>{row.lastUpdated}</td>
          <td>{row.grade}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}