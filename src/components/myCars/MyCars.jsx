import { Suspense, use } from "react";
import MyCarsCard from "./MyCarsCard";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../pages/Loading";

const myCarsPromise = (email) => {
  return fetch(`http://localhost:3000/mycars?email=${email}`).then((res) =>
    res.json()
  );
};
const MyCars = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <MyCarsCard myCarsPromise={myCarsPromise(user.email)} />
      </Suspense>
    </div>
  );
};
export default MyCars;
