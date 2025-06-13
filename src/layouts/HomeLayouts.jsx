import Banner from "../components/banner/Banner";
import Offers from "../components/offer/Offers";
import ShowLast from "../components/showLast/ShowLast";
import WhyUs from "../components/whyUs/WhyUs";

const HomeLayouts = () => {
  return (
    <div>
      <Banner />
      <WhyUs />
      <ShowLast />
      <Offers />
    </div>
  );
};
export default HomeLayouts;
