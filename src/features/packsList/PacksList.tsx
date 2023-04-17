import React from "react";
import s from "features/packsList/packsList.module.scss";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { FilterBlock } from "common/components/filterBlock/FilterBlock";
import { TablePacksList } from "common/components/tablePacksList/TablePacksList";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";
import { Navigate } from "react-router-dom";
import { useActions } from "common/hooks";
import { packThunks } from "features/packsList/packsSlice";

export const PacksList = () => {
  const isLoggedIn = useSelector((state: AppRootStateType) => state.auth.isLoggedIn);
  const { createPack } = useActions(packThunks);

  const addPackHandler = () => {
    createPack({ name: "my Pack" });
  };

  if (!isLoggedIn) {
    return <Navigate to={"login"} />;
  }
  return <>
    <div className={s.header}>
      <h2 className={s.title}>Packs list</h2>
      <SuperButton className={s.btn} onClick={addPackHandler}>Add new pack</SuperButton>
    </div>
    <FilterBlock />
    <TablePacksList />
    <footer>
      <Pagination count={10} color="primary" />
    </footer>
  </>;
};

