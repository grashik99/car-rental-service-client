import axios from "axios";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const CarCard = ({ car, my, myBook }) => {
  const navigate = useNavigate();
  const cancelBook = (id, bookingId) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You might not be able to return it!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Cancel It!",
        cancelButtonText: "No, Keep It!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://localhost:3000/booked/delete/${bookingId}`)
            .then(() => {
              axios
                .patch(`http://localhost:3000/car/${id}`, {
                  availability: "Available",
                })
                .then((response) => {
                  if (response.data.modifiedCount === 1) {
                    swalWithBootstrapButtons.fire({
                      title: "Cancelled!",
                      text: "Your Booking has been cancelled.",
                      icon: "success",
                    });
                    navigate("/availableCars");
                  }
                })
                .catch((error) => {
                  console.error("Error updating:", error);
                });
            })
            .catch((error) => {
              console.error("Error deleting:", error);
            });
        }
      });
  };

  const handleDelete = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (car.availability === "Available") {
            axios
              .delete(`http://localhost:3000/car/delete/${car._id}`)
              .then((res) => {
                if (res.status === 200) {
                  swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your car has been deleted.",
                    icon: "success",
                  });
                  navigate("/");
                }
              })
              .catch((error) => console.log(error));
          } else {
            Swal.fire({
              title: "Booked",
              icon: "warning",
              draggable: true,
            });
          }
        }
      });
  };

  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
      <img
        src={car.imageUrl}
        alt={car.model}
        className="w-full h-56 object-cover"
      />
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold">{car.model}</h2>
        <div className="grid grid-cols-2 gap-y-1 mt-2">
          <p className="text-gray-600">Price: ${car.price}/day</p>
          <p className="text-sm">Location: {car.location}</p>
          {myBook ? (
            <p className="text-sm text-gray-500 col-span-2">
              Booking End: {car.endDate}
            </p>
          ) : (
            <p className="text-sm text-gray-500 col-span-2">
              Bookings: {car.bookingCount}
            </p>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Owner: {car.addedBy} ({car.email})
        </p>

        <div className="mt-auto pt-4">
          {my ? (
            <div className="flex justify-between">
              <Link to={`/updateCar/${car._id}`}>
                <button className="btn btn-success">Edit Info</button>
              </Link>
              <button onClick={handleDelete} className="btn btn-warning">
                Delete
              </button>
            </div>
          ) : myBook ? (
            <button
              className="btn btn-success w-full"
              onClick={() => cancelBook(car._id, car.bookingId)}
            >
              Cancel Booking
            </button>
          ) : (
            <Link to={`/bookNow/${car._id}`}>
              <button className="btn btn-success w-full">View Details</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default CarCard;
