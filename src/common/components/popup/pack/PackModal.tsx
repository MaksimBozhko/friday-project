import React, { FC } from "react";
import { PopupContainer } from "common/components/popup/popupContainer/PopupContainer";
import s from "common/components/popup/pack/Pack.module.scss"
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SuperButton from "common/components/superComponents/superButton/SuperButton";
import { styled } from "@mui/material/styles";
import { ReactComponent as Close } from "common/assets/img/close.svg";

const CustomTextField = styled(TextField)(({ }) => ({
  "& .MuiInputBase-input": {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
  },
}));

type PackModalPropsType = {
  title: string
}

export const PackModal: FC<PackModalPropsType> = ({title}) => {
  return (
    <PopupContainer>
      <div className={s.titleBlock}>
        <h5 className={s.title}>{title}</h5>
        <div className={s.close}><Close/></div>
      </div>
      <CustomTextField className={s.input} id="standard-basic" label="Name pack" variant="standard" />
      <div className={s.checkBox}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Private pack" />
      </div>
      <div className={s.btnBlock}>
        <SuperButton className={s.btn} xType={"secondary"}>Cancel</SuperButton>
        <SuperButton className={s.btn}>Save</SuperButton>
      </div>
    </PopupContainer>
  );
};