import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import bg from "../assets/root-bg.jpg";

const Root = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen bg-cover bg-center"
    >
      <div className="max-w-7xl mx-auto md:ty-4 pt-2">
        <Navbar />
        <div className="min-h-[70vh]  my-2 md:my-8 rounded-sm">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Root;
