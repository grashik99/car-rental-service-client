import { use, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !user.email)) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return children;
  }

  return null;
};

export default PrivateRoute;
