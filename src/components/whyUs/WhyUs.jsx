import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import cars from "../../assets/cars.jpg";
import re_inform from "../../assets/re-inform.jpg";
import s_driver from "../../assets/s-driver.jpg";
import call_services from "../../assets/call-services.jpg";
import bg from "../../assets/root-bg-x.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Typewriter } from "react-simple-typewriter";

const WhyUs = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center"
    >
      <div className="w-[90%] mx-auto md:grid grid-cols-2 items-center gap-5 py-5 md:py-0">
        <div>
          <h3 className="text-3xl md:text-5xl text-center font-bold text-white bg-black/40 rounded-2xl p-4">
            Why{" "}
            <Typewriter
              words={["Choose Us?", "we are the best?"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={80}
              delaySpeed={2500}
            />
          </h3>
          <p className="text-center text-black/50 p-4 m-4 rounded-2xl">
            We offer unmatched reliability, top-tier customer service, and a
            premium selection of vehicles tailored to your needs. Whether you're
            looking for luxury, performance, or affordability, our commitment to
            excellence ensures you drive away satisfied every time.
          </p>
        </div>
        <div className="py-8">
          <div className="mx-auto rounded-3xl border shadow-2xl overflow-auto">
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="relative">
                  <img
                    src={cars}
                    alt="Cars"
                    className="w-full h-auto rounded-3xl"
                  />
                  <div className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-3xl font-bold px-4 py-2 bg-opacity-60 bg-black/50 rounded-lg shadow-lg">
                    <Typewriter
                      words={[
                        "WE HAVE A HUGE COLLECTION OF EXCITING CARS. YOUR DREAM RIDE AWAITS!",
                      ]}
                      loop={Infinity}
                      cursor
                      cursorStyle="_"
                      typeSpeed={30}
                      deleteSpeed={0}
                      delaySpeed={2000}
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative">
                  <img
                    src={s_driver}
                    alt="s_driver"
                    className="w-full h-auto"
                  />
                  <div className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-3xl font-bold px-4 py-2 bg-opacity-60 bg-black/50 rounded-lg shadow-lg">
                    <Typewriter
                      words={[
                        "OUR DRIVERS ARE HIGHLY TRAINED, PROFESSIONAL, AND COURTEOUS.",
                      ]}
                      loop={Infinity}
                      cursor
                      cursorStyle="_"
                      typeSpeed={30}
                      deleteSpeed={0}
                      delaySpeed={2000}
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative">
                  <img
                    src={re_inform}
                    alt="re_inform"
                    className="w-full h-auto"
                  />
                  <div className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-3xl font-bold px-4 py-2 bg-opacity-60 bg-black/50 rounded-lg shadow-lg">
                    <Typewriter
                      words={[
                        "OUR DRIVERS ARE PROFESSIONALLY TRAINED THROUGH RIGOROUS PROGRAMS TO ENSURE SAFETY.",
                      ]}
                      loop={Infinity}
                      cursor
                      cursorStyle="_"
                      typeSpeed={30}
                      deleteSpeed={0}
                      delaySpeed={2000}
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative">
                  <img
                    src={call_services}
                    alt="call_services"
                    className="w-full h-auto"
                  />
                  <div className="absolute text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-3xl font-bold px-4 py-2 bg-opacity-60 bg-black/50 rounded-lg shadow-lg">
                    <Typewriter
                      words={[
                        "OUR 24/7 CALL SERVICE IS ALWAYS READY TO ASSIST YOU—FAST, FRIENDLY, AND RELIABLE SUPPORT WHENEVER YOU NEED IT",
                      ]}
                      loop={Infinity}
                      cursor
                      cursorStyle="_"
                      typeSpeed={30}
                      deleteSpeed={0}
                      delaySpeed={2000}
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyUs;
