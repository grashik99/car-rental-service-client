import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUser } = use(AuthContext);
  const navigate = useNavigate()
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const name = form.name.value;
    const photo = form.photo.value;
    const updateInfo = { displayName: name, photoURL: photo };
    updateUser(updateInfo)
      .then(() => {
        Swal.fire({
          title: "Update Profile Success.",
          icon: "success",
          draggable: true,
        });
        navigate('/myProfile')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" min-h-[50vh] flex justify-center items-center">
            <Helmet>
              <title>Car Rental Service | Profile Settings</title>
            </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleUpdateProfile} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              className="input"
              placeholder="Email"
            />

            <label className="label">PhotoUrl</label>
            <input
              type="url"
              name="photo"
              defaultValue={user.photoURL}
              className="input"
              placeholder="Email"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateProfile;
