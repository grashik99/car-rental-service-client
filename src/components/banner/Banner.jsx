import videoBg from "../../assets/banner.mp4";

const Banner = () => {
  return (
    <div className="relative min-h-[50vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="relative z-10 w-[90vw] mx-auto min-h-[80vh] flex justify-center items-center">
        <button className="btn">Hello</button>
      </div>

      <div className="absolute inset-0 bg-black/30 z-[1]"></div>
    </div>
  );
};

export default Banner;
