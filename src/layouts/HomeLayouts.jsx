import Banner from "../components/banner/Banner";
import CustomerReviewSection from "../components/customerReviewSection/CustomerReviewSection";
import Faq from "../components/faq/Faq";
import HowItWorks from "../components/howItWork/HowItWork";
import Offers from "../components/offer/Offers";
import ShowLast from "../components/showLast/ShowLast";
import WhyUs from "../components/whyUs/WhyUs";

const HomeLayouts = () => {
  return (
    <div>
      <Banner />
      <WhyUs />
      <ShowLast />
      <HowItWorks/>
      <Offers />
      <CustomerReviewSection/>
      <Faq />
    </div>
  );
};
export default HomeLayouts;
