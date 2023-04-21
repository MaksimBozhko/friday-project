import React, { FC, PropsWithChildren } from "react";
import s from "./popupContainer.module.scss"

type PopupContainerPropsType = {

};
export const PopupContainer: FC<PropsWithChildren<PopupContainerPropsType>> = ({children}) => {
  return (
    <div className={s.modal}>
      <div className={s.content}>
        {children}
      </div>
    </div>
  );
};