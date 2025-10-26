import Links from "./Links";
import logo from "../../assets/logo-c.png";
import { Link, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Loged Out successfully",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch(() => {});
  };

  return (
    <div className="navbar md:px-[8vw] shadow-sm bg-accent/95 sticky top-0 z-999">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {" "}
            {<Links />}{" "}
          </ul>
        </div>
        <a href="/">
          <img
            src={logo}
            className="btn w-28 shadow bg-white hover:bg-white"
            alt="logo"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{<Links />}</ul>
      </div>
      <div className="navbar-end">
        <div className="space-x-2">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt={user?.displayName}
                      src={
                        user?.photoURL
                          ? user?.photoURL || user.providerData[0].photoURL
                          : "https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/myProfile">Profile</Link>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/logIn" className="btn shadow">
                Login
              </Link>
              <Link to="/register" className="btn shadow">
                Rigister
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
