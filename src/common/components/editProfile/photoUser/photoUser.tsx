import React, { useState, ChangeEvent, FC, CSSProperties } from "react";
import { UploadButton } from "common/components/editProfile/uploadButton/UploadButton";
import { ReactComponent as UploadBtn} from "common/assets/img/uploadBtn.svg";
import s from './userPhoto.module.scss'

type Props = {
  defaultPhotoUrl: string;
  clasName?: CSSProperties
};

export const UserPhoto: FC<Props> = ({ defaultPhotoUrl , clasName}) => {
  const [photoUrl, setPhotoUrl] = useState<string>(defaultPhotoUrl);

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const newPhotoUrl = URL.createObjectURL(event.target.files[0]);
    setPhotoUrl(newPhotoUrl);
  };

  return (
    <div className={s.userPhoto}>
      <img style={clasName} className={s.img} src={photoUrl} alt="User's profile" />
      <UploadButton classname={s.uploadBtn} buttonImg={<UploadBtn/>} onChange={handlePhotoChange}/>
    </div>
  );
};

export default UserPhoto;