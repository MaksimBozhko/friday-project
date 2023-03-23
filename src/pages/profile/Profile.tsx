import React from 'react';
import {NavLink} from 'react-router-dom';

export const Profile = () => {
    return (
        <div>
            Profile
            <NavLink to={"login"}>to login</NavLink>
            <NavLink to={"newPassword"}>new pas</NavLink>
            <NavLink to={"registration"}>registr</NavLink>
        </div>
    )
}