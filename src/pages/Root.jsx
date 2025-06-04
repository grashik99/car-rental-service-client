import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import bg from "../assets/bg.jpg";

const Root = () => {
  return (
    <div  style={{backgroundImage: `url(${bg})`}} className="min-h-screen bg-cover bg-center">
      <div className="max-w-7xl mx-auto ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
export default Root;
