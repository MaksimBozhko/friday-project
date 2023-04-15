import React from "react";
import s from "./filterBlock.module.scss";
import SuperInputText from "common/components/superComponents/superInputText/SuperInputText";
import { ToggleBtn } from "common/components/utils/ToggleBtn";
import SuperRange from "common/components/superComponents/superRange/SuperRange";
import { ReactComponent as ResetFilter } from "common/assets/img/resetFilter.svg";

export const FilterBlock = () => {
  return (
    <div className={s.filterBlock}>
      <div className={s.searchBlock}>
        <h3>Search</h3>
        <SuperInputText className={s.input} value="Provide your text"/>
      </div>
      <div className={s.showPacks}>
        <h3>Show packs cards</h3>
        <ToggleBtn/>
      </div>
      <div className={s.numberCards}>
        <h3>Number of cards</h3>
        <SuperRange/>
      </div>
      <div className={s.resetFilter}>
        <ResetFilter/>
      </div>
    </div>
  );
};