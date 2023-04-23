import React, { ChangeEvent, FC, useState } from "react"
import s from "./filterBlock.module.scss"
import SuperInputText from "common/components/superComponents/superInputText/SuperInputText"
import { ToggleBtn } from "common/utils/ToggleBtn"
import SuperRange from "common/components/superComponents/superRange/SuperRange"
import { ReactComponent as ResetFilter } from "common/assets/img/resetFilter.svg"
import { useSearchParams } from "react-router-dom"
import { getSearchParams } from "common/utils/getSearchParams"

export const FilterBlock: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = getSearchParams(searchParams)

  const [value, setValue] = useState(search.packName)
  const [showAllOrMyPacks, setShowAllOrMyPacks] = useState(search.user_id || "all")
  const [valueRange1, setValueRange1] = useState(search.min || 0)
  const [valueRange2, setValueRange2] = useState(search.max || 100)

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    if (e.currentTarget.value) {
      setSearchParams({ ...search, packName: e.currentTarget.value })
    } else {
      setSearchParams({})
    }
  }

  const toggleBtnChange = (event: React.MouseEvent<HTMLElement>, packsShow: string) => {
    setShowAllOrMyPacks(packsShow)
    if (packsShow) {
      setSearchParams({ ...search, user_id: packsShow })
    } else {
      setSearchParams({})
    }
  }

  const rangeChangeHandler = (event: any, value: any) => {
    let params = {}
    if (Array.isArray(value)) {
      if (event.target.value[0] !== 0 || event.target.value[1] !== 100) {
        params = { ...search, min: event.target.value[0], max: event.target.value[1] }
      } else {
        params = { ...search }
      }
      setValueRange1(+event.target.value[0])
      setValueRange2(+event.target.value[1])
    } else {
      params = { ...search, min: event.target.value }
      setValueRange1(+event.target.value)
    }
    setSearchParams(params)
  }

  const resetFilterHandler = () => {
    setSearchParams({})
    setValue("")
    setShowAllOrMyPacks("all")
    setValueRange1(0)
    setValueRange2(100)
  }

  return (
    <div className={s.filterBlock}>
      <div className={s.searchBlock}>
        <h3>Search</h3>
        <SuperInputText
          className={s.input}
          placeholder="Provide your text"
          onChange={onChangeInputHandler}
          value={value} />
      </div>
      <div className={s.showPacks}>
        <h3>Show packs cards</h3>
        <ToggleBtn showAllOrMyPacks={showAllOrMyPacks} handleChange={toggleBtnChange} />
      </div>
      <div className={s.numberCards}>
        <h3>Number of cards</h3>
        <SuperRange value={[valueRange1, valueRange2]}
                    onChange={(e: any) => rangeChangeHandler(e, [valueRange1, valueRange2])} />
      </div>
      <div className={s.resetFilter}>
        <ResetFilter onClick={resetFilterHandler} />
      </div>
    </div>
  )
}