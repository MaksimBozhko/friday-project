import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { FC } from "react";

type ToggleBtnProps = {
  showAllOrMyPacks: string
  handleChange: (event: React.MouseEvent<HTMLElement>, newAlignment: string) => void
}

export const ToggleBtn: FC<ToggleBtnProps> = ({showAllOrMyPacks, handleChange}) => {
  const style = {
    width: "100px",
    height: "36px",}
  return (
    <ToggleButtonGroup
      color="primary"
      value={showAllOrMyPacks}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton sx={style} value="my">My</ToggleButton>
      <ToggleButton sx={style} value="all">All</ToggleButton>
    </ToggleButtonGroup>
  );
};