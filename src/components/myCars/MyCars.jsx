import { Suspense, use } from "react";
import MyCarsCard from "./MyCarsCard";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../pages/Loading";
import bg from "../../assets/bg-long.jpg";
import { Helmet } from "react-helmet-async";

const myCarsPromise = (email, accessToken) => {
  return fetch(`https://take-your-car-sever.vercel.app/mycars?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
const MyCars = () => {
  const { user } = use(AuthContext);
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center"
    >
      <Helmet>
        <title>Car Rental Service | My Cars</title>
      </Helmet>
      <div className="contain">
        <Suspense fallback={<Loading />}>
          <MyCarsCard
            myCarsPromise={myCarsPromise(user.email, user.accessToken)}
          />
        </Suspense>
      </div>
    </div>
  );
};
export default MyCars;
