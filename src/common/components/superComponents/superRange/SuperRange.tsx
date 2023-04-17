import React from "react";
import s from "./superRange.module.scss"
import { Slider } from "@mui/material";

const SuperRange: React.FC<any> = (props) => {
  const railColorStyle = typeof props.value === "number" && props.value === 0 ? "#8B8B8B" : "#8B8B8B";
  return (
    <div className={s.rangeBlock}>
      <p className={s.number}>{props.value[0]}</p>
      <Slider className={s.superRange}
        sx={{
          // стили для слайдера // пишет студент
          color: "#00CC22",
          width: "147px",
          height: "4px",
          marginRight: "6px",
          "& .MuiSlider-rail": {
            color: railColorStyle
          },
          "& .MuiSlider-thumb": {
            height: 18,
            width: 18,
            backgroundColor: "#FFFFFF",
            border: "1px solid #00CC22",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
              boxShadow: "inherit"
            },
            "&:before": {
              height: 6,
              width: 6,
              borderRadius: "50%",
              backgroundColor: "#00CC22",
              boxShadow: "inherit"
            }
          }
        }}
        {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
      <p className={s.number}>{props.value[1]}</p>
    </div>
  );
};

export default SuperRange;
