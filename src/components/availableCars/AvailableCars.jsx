import { useLoaderData } from "react-router";
import CarCard from "../shared/CarCard";
import { useEffect, useState } from "react";
import CarList from "../shared/CarList";
import bg from "../../assets/bg-long.jpg";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const carsLoad = useLoaderData();
  const [view, setView] = useState(true);

  useEffect(() => {
    setCars(carsLoad);
  }, [carsLoad]);

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-[98%] md:w-[90%] mx-auto pb-4">
        {cars.length >= 1 ? (
          <>
            <div className="navbar mb-4 rounded-sm">
              <div className="navbar-start">
                <label className="input">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input type="search" required placeholder="Search" />
                </label>
              </div>
              <div className="navbar-center hidden md:flex">
                <h2 className="text-3xl font-bold">
                  Available Cars: {cars.length}
                </h2>
              </div>
              <div className="navbar-end">
                <button
                  className="btn btn-primary w-1/3"
                  onClick={() => setView(!view)}
                >
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
    </div>
  );
};
export default AvailableCars;
