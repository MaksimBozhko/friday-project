import React, { useEffect } from "react";
import s from "features/pack/cards.module.scss";
import { BtnBack } from "common/components/btnBack/BtnBack";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import SuperInputText from "common/components/superComponents/superInputText/SuperInputText";
import { useSelector } from "react-redux";
import { useActions } from "common/hooks";
import { cardThunks } from "features/pack/cardsSlice";
import { useParams } from "react-router-dom";
import { TableCardList } from "common/components/table/TableCardsList";
import { packSelectors } from "features/packsList";

export const Cards = () => {
  const { fetchCard } = useActions(cardThunks);
  const params = useParams();
  const cardsPack_id = params.cardsPack_id || ""
  const pack = useSelector(packSelectors.selectedPack(cardsPack_id));

  useEffect(() => {
    fetchCard(params as { cardsPack_id: string });
  }, [params, fetchCard]);

  return (
    <div>
      <BtnBack />
      <div className={s.header}>
        <h2 className={s.title}>{pack?.name}</h2>
        <SuperButton className={s.btn}>Learn to pack</SuperButton>
      </div>
      <div className={s.searchBlock}>
        <p className={s.text}>Search</p>
        <SuperInputText placeholder={"Provide your text"} />
      </div>
      <TableCardList cardsPack_id={cardsPack_id} />
    </div>
  );
};