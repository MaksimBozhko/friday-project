import React from "react";
import s from "features/packsList/packsList.module.scss";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { FilterBlock } from "common/components/filterBlock/FilterBlock";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useActions } from "common/hooks";
import { packThunks } from "features/packsList/packsSlice";
import { TablePackList } from "common/components/table/TablePackList";
import { authSelectors } from "common/components/authorization/login";

export const PacksList = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
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
    <TablePackList />
  </>;
};

