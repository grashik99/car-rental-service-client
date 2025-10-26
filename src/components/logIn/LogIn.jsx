import { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import Lottie from "lottie-react";
import ani from "../../assets/lottie/login.json";
import Swal from "sweetalert2";
import GoogleLogin from "../shared/GoogleLogin";
import { Helmet } from "react-helmet-async";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { logIn } = use(AuthContext);

  const [showPass, setShowPass] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // createNewUser.
    logIn(email, password)
      .then((userCredential) => {
        // Signed in
        if (userCredential) {
          Swal.fire({
            title: "Loged In successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
          navigate(from, { replace: true });
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          title: `${errorCode}`,
          icon: "warning",
          draggable: true,
        });
      });
  };

  const showPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hidden md:flex">
        <Lottie animationData={ani} />
      </div>
      <div className="card bg-base-200/90 w-10/12 max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <div className="relative z-50">
              <label className="label">Password</label>
              <input
                type={showPass ? "text" : "password"}
                className="input"
                placeholder="Password"
                name="password"
                required
              />
              <div className="absolute right-5 top-1/2 text-lg z-10">
                <button type="button" onClick={showPassword}>
                  {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
            <div className="flex">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 link link-hover">
                  Register
                </Link>
              </p>
              <p className="link">forgetPassword?</p>
            </div>

            <div className="border flex flex-col p-2 rounded-sm w-fit border-red-500 text-red-500 mt-2">
              <label className="">User: admin@take-car.com</label>
              <label className="">Pass: 111111Aa</label>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Sign In
            </button>
          </form>
        </div>
        <div className="w-[85%] mx-auto mb-4">
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};
export default LogIn;
