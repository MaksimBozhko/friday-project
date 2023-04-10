import React from "react"
import "App.css"
import { createBrowserRouter, Route, Routes } from "react-router-dom"
import { NewPasswordInput } from "common/components/authorization/newPasswordInput/NewPasswordInput"
import { Registration } from "common/components/authorization/registration/Registration"
import { Login } from "common/components/authorization/login/Login"
import { PasswordRecovery } from "common/components/authorization/passwordRecovery/PasswordRecovery"
import { Main } from "pages/main/Main"
import { NotFound } from "common/components/notFound/NotFound"

export const App = () => {
  return (
    <div className="root">
      <Main />
      <div>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="newPassword" element={<NewPasswordInput />} />
          <Route path="passwordRecovery" element={<PasswordRecovery />} />
          <Route path="*" element={<NotFound />} />
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