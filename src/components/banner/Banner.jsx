import Lottie from "lottie-react";
// import car1Lottie from "../../assets/lottie/car (4).json";
import bg from "../../assets/multiple-car.jpg";
import heroImg from "../../assets/hero-car.png";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative overflow-hidden md:min-h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>

      <div className="contain grid gap-4 md:grid-cols-2  justify-center items-center">


        <div className="text-center">
          <h1 className="text-lg md:text-3xl font-bold text-white mb-6 ">
            <Typewriter
              words={["UNLOCK FREEDOM WITH EVERY RIDE"]}
              loop={Infinity}
              cursor
              cursorStyle="!"
              typeSpeed={50}
              deleteSpeed={80}
              delaySpeed={6000}
            />
          </h1>
          <Link to="/availableCars" className="btn btn-info shadow rounded-full px-12">
            View Available Cars
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 1, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        // className="max-h-[60vh]"
        >
          <img src={heroImg} alt="Car" />
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;


{/* <div className="absolute top-0 left-0 w-fit h-full z-0">
        <Lottie
          animationData={car1Lottie}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 w-fit h-full z-0 hidden md:flex">
        <Lottie
          animationData={car1Lottie}
          className="w-full h-full object-cover"
        />
      </div> */}

{/* <div className="grid gap-4 md:grid-cols-2"> */ }
{/* <div className="absolute inset-0 bg-black/30 z-[1]"></div> */ }


{/* <div className="absolute inset-0 z-10 flex justify-center items-center px-4 text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 ">
              <Typewriter
                words={["UNLOCK FREEDOM WITH EVERY RIDE"]}
                loop={Infinity}
                cursor
                cursorStyle="!"
                typeSpeed={50}
                deleteSpeed={80}
                delaySpeed={6000}
              />
            </h1>
            <Link to="/availableCars" className="btn btn-info shadow rounded-full px-12 bg-[#00D3BB]">
              View Available Cars
            </Link>
          </div>
        </div>

      </div> */}
