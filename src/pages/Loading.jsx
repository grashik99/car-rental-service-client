import Lottie from "lottie-react";
import car1Lottie from "../assets/lottie/car (4).json"

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className=" w-fit h-full z-0">
        <Lottie
          animationData={car1Lottie}
          className="w-full h-[50vh] object-cover"
        />
      </div>
    </div>
  );
};
export default Loading;
 