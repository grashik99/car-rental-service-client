import { useEffect, useState } from "react";
import Loading from "../../pages/Loading";
import CarCard from "../shared/CarCard";
import bg from "../../assets/bg-long.jpg"
const ShowLast = () => {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    fetch("https://take-your-car-sever.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  return (
    <div style={{backgroundImage: `url(${bg})`}}>
      {cars ? (
        <>
          <h1 className="titles px-[8vw] mp-6 md:pt-12">
            Recent Listings
          </h1>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4 contain">
            {cars.slice(-10).map((car) => (
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
