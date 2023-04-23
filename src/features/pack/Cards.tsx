import React, { useState } from "react"
import s from "features/pack/cards.module.scss"
import { BtnBack } from "common/components/btnBack/BtnBack"
import SuperButton from "common/components/superComponents/superButton/SuperButton"
import SuperInputText from "common/components/superComponents/superInputText/SuperInputText"
import { useParams } from "react-router-dom"
import { TableCardList } from "common/components/table/TableCardsList"
import { EmptyPack } from "common/components/emptyPack/EmptyPack"
import { useGetCardsQuery } from "features/pack/CreateAPI"

export const Cards = () => {
  const params = useParams()
  const cardsPack_id = params.cardsPack_id || ""
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(4)

  const { data, isFetching } = useGetCardsQuery({ cardsPack_id, page, pageCount })
  console.log(data)

  if (isFetching) return <>Loading...</>
  return (
    <>
      {data.cards.length
        ?
        <div>
          <BtnBack />
          <div className={s.header}>
            <h2 className={s.title}>{data.packName}</h2>
            <SuperButton className={s.btn}>Learn to pack</SuperButton>
          </div>
          <div className={s.searchBlock}>
            <p className={s.text}>Search</p>
            <SuperInputText placeholder={"Provide your text"} />
          </div>
          <TableCardList cards={data} setPage={setPage} setPageCount={setPageCount} />
        </div>
        :
        <EmptyPack title={data.packName} id={data.packUserId} />
      }
    </>
  )
}