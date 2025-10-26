import { use } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Links = () => {
  const {user} = use(AuthContext)
  return (
    <>
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="">
        <NavLink to="/feedback">Feedback</NavLink>
      </li>
      <li>
        <NavLink to="/availableCars">Available Cars</NavLink>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addCar">Add Car</NavLink>
          </li>
          <li>
            <NavLink to="/myCars">My Car</NavLink>
          </li>
          <li>
            <NavLink to="/myBooking">My Booking</NavLink>
          </li>
        </>
      )}

      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-[#261FB3]/90">
            <li>
              <NavLink to="/d">Home</NavLink>
            </li>
            <li>
              <NavLink to="/f">Home</NavLink>
            </li>
          </ul>
        </details>
      </li> */}
    </>
  );
};
export default Links;
