import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../pages/Loading";
import CarList from "../shared/CarList";
import { Link } from "react-router";
import bg from "../../assets/bg-x-3.jpg";
import { Helmet } from "react-helmet-async";

const MyBooking = () => {
  const { user, myCarLoading, setMyCarLoading } = use(AuthContext);
  const [booked, setBooked] = useState(null);
  const myBook = true;
  useEffect(() => {
    fetch(`https://take-your-car-sever.vercel.app/mybooked?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setBooked(data);
        setMyCarLoading(false);
      });
  }, [user, setMyCarLoading]);

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center min-h-[50vh]"
    >
      <Helmet>
        <title>My Booking</title>
      </Helmet>
      <div className="py-2 w-[98%] md:w-[90%] mx-auto">
        {myCarLoading ? (
          <Loading />
        ) : booked?.length >= 1 ? (
          <>
            <div>
              <ul className="list bg-accent rounded-box shadow-md">
                {booked.map((car, index) => (
                  <CarList key={car._id} car={car} index={index} myBook={myBook} />
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            {/* <div className="flex justify-center items-center">
              <div className="card md:w-96 mx-auto bg-black text-white card-md shadow-sm md:my-50">
                <div className="card-body">
                  <h2 className="card-title md:text-4xl p-2 bg-red-500 rounded-xl">
                    No car booked.
                  </h2>
                  <p className="md:text-xl">
                    Hurry up, the existing offer is running now, take a look
                    now.
                  </p>
                  <div className="justify-end card-actions">
                    <Link to="/availableCars" className="btn btn-primary">
                      Cars
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="card bg-base-100 w-96 mx-auto shadow-sm">
              <figure>
                <img
                  src="https://davidmills.net/wp-content/uploads/2022/01/images8670-61f12bf4473a0.jpg"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Book Your First Car</h2>
                <p>Hurry up, the existing offer is running now, take a look
                  now.</p>
                <div className="card-actions justify-end">
                  <Link to="/availableCars" className="btn btn-primary">
                    Cars
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default MyBooking;
