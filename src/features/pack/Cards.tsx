import React, { useState } from "react"
import s from "features/pack/cards.module.scss"
import { BtnBack } from "common/components/btnBack/BtnBack"
import SuperButton from "common/components/superComponents/superButton/SuperButton"
import SuperInputText from "common/components/superComponents/superInputText/SuperInputText"
import { useParams } from "react-router-dom"
import { TableCardList } from "common/components/table/TableCardsList"
import { EmptyPack } from "common/components/emptyPack/EmptyPack"
import { useCreateCardMutation, useGetCardsQuery } from "features/pack/CreateAPI"
import { CardModal } from "common/components/modal/cardModal/CardModal"

export const Cards = () => {
  const params = useParams()
  const cardsPack_id = params.cardsPack_id || ""
  const [isOpenModalAdd, setIsOpenModalAdd] = useState<boolean>(false)
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(4)

  const { data, isFetching } = useGetCardsQuery({ cardsPack_id, page, pageCount })
  const [createCard] = useCreateCardMutation()

  const addPackCallback = (arg: any) => {
    createCard({ cardsPack_id, question: arg.question, answer: arg.answer })
  }
  const addCardHandler = () => {
    setIsOpenModalAdd(true)
  }
  const onClose = () => {
    setIsOpenModalAdd(false)
  }

  if (isFetching) return <>Loading...</>
  return (
    <>
      {data?.cards.length
        ?
        <div>
          <BtnBack />
          <div className={s.header}>
            <h2 className={s.title}>{data.packName}</h2>
            <SuperButton className={s.btn} onClick={addCardHandler}>Add new card</SuperButton>
          </div>
          <div className={s.searchBlock}>
            <p className={s.text}>Search</p>
            <SuperInputText placeholder={"Provide your text"} />
          </div>
          <TableCardList cards={data} setPage={setPage} setPageCount={setPageCount} />
        </div>
        :
        <EmptyPack title={data?.packName} cardsPack_id={cardsPack_id} />
      }
      {isOpenModalAdd && (
        <CardModal title={"Edit card"}
                   onClose={onClose}
                   callback={addPackCallback} />
      )}
    </>
  )
}