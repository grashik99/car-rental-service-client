import { Suspense, use } from "react";
import MyCarsCard from "./MyCarsCard";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../pages/Loading";
import bg from "../../assets/bg-long.jpg";

const myCarsPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/mycars?email=${email}`, {
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
      <div className="w-[98%] md:w-[90%] mx-auto pb-4">
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
