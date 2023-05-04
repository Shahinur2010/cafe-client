import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
            <NavLink
                to={to}
                style={({ isActive }) => {
                    return {
                    fontWeight: isActive ? "bold" : "",
                }}}
            >
                {children}
            </NavLink>
            
    );
};

export default ActiveLink;