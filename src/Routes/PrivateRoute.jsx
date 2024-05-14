import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth()
    const location = useLocation()
    if(loading) return <p>loading .......</p>
    if(user) return children;
    return <Navigate to={'/login'}  state={location.pathname}/>
};

export default PrivateRoute;