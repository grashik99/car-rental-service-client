import { useEffect, useState } from "react";
import Loading from "../../pages/Loading";
import CarCard from "../shared/CarCard";
import bg from "../../assets/bg-long.jpg"
const ShowLast = () => {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  return (
    <div style={{backgroundImage: `url(${bg})`}}>
      {cars ? (
        <>
          <h1 className="text-center py-6 text-4xl font-bold p-2">
            Recent Listings
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 w-[95%] mx-auto gap-4 py-4">
            {cars.slice(-6).map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default ShowLast;
