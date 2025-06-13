import { use, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && (!user || !user.email)) {
      navigate("/login", {state: {from:location}, replace:true});
    }
  }, [loading, user, navigate, location]);

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return children;
  }

  return null;
};

export default PrivateRoute;
