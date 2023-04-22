import React, { useEffect, useState } from "react"
import s from "./editProfile.module.scss"
import UserPhoto from "common/components/editProfile/photoUser/photoUser"
import SuperEditableSpan from "common/components/superComponents/superEditableSpan/SuperEditableSpan"
import SuperButton from "common/components/superComponents/superButton/SuperButton"
import { AuthWrapper } from "common/components/authorization/authWrapper/AuthWrapper"
import { BtnBack } from "common/components/btnBack/BtnBack"
import { useSelector } from "react-redux"
import { getAvatar, getName } from "common/components/authorization/login/auth.selectors"
import { useActions } from "common/hooks"
import { authThunks } from "common/components/authorization/login/authSlice"

export const EditProfile = () => {
  const userName = useSelector(getName)
  const userPhoto = useSelector(getAvatar)
  const { updateProfile } = useActions(authThunks)
  const [name, setName] = useState("")
  const [photoUrl, setPhotoUrl] = useState<string>("")

  const onClickHandler = (e: any) => {
    e.preventDefault()
    updateProfile({ name, avatar: photoUrl })
  }


  useEffect(() => {
    setName(userName)
    setPhotoUrl(userPhoto)
  }, [userName, userPhoto])
  return <>
    <BtnBack />
    <AuthWrapper>
      <h1 className={s.title}>Personal Information</h1>
      <form className={s.form}>
        <UserPhoto clasName={{ width: "96px" }} photoUrl={photoUrl} setPhotoUrl={setPhotoUrl} />
        <div className={s.editableSpan}>
          <SuperEditableSpan value={name} onChange={e => setName(e.currentTarget.value)} />
        </div>
        <p className={s.email}>your email address here</p>
        <SuperButton xType={"secondary"} className={s.btn} onClick={onClickHandler}>
          Save
        </SuperButton>
      </form>
    </AuthWrapper>
  </>
}