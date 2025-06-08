import { use } from "react";
import CarCard from "../shared/CarCard";
import { Link } from "react-router";
import bg from "../../assets/bg-x-4.jpg"

const MyCarsCard = ({ myCarsPromise }) => {
  const cars = use(myCarsPromise);
  const my = true;
  console.log(cars.length);
  return (
    <div className="my-2 md:my-4  bg-cover bg-center" >
      {cars.length >= 1 ? (
        <div className="grid md:grid-cols-3 border justify-between gap-4">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} my={my} />
          ))}
        </div>
      ) : (
        <div className="border min-h-[50vh] flex justify-center items-center"style={{backgroundImage: `url(${bg})`}}>
          <h1 className="text-xl md:text-4xl">
            Hello dear user, you haven't added any cars.{" "}
            <Link className="link text-blue-500" to="/addCar">
              Please add your car.
            </Link>
          </h1>
        </div>
      )}
    </div>
  );
};
export default MyCarsCard;
