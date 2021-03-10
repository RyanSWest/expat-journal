import React from "react";
import {NavLink} from "react-router-dom";

const Nav = ()=> {
    return(
        <div className = "nav">
            <NavLink className = 'navie' to ="/">
                Home
            </NavLink>
            <NavLink className = 'navie' to ="/register">
                Register
            </NavLink>
            <NavLink className = 'navie' to ="/login">
                Login
            </NavLink>
            <NavLink className = 'navie' to ="/dashboard">
                Dashboard
            </NavLink>





        </div>
    )
}
export default Nav