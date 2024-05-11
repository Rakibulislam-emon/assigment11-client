/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const AddedFoodsCard = ({ food }) => {
    const { foodName, foodUrl, donator, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, _id } = food;
    const { displayName, email, photoURL } = donator || {};

    return (
        <div className="max-w-sm w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <div className="relative">
                <img className="object-cover w-full h-48" src={foodUrl} alt="Food" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
            </div>
            <div className="p-6">
                <div className="flex items-center mb-4">
                    {photoURL ? (
                        <img className="w-12 h-12 rounded-full mr-4" src={photoURL} alt="Donator" />
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    )}
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2">{foodName}</h1>
                        <p className="text-sm text-gray-700">Donator: {displayName ? displayName : "Unknown"}</p>
                        {email && <p className="text-sm text-gray-700">{email}</p>}
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-sm text-gray-700">Quantity: {foodQuantity} servings</p>
                    <p className="text-sm text-gray-700">Location: {pickupLocation}</p>
                    <p className="text-sm text-gray-700">Expired: {expiredDateTime}</p>
                </div>
                {additionalNotes && (
                    <p className="text-sm text-gray-700 mb-4">
                        Notes: {additionalNotes.length > 40 ? `${additionalNotes.substring(0, 40)}...` : additionalNotes}
                    </p>
                )}
                <Link to={`/single-food-details/${_id}`} className="w-full block text-center py-2 font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 border border-pink-500 rounded hover:bg-transparent hover:text-pink-500 transition duration-300">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default AddedFoodsCard;
