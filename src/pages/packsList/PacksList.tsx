import React from "react";
import s from "./packsList.module.scss";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { FilterBlock } from "common/components/filterBlock/FilterBlock";
import { TablePacksList } from "common/components/tablePacksList/TablePacksList";
import Pagination from '@mui/material/Pagination';

export const PacksList = () => {
  return <>
      <div className={s.header}>
        <h2 className={s.title}>Packs list</h2>
        <SuperButton className={s.btn}>Add new pack</SuperButton>
      </div>
    <FilterBlock/>
    <TablePacksList />
    <footer>
      <Pagination count={10} color="primary" />
    </footer>
    </>
};

