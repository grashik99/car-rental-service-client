import { use, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import regLotti from "../../assets/lottie/register.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";

const Register = () => {
  const { createUserWithEmail, updateUser } = use(AuthContext);
const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    

    createUserWithEmail(email, password)
      .then(() => {
        const updateInfo = { displayName: name, photoURL: photo };
        updateUser(updateInfo)
          .then(() => {
            axios({
              method: "post",
              url: "https://take-your-car-sever.vercel.app/addUser",
              data: { name, email, photo },
            }).then((res) => {
              console.log(res.data.insertedId);
              if (res.data.insertedId) {
                Swal.fire({
                  title: "Created Successfully",
                  icon: "success",
                  draggable: true,
                });
              }
            });
            navigate('/')
            form.reset();
          })
      })
      .catch((error) => {
        const errorCode = error.code;
         Swal.fire({
              title: `${errorCode}`,
              icon: "error",
              draggable: true,
            });
      });
  };

  const showPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="size-100 hidden md:flex">
        <Lottie animationData={regLotti} className="w-full h-full" />
      </div>
      <div className="card bg-base-200/90 w-10/12 md:w-fit md:min-w-[350px] shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="url"
              className="input"
              placeholder="Photo URL"
              name="photo"
              required
            />

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
                Already have an account?{" "}
                <Link to="/logIn" className="text-blue-500 link link-hover">
                  Login
                </Link>
              </p>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
