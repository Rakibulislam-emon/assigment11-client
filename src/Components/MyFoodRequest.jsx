import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

const MyFoodRequest = () => {
    const { user } = useAuth();
    const [foodRequests, setFoodRequests] = useState([]);
    const userEmail = user?.email;

    useEffect(() => {
        const fetchFoodRequests = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/foodRequests?userEmail=${userEmail}`);
                setFoodRequests(response.data);
            } catch (error) {
                console.error('Error fetching food requests:', error);
            }
        };

        fetchFoodRequests();
    }, [userEmail]);

    console.log(foodRequests); 
    
    return (
        <div className="grid grid-cols-3">
            
            {foodRequests.map(food => (
                
                <div key={food._id} className="max-w-md w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md flex flex-col">
                    <div className="w-full h-3/5">
                        <img src={food.foodUrl} alt="Food" className="object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col justify-between p-6">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Food Name: {food.foodName}</h1>
                            <p className="mt-2 text-sm text-gray-600">Donor: {food.donator.displayName ?  food.donator.displayName : "Unknown"}</p>
                            <p className="text-sm text-gray-600">Email: {food.donator.email}</p>
                            <p className="text-sm text-gray-600">Pickup Location: {food.pickupLocation}</p>
                            <p className="text-sm text-gray-600">Expire Date: {food.expiredDate}</p>
                            <p className="text-sm text-gray-600">Request Date: {food.requestDate}</p>
                            {food.donationAmount && <p className="text-sm text-gray-600">Your Donation Amount: {food.donationAmount}</p>}
                        </div>
                        <button className="w-full py-2 mt-4 font-semibold text-white uppercase bg-pink-500 border border-pink-500 rounded hover:bg-transparent hover:text-pink-500 transition duration-300">
                            View Detail
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyFoodRequest;
