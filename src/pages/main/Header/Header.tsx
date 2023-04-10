import React from "react"
import { ReactComponent as Logo } from "common/assets/img/logo.svg"
import Button from '@mui/material/Button';

export const Header = () => {
  return (
    <div>
      <Logo />
      <Button variant="contained">Contained</Button>
    </div>
  )
}