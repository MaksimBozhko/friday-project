import React from "react"
import "App.scss"
import { createBrowserRouter, Route, Routes } from "react-router-dom"
import { Registration } from "common/components/authorization/registration/Registration"
import { Login } from "common/components/authorization/login/Login"
import { PasswordRecovery } from "common/components/authorization/passwordRecovery/PasswordRecovery"
import { Main } from "pages/main/Main"
import { NotFound } from "common/components/notFound/NotFound"
import { NewPasswordInput } from "common/components/authorization/newPasswordInput/NewPasswordInput";
import { CheckEmail } from "common/components/authorization/checkEmail/CheckEmail";
import { EditProfile } from "common/components/editProfile/EditProfile";
import  { PacksList } from "pages/packsList/PacksList";

export const App = () => {
  return (
    <div className="main">
      <Main />
      <div className="root">
        <Routes>
          <Route path="friday-project" element={<PacksList />} />
          <Route path="friday-project/login" element={<Login />} />
          <Route path="friday-project/registration" element={<Registration />} />
          <Route path="friday-project/newPassword" element={<NewPasswordInput />} />
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



