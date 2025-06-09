import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../pages/Loading";
import CarCard from "../shared/CarCard";

const MyBooking = () => {
  const { user, myCarLoading, setMyCarLoading } = use(AuthContext);
  const [booked, setBooked] = useState(null);
  const myBook = true;
  useEffect(() => {
    fetch(`http://localhost:3000/mybooked?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBooked(data);
        setMyCarLoading(false);
      });
  }, [user, setMyCarLoading]);

  return (
    <div className="my-2">
      {myCarLoading ? (
        <Loading />
      ) : booked?.length >= 1 ? (
        <>
          <div className="grid md:grid-cols-3 justify-between gap-4">
            {booked?.map((car) => (
              <CarCard key={car._id} car={car} myBook={myBook} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1>Nocar</h1>
        </>
      )}
    </div>
  );
};
export default MyBooking;
