import React, { useEffect } from "react";
import "app/App.scss";
import { Route, Routes } from "react-router-dom";
import { Registration } from "common/components/authorization/registration/Registration";
import { PasswordRecovery } from "common/components/authorization/passwordRecovery/PasswordRecovery";
import { NotFound } from "common/components/notFound/NotFound";
import { NewPasswordInput } from "common/components/authorization/newPasswordInput/NewPasswordInput";
import { CheckEmail } from "common/components/authorization/checkEmail/CheckEmail";
import { EditProfile } from "common/components/editProfile/EditProfile";
import { PacksList } from "features/packsList/PacksList";
import { Main } from "common/components/main/Main";
import { useActions } from "common/hooks";
import { authThunks } from "common/components/authorization/login/authSlice";
import { useSelector } from "react-redux";
import { Circular } from "common/components/Circular";
import { Cards } from "features/pack/Cards";
import { appSelectors } from "app";
import { Login } from "common/components/authorization/login/Login";

export const App = () => {
  const { initializeApp } = useActions(authThunks);
  const isInitialized = useSelector(appSelectors.isInitialized);

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  if (!isInitialized) {
    return <Circular />;
  }
  return (
    <div className="main">
      <Main />
      <div className="root">
        <Routes>
          <Route path="/" element={<PacksList />} />
          <Route path="/cards/:cardsPack_id" element={<Cards />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/set-new-password/:token" element={<NewPasswordInput />} />
          <Route path="/passwordRecovery" element={<PasswordRecovery />} />
          <Route path="/checkEmail" element={<CheckEmail />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};


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



