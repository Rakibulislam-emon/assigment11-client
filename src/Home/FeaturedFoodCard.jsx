/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FeaturedFoodCard = ({ food }) => {
    const { foodName, foodUrl, donator, foodQuantity, pickupLocation, expiredDateTime, additionalNotes,_id } = food;
    const { displayName, email } = donator || {};

    return (
        <div className="max-w-md w-full h-[600px] mx-auto overflow-hidden bg-white rounded-lg shadow-md flex flex-col">
            <div className="w-full h-3/5">
                <img src={foodUrl} alt="Food" className="object-cover w-full h-[300PX]" />
            </div>
            <div className="flex flex-col justify-between p-6">
                <div>
                    <h1 className="text-xl font-bold text-gray-800">FoodName: {foodName}</h1>
                    <p className="mt-2 text-sm text-gray-600">Donator: {displayName ? displayName : "Unknown"}</p>
                    <p className="text-sm text-gray-600">{email && email}</p>
                    <p className="mt-2 text-sm text-gray-600">Food Quantity: {foodQuantity} servings</p>
                    <p className="text-sm text-gray-600">Pickup Location: {pickupLocation}</p>
                    <p className="text-sm text-gray-600">Expired Date/Time: {expiredDateTime}</p>
                    <p className="mt-2 text-sm text-gray-600">
                        Additional Notes: {additionalNotes && additionalNotes.length > 40 ? `${additionalNotes.substring(0, 40)}...` : additionalNotes}
                    </p>
                </div>
                <Link to={`/single-food-details/${_id}`} className="w-full text-center py-2 mt-4 font-semibold text-white uppercase bg-pink-500 border border-pink-500 rounded hover:bg-transparent hover:text-pink-500 transition duration-300">
                    View Detail
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoodCard;