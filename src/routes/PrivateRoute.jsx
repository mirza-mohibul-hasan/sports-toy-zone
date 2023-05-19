import { useContext} from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center"><RingLoader  color="#36d7b7"  className='text-center my-24'/></div>
    }
    
    // Private route and Navigate
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;