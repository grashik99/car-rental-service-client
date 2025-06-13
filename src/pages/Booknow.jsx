import axios from "axios";
import { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Booknow = () => {
  const car = useLoaderData();
  const { user } = use(AuthContext);
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  const navigate = useNavigate();

  const handleBooking = () => {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dayDif = end - start;
    const totalDays = dayDif / 86400000;
    const totalPriceWithoutVet = totalDays * car.price;
    const vet = totalPriceWithoutVet * 0.18;
    const totalPrice = totalPriceWithoutVet + vet;
    axios({
      method: "post",
      url: "http://localhost:3000/booking",
      data: { carId: car._id, bookedBy: user.email, startDate, endDate },
    })
      .then(function () {
        const newBookingCount = car.bookingCount + 1;
        axios
          .patch(`http://localhost:3000/car/${car._id}`, {
            availability: "Unavailable",
            bookingCount: newBookingCount,
            totalPrice,
          })
          .then((response) => {
            if (response.data.modifiedCount) {
              Swal.fire({
                title: "Car Booked!",
                icon: "success",
                draggable: true,
              });
            }
            navigate("/myBooking");
          })
          .catch((error) => {
            console.error("Error updating:", error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            <span className="font-semibold">Booking Count: </span>
            {car.bookingCount}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Price:</span> ${car.price} /day
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Features:</span> {car.features}
          </p>
          <p className="text-gray-800 mt-4">{car.description}</p>

          <div className="flex justify-between border p-2 rounded-2xl mt-2">
            <div>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Added by:</span> {car.addedBy}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> {car.email}
              </p>
            </div>
            <div className="size-15 ">
              <img
                src={
                  car.photo
                    ? car.photo
                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                alt={car.addedBy}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="md:flex justify-between my-2">
            <div className="flex space-x-2">
              <label className="label">Start Date:</label>
              <input
                type="date"
                id="startDate"
                className="input"
                defaultValue={today}
              />
            </div>
            <div className="flex space-x-2">
              <label className="label">End Date:</label>
              <input
                type="date"
                id="endDate"
                className="input"
                defaultValue={tomorrow}
              />
            </div>
          </div>
          <button
            className="btn w-full mt-4 btn-success"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
