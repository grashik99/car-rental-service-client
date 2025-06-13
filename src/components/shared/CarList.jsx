import axios from "axios";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const CarList = ({ car, index, myBook }) => {
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

  return (
    <>
      <li className="list-row items-center">
        <div className="text-4xl font-thin opacity-30 tabular-nums">
          {index + 1}
        </div>
        <div>
          <img className="size-15 rounded-box" src={car.imageUrl} />
        </div>
        <div className="list-col-grow">
          <div>{car.model}</div>
          {myBook ? (
            <>
            <div>
              <p>Booking Date: {car.startDate}</p>
              <p>Total Price: ${car.totalPrice}</p>
            </div>
            </>
          ) : (
            <>
              <div className="text-xs uppercase font-semibold opacity-60">
                {car.features}
              </div>
            </>
          )}
        </div>
        {myBook ? (
          <>
            <button
              onClick={() => cancelBook(car._id, car.bookingId)}
              className="btn btn-secondary w-full"
            >
              Cancel Booking
            </button>
          </>
        ) : (
          <>
            <Link to={`/bookNow/${car._id}`}>
              <button className="btn btn-success w-full">View Details</button>
            </Link>
          </>
        )}
      </li>
    </>
  );
};
export default CarList;
