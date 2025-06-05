import Links from "./Links";
import logo from "../../assets/logo-c.png";
import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="navbar shadow-sm rounded-md bg-base-200/70 text-white">
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
            className="menu menu-sm dropdown-content bg-[#161179] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {" "}
            {<Links />}{" "}
          </ul>
        </div>
        <Link to="/">
          <img
            src={logo}
            className="btn w-28 shadow bg-white hover:bg-white"
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{<Links />}</ul>
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
                      alt="Tailwind CSS Navbar component"
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn shadow">
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
