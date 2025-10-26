import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const CarCard = ({ car, my, myBook }) => {
  const navigate = useNavigate();

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
              .delete(`https://take-your-car-sever.vercel.app/car/delete/${car._id}`)
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
    <div className="
    w-full 
    h-full
    mx-auto 
    bg-white 
    rounded-sm
    shadow-2xl
    overflow-hidden 
    flex 
    flex-col 
    shadow-blue-50
    hover:shadow-orange-100  
    ">
      <img
        src={car.imageUrl}
        alt={car.model}
        className="w-full h-56 object-cover"
      />
      <div className="p-5 flex flex-col flex-grow">
        <div >
          <h2 className=" font-bold text-black">{car.model}</h2>
          <div >
            <p className="text-gray-600">Price: ${car.price}/day</p>
            <p className="text-sm flex items-center text-black">
              {/* <IoLocationSharp className="mr-2 text-black" /> Location: {car.location}{" "} */}
            </p>
            {/* <p className="text-gray-600">
            Date Posted: {car.datePost ? car.datePost : "2025-06-08"}
          </p> */}
            {myBook ? (
              <p className="text-sm text-gray-500 col-span-2">
                Booking End: {car.endDate}
              </p>
            ) : (
              <></>
              // <p className="text-sm text-gray-500 col-span-2">
              //   Bookings: {car.bookingCount}
              // </p>
            )}
          </div>
          {/* <p className="text-sm text-gray-500 mt-2">
          Owner: {car.addedBy} ({car.email})
        </p> */}
        </div>

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
            <button className="btn btn-success w-full">Cancel Booking</button>
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
