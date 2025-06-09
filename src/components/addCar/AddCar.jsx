import axios from "axios";
import bg from "../../assets/root-bg-x.jpg";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const AddCar = () => {
  const {user} = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const carData = {
      model: formData.get("model"),
      price: formData.get("price"),
      availability: formData.get("availability"),
      registration: formData.get("registration"),
      features: formData.get("features"),
      description: formData.get("description"),
      bookingCount: 0,
      imageUrl: formData.get("imageUrl"),
      location: formData.get("location"),
      addedBy: user?.displayName,
      email: user?.email,
      photo: user?.photoURL
    };
    // console.log(carData);
    axios({
      method: "post",
      url: "http://localhost:3000/addCar",
      data: carData,
    })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center py-4"
    >
      <div className="max-w-3xl mx-auto bg-base-100/40 p-8 rounded-xl shadow-lg mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add a New Car
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block font-medium">Car Model</label>
            <input
              type="text"
              name="model"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Daily Rental Price</label>
            <input
              type="number"
              name="price"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Availability</label>
            <select name="availability" className="w-full p-2 border rounded">
              <option>Available</option>
              <option>Unavailable</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">
              Vehicle Registration Number
            </label>
            <input
              type="text"
              name="registration"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Features</label>
            <input
              type="text"
              name="features"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              rows="4"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          <input type="hidden" name="bookingCount" value={0} />

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddCar;
