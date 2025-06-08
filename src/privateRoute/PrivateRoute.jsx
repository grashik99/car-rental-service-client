import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const navigate = useNavigate();

  if(loading){
    return <Loading/>
  }

  if (user && user?.email) {
    return children;
  }

  navigate("/register");
};
export default PrivateRoute;
