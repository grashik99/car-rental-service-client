import { Link } from "react-router";

const CarCard = ({ car, my }) => {
  console.log(car, my);
  return (
    <div className="w-full md:max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={car.imageUrl}
        alt={car.model}
        className="w-full h-56 object-cover"
      />
      <div className="p-5 space-y-2">
        <h2 className="text-2xl font-bold">{car.model}</h2>
        <div className="grid grid-cols-2">
          <p className="text-gray-600">Price: ${car.price}/day</p>
          <p className="text-sm">Location: {car.location}</p>
          <p className="text-sm text-gray-500">Bookings: {car.bookingCount}</p>
        </div>
        <p className="text-sm text-gray-500">
          Added By: {car.addedBy} ({car.email})
        </p>
        {my ? (
          <Link>
            <button className="btn btn-success w-full">Edit Info</button>
          </Link>
        ) : (
          <Link to={`/bookNow/${car._id}`}>
            <button className="btn btn-success w-full">View Details</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default CarCard;
