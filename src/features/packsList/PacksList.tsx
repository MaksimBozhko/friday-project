import React, { useState } from "react"
import s from "features/packsList/packsList.module.scss"
import SuperButton from "common/components/superComponents/superButton/SuperButton"
import { FilterBlock } from "common/components/filterBlock/FilterBlock"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { useActions } from "common/hooks"
import { packThunks } from "features/packsList/packsSlice"
import { TablePackList } from "common/components/table/TablePackList"
import { authSelectors } from "common/components/authorization/login"
import { PackModal } from "common/components/modal/packModal/PackModal"

export const PacksList = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  const { createPack } = useActions(packThunks);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const onOpenHandler = () => {
    setIsOpenModal(true)
  };
  const onClose = () => {
    setIsOpenModal(false)
  }

  if (!isLoggedIn) {
    return <Navigate to={"login"} />;
  }
  return <>
    <div className={s.header}>
      <h2 className={s.title}>Packs list</h2>
      <SuperButton className={s.btn} onClick={onOpenHandler}>Add new pack</SuperButton>
    </div>
    <FilterBlock />
    <TablePackList />
    {isOpenModal && (
      <PackModal title={'Add new pack'} onClose={onClose} callback={createPack}/>
    )}
  </>;
};

