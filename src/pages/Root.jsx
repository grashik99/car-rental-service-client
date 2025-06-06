import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div className="md:ty-4 pt-2">
      <Navbar />
      <div className="my-2 md:my-4 rounded-sm">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Root;
