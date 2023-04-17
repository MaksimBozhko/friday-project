import React, { useEffect } from "react";
import "app/App.scss"
import { createBrowserRouter, Route, Routes } from "react-router-dom"
import { Registration } from "common/components/authorization/registration/Registration"
import { Login } from "common/components/authorization/login/Login"
import { PasswordRecovery } from "common/components/authorization/passwordRecovery/PasswordRecovery"
import { NotFound } from "common/components/notFound/NotFound"
import { NewPasswordInput } from "common/components/authorization/newPasswordInput/NewPasswordInput";
import { CheckEmail } from "common/components/authorization/checkEmail/CheckEmail";
import { EditProfile } from "common/components/editProfile/EditProfile";
import  { PacksList } from "features/packsList/PacksList";
import { Main } from "common/components/main/Main"
import { useActions } from "common/hooks";
import { authThunks } from "common/components/authorization/login/authSlice";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store";
import Circular from "common/components/Circular";
import { Cards } from "features/pack/Cards";

export const App = () => {
  const {initializeApp} = useActions(authThunks)
  const isInitialized = useSelector((state: AppRootStateType) => state.app.isInitialized)

  useEffect(() => {
    initializeApp()
  }, [])

  if (!isInitialized) {return <Circular/>}
  return (
    <div className="main">
      <Main />
      <div className="root">
        <Routes>
          <Route path="friday-project/" element={<PacksList />} />
          <Route path="friday-project/cards/:_id" element={<Cards />} />
          <Route path="friday-project/login" element={<Login />} />
          <Route path="friday-project/registration" element={<Registration />} />
          <Route path="friday-project/set-new-password/:token" element={<NewPasswordInput />} />
          <Route path="friday-project/passwordRecovery" element={<PasswordRecovery />} />
          <Route path="friday-project/checkEmail" element={<CheckEmail />} />
          <Route path="friday-project/editProfile" element={<EditProfile />} />
          <Route path="friday-project/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Profile />,
//     errorElement: <h1>error</h1>,
//     children: [
//       {
//         path: "login",
//         element: <Login />
//       },
//       {
//         path: "registration",
//         element: <Registration />
//       },
//       {
//         path: "newPassword",
//         element: <NewPasswordInput />
//       },
//       {
//         path: "passwordRecovery",
//         element: <PasswordRecovery />
//       },
//     ]
//   },
//   {
//     path: "/*",
//     element: <NotFound />
//   }
// ])



