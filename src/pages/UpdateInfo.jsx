import { useLoaderData } from "react-router";
import bg from "../assets/root-bg-x.jpg";
import axios from "axios";

const UpdateInfo = () => {
  const car = useLoaderData();
  console.log(car);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const updateData = {
      model: formData.get("model"),
      price: formData.get("price"),
      registration: formData.get("registration"),
      features: formData.get("features"),
      description: formData.get("description"),
      imageUrl: formData.get("imageUrl"),
      location: formData.get("location"),
    };
    axios
      .patch(`http://localhost:3000/car/${car._id}`, updateData)
      .then((response) => {
        console.log("Updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating:", error);
      });
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center py-4"
    >
      <div className="max-w-3xl mx-auto bg-base-100/40 p-8 rounded-xl shadow-lg mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Update Car Info
        </h2>
        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block font-medium">Car Model</label>
            <input
              type="text"
              name="model"
              defaultValue={car.model}
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
              defaultValue={car.price}
              required
            />
          </div>

          <div>
            <label className="block font-medium">
              Vehicle Registration Number
            </label>
            <input
              type="text"
              name="registration"
              className="w-full p-2 border rounded"
              defaultValue={car.registration}
              required
            />
          </div>

          <div>
            <label className="block font-medium">Features</label>
            <input
              type="text"
              name="features"
              className="w-full p-2 border rounded"
              defaultValue={car.features}
            />
          </div>

          <div>
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              className="w-full p-2 border rounded"
              defaultValue={car.location}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              className="w-full p-2 border rounded"
              defaultValue={car.imageUrl}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              rows="4"
              className="w-full p-2 border rounded"
              defaultValue={car.description}
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateInfo;
