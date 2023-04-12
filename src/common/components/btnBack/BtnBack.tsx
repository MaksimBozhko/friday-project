import React from "react";
import s from "./btnBack.module.scss";
import { ReactComponent as ArrowBack } from "common/assets/img/arrowBack.svg";
import { useNavigate } from "react-router-dom";

export const BtnBack = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className={s.block} onClick={handleClick}>
      <ArrowBack />
      Back to Packs List
    </button>
  );
};