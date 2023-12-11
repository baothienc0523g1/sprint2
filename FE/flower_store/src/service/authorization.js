import * as securityService from './securityService';
import {Navigate, Outlet} from "react-router-dom";

const hasAuthor = (allowedRole, userRole) => {
    for (let i = 0; i < allowedRole.length; i++) {
        let role = allowedRole[i];
        if (userRole === role) {
            return true;
        }
    }
    return false;
};

export const HandleAuthor = ({allowedRole}) => {
    const isAuthenticated = securityService.getAccessToken();
    let userRole;

    if(isAuthenticated) {
        userRole = securityService.getRoleByJwt();
    }
    return userRole && hasAuthor(allowedRole, userRole) ?
        <Outlet/> : <Navigate to="/401"/>;
};