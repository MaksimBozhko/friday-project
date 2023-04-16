import React from "react";
import s from "features/pack/pack.module.scss"
import { BtnBack } from "common/components/btnBack/BtnBack";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import SuperInputText from "common/components/superComponents/superInputText/SuperInputText";
import { TableCardsList } from "common/components/tableCardsList/TableCardsList";
import Pagination from "@mui/material/Pagination";

export const Pack = () => {
  return (
    <div>
      <BtnBack/>
      <div className={s.header}>
        <h2 className={s.title}>Pack Name</h2>
        <SuperButton className={s.btn}>Learn to pack</SuperButton>
      </div>
      <div className={s.searchBlock}>
        <p className={s.text}>Search</p>
          <SuperInputText placeholder={"Provide your text"}/>
      </div>
        <TableCardsList/>
      <footer>
        <Pagination count={10} color="primary" />
      </footer>
    </div>
  );
};