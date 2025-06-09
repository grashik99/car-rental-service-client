import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../pages/Loading";
import CarCard from "../shared/CarCard";
import { Link } from "react-router";

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
          <div className="card md:w-96 mx-auto bg-warning text-white card-md shadow-sm md:my-50">
            <div className="card-body">
              <h2 className="card-title md:text-4xl p-2 bg-red-500 rounded-xl">No car booked.</h2>
              <p className="md:text-xl">
                Hurry up, the existing offer is running now, take a look now.
              </p>
              <div className="justify-end card-actions">
                <Link to='/availableCars' className="btn btn-primary">Cars</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default MyBooking;
