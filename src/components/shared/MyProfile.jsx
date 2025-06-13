import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="min-h-[50vh] flex justify-center items-center my-2">
      <div className="card bg-success w-96 shadow-sm">
        <figure>
          <img
            src={
              user.photoURL
                ? user.photoURL
                : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            className="size-40 mt-2 rounded-2xl"
            alt={user.displayName}
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Name {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <div className="card-actions justify-end">
            <Link to="/updateProfile" className="btn btn-primary">Edit</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
