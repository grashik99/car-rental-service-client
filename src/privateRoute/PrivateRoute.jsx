import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  if (user && user?.email) {
    return children;
  }

  navigate("/register");
};
export default PrivateRoute;
