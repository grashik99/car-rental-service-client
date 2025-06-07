import Lottie from "lottie-react";
import car1Lottie from "../../assets/lottie/car (1).json";
import bg from "../../assets/bg-x-3.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="relative overflow-hidden min-h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute top-0 left-0 w-fit h-full z-0">
        <Lottie
          animationData={car1Lottie}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      <div className="absolute inset-0 z-10 flex justify-center items-center px-4 text-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            UNLOCK FREEDOM WITH EVERY RIDE
          </h1>
          <Link to="/availableCars" className="btn btn-info text-white text-lg">
            View Available Cars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
