import React0 from "react";

const AuthenticatedRoute=({path,commponen})=>
{
    const {isAutehnticated}=useContext(Auth);
    return isAutehnticated ? (
        <Route path={path} component={commponen} />
    ):(
        <Redirect to="/login" />
    );
};
export default AuthenticatedRoute;
