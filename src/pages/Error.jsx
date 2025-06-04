import { Link } from "react-router";
import errorImage from "../assets/404.jpg";

const Error = () => {
  return (
    <div
      style={{ backgroundImage: `url(${errorImage})` }}
      className=" min-h-screen w-full bg-cover bg-center flex items-center md:items-end-safe justify-center"
    >
      <Link
        to="/"
        className="text-4xl font-semibold bg-black/30 p-4 shadow-xl rounded-2xl border md:mb-30 text-white"
      >
        Page Not Found! Go To HomePage
      </Link>
    </div>
  );
};

export default Error;
