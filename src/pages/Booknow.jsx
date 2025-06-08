import { useLoaderData } from "react-router";

const Booknow = () => {
  const car = useLoaderData();

  const handleBooking = () =>{
    console.log("hi")
  }

  return (
    <div className="w-full px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={car.imageUrl}
          alt={car.model}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{car.model}</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Added by:</span> {car.addedBy}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Email:</span> {car.email}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Location:</span> {car.location}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Registration:</span>{" "}
            {car.registration}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Availability:</span>{" "}
            {car.availability}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Price:</span> ${car.price}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Features:</span> {car.features}
          </p>
          <p className="text-gray-800 mt-4">{car.description}</p>
          <button className="btn w-full mt-4 btn-success" onClick={handleBooking}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
