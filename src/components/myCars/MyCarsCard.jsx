import { use } from "react";
import CarCard from "../shared/CarCard";
import { Link } from "react-router";
import bg from "../../assets/bg-x-6.jpg";

const MyCarsCard = ({ myCarsPromise }) => {
  const cars = use(myCarsPromise);
  const my = true;
  return (
    <div className="py-2 md:py-4  bg-cover bg-center">
      {cars.length >= 1 ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 justify-between gap-4">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} my={my} />
          ))}
        </div>
      ) : (
        <div
          className=" min-h-[50vh] flex justify-center items-center rounded-2xl"
          style={{ backgroundImage: `url(${bg})`, opacity: "80%" }}
        >
          {/* <h1 className="text-xl md:text-4xl">
            Hello dear user, you haven't added any cars.{" "}
            <Link className="link" to="/addCar">
              Please add your car.
            </Link>
          </h1> */}


          <div className="flex flex-col items-center justify-center py-20 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7434/7434140.png"
              alt="No cars"
              className="w-40 h-40 mb-4 opacity-80"
            />
            <h2 className="text-xl font-semibold text-black mb-2">No cars added yet</h2>
            <p className="text-black mb-6 text-center max-w-sm">
              You haven’t added any vehicles to your account.
              Start by adding your first car to manage bookings, documents, and more.
            </p>
            <Link to="/addCar">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition"
            >
              + Add Car
            </button></Link>
          </div>


        </div>
      )}
    </div>
  );
};
export default MyCarsCard;
