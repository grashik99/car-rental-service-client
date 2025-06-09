import { useLoaderData } from "react-router";
import CarCard from "../shared/CarCard";
import { useState } from "react";
import CarList from "../shared/CarList";

const AvailableCars = () => {
  const cars = useLoaderData();
  const [view, setView] = useState(true);
  console.log(cars.length);
  return (
     <div className="w-[98%] md:w-[90%] mx-auto mb-4">
      {cars.length >= 1 ? (
        <>
          <div className="navbar shadow-2xl my-2 mb-4 rounded-sm">
            <div className="navbar-start"></div>
            <div className="navbar-center">
              <h2 className="text-3xl font-bold">Available Cars</h2>
            </div>
            <div className="navbar-end">
              <button className="btn" onClick={() => setView(!view)}>
                {view ? "List" : "Grid"}
              </button>
            </div>
          </div>

          {view ? (
            <div className="grid md:grid-cols-3 justify-between gap-4">
              {cars.map((car) => (
                <CarCard key={car._id} car={car} />
              ))}
            </div>
          ) : (
            <div>
              <ul className="list bg-accent/50 rounded-box shadow-md">
                {cars.map((car, index) => (
                  <CarList key={car._id} car={car} index={index} />
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <div className="min-h-[50vh] flex justify-center items-center">
          <h1 className="md:text-4xl">The cars will be available soon!</h1>
        </div>
      )}
    </div>
  );
};
export default AvailableCars;
