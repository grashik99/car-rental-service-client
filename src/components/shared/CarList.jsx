import { Link } from "react-router";

const CarList = ({car, index}) => {
    console.log(index)
  return (
    <>
      <li className="list-row items-center">
        <div className="text-4xl font-thin opacity-30 tabular-nums">{index}</div>
        <div>
          <img
            className="size-15 rounded-box"
            src={car.imageUrl}
          />
        </div>
        <div className="list-col-grow">
          <div>{car.model}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {car.features}
          </div>
        </div>
        <Link to={`/bookNow/${car._id}`}>
          <button className="btn btn-success w-full">View Details</button>
        </Link>
      </li>
    </>
  );
};
export default CarList;
