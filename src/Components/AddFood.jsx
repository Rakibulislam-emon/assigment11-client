import axios from "axios";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useTitle from "../Hooks/useTitle";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
    useTitle("AddFood");
    const { user } = useAuth();
    const navigate = useNavigate();
    const { displayName, email, photoURL } = user || {};

    const handleAddFood = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const foodName = formData.get("foodName");
        const foodUrl = formData.get("foodImageURL");
        const foodQuantity = formData.get("foodQuantity");
        const pickupLocation = formData.get("pickupLocation");
        const expiredDateTime = formData.get("expiredDateTime");
        const additionalNotes = formData.get("additionalNotes");
        const status = "available";
        const donator = {
            displayName,
            email,
            photoURL,
        };

        const foodData = {
            foodName,
            foodQuantity,
            pickupLocation,
            expiredDateTime,
            additionalNotes,
            foodUrl,
            status,
            donator,
        };
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/foods`, foodData);
            console.log(data);
            if (data.insertedId) {
                toast.success("Your food has been successfully added");
                navigate("/available-food");
                form.reset();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-600">
            <div className="w-11/12 max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add Your Food</h1>
                <form onSubmit={handleAddFood} className="space-y-4">
                    <input
                        id="foodName"
                        type="text"
                        name="foodName"
                        placeholder="Food Name"
                        className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                        required
                    />
                    <input
                        id="foodImageURL"
                        type="url"
                        name="foodImageURL"
                        placeholder="Food Image URL"
                        className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                        required
                    />
                    <input
                        id="foodQuantity"
                        type="number"
                        name="foodQuantity"
                        placeholder="Food Quantity"
                        className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                        required
                    />
                    <select
                        id="pickupLocation"
                        name="pickupLocation"
                        className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>Select Pickup Location</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Cumilla">Cumilla</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Dinajpur">Dinajpur</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Rangpur">Rangpur</option>
                    </select>
                    <input
                        id="expiredDateTime"
                        type="datetime-local"
                        name="expiredDateTime"
                        className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                        required
                    />
                    <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        rows="3"
                        placeholder="Additional Notes"
                        className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;
