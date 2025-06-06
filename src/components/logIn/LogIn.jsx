import { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const LogIn = () => {
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
        const user = userCredential.user;
        console.log(user);
        form.reset()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const showPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="card bg-base-200/90 w-10/12 md:w-fit md:min-w-[350px] shrink-0 shadow-2xl">
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
            <div>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 link link-hover">
                  Register
                </Link>
              </p>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
