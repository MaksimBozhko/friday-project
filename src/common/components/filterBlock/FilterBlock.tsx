import React, { ChangeEvent, FC, useEffect, useState } from "react";
import s from "./filterBlock.module.scss";
import SuperInputText from "common/components/superComponents/superInputText/SuperInputText";
import { ToggleBtn } from "common/utils/ToggleBtn";
import SuperRange from "common/components/superComponents/superRange/SuperRange";
import { ReactComponent as ResetFilter } from "common/assets/img/resetFilter.svg";
import { useActions, useDebounce } from "common/hooks";
import { packThunks } from "features/packsList/packsSlice";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";

export const FilterBlock: FC = () => {
  const { fetchPack } = useActions(packThunks);
  const [value, setValue] = useState("");
  const [showAllOrMyPacks, setShowAllOrMyPacks] = useState("all");
  const [valueRange1, setValueRange1] = useState(0)
  const [valueRange2, setValueRange2] = useState(100)
  const debouncedValue = useDebounce<string>(value, 500)
  const debouncedValueRange1 = useDebounce<number>(valueRange1, 500)
  const debouncedValueRange2 = useDebounce<number>(valueRange2, 500)
  const myId = useSelector((state: AppRootStateType) => state.auth.id);

  const packsShow = showAllOrMyPacks === "my" ? myId : ""

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const toggleBtnChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setShowAllOrMyPacks(newAlignment);
  };
  const rangeChangeHandler = (event: any, value: any) => {
    if (Array.isArray(value)) {
      setValueRange1(+event.target.value[0])
      setValueRange2(+event.target.value[1])
    } else {
      setValueRange1(+event.target.value)
    }
  }
  const resetFilterHandler = () => {
    setValue("")
    setShowAllOrMyPacks("all")
    setValueRange1(0)
    setValueRange2(100)
  }

  useEffect(() => {
    fetchPack({packName: value, user_id: packsShow, min: valueRange1, max: valueRange2 });
  }, [fetchPack, debouncedValue, packsShow, debouncedValueRange1, debouncedValueRange2]);

  return (
    <div className={s.filterBlock}>
      <div className={s.searchBlock}>
        <h3>Search</h3>
        <SuperInputText className={s.input} placeholder="Provide your text" onChange={onChangeInputHandler} value={value} />
      </div>
      <div className={s.showPacks}>
        <h3>Show packs cards</h3>
        <ToggleBtn showAllOrMyPacks={showAllOrMyPacks} handleChange={toggleBtnChange} />
      </div>
      <div className={s.numberCards}>
        <h3>Number of cards</h3>
        <SuperRange value={[valueRange1, valueRange2]} onChange={(e:any) => rangeChangeHandler(e, [valueRange1, valueRange2])} />
      </div>
      <div className={s.resetFilter}>
        <ResetFilter onClick={resetFilterHandler} />
      </div>
    </div>
  );
};