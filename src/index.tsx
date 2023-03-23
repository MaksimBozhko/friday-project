import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import {Profile} from './pages/profile/Profile';
import {Login} from './components/common/authorization/login/Login';
import {Registration} from './components/common/authorization/registration/Registration';
import {NewPasswordInput} from './components/common/authorization/newPasswordInput/NewPasswordInput';
import {PasswordRecovery} from './components/common/authorization/passwordRecovery/PasswordRecovery';
import {NotFound} from './components/common/notFound/NotFound';

const router = createBrowserRouter([
    {
        path: "/friday-project",
        element: <Profile />,
        errorElement: <h1>error</h1>
    },
    {
        path: "friday-project/login",
        element: <Login/>,
    },
    {
        path: "friday-project/registration",
        element: <Registration/>,
    },
    {
        path: "friday-project/newPassword",
        element: <NewPasswordInput/>,
    },
    {
        path: "friday-project/passwordRecovery",
        element: <PasswordRecovery/>,
    },
    {
        path: "friday-project/*",
        element: <NotFound/>,
    },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);