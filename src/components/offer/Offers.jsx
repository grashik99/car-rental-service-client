import { Link } from "react-router";
import bg from "../../assets/bg-x-3.jpg";

const Offers = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage:
          `url(${bg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <h1 className="mb-5 text-xl font-bold bg-green-500/60 py-3 rounded-xl">
            Get you first drive at 25% of discount
          </h1>
          <p className="mb-5 p-4 rounded-xl">
            🚗 Get 25% OFF on Your First Drive! Start your journey with savings!
            We're giving 25% off on your first car rental as a warm welcome to
            our new customers. ✅ Use Code: FIRST25 📅 Limited Time Offer  Book
            now and save big! 📍 Available for all car categories 💳 No hidden
            fees | Easy online booking | 24/7 customer support Whether it's a
            weekend getaway or a daily commute — your first drive just got more
            affordable. Don't miss out! 👉 Book now and enjoy the ride with
            confidence.
          </p>
          <Link to="/availableCars" className="btn btn-primary shadow btn-sm px-10 rounded-full">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Offers;
