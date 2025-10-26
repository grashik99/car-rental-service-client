import Banner from "../components/banner/Banner";
import ContactForm from "../components/contactForm/ContactForm";
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
      <Faq />
    </div>
  );
};
export default HomeLayouts;
