import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useTitle from "../Hooks/useTitle";
import { Link } from "react-router-dom";

const MyFoodRequest = () => {
    useTitle("My Food Requests");
    const { user  } = useAuth();
    const [foodRequests, setFoodRequests] = useState([]);
    // const [loading, setLoading] = useState(true); // State to track loading status
    const userEmail = user?.email;

    useEffect(() => {
        const fetchFoodRequests = async () => {
            // if(!user){
            //     return
            // }
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/foodRequests?userEmail=${userEmail}`, { withCredentials: true });
                setFoodRequests(response.data);
            } catch (error) {
                console.error('Error fetching food requests:', error);
            } 
        };

        fetchFoodRequests();
    }, [user, userEmail]);

    // Show loading spinner while data is being fetched
    // if (loading) {
    //     return <div className="spinner-border text-primary" role="status">
    //             <span className=" size-20">Loading...</span>
    
    //     </div>; // You can replace this with your preferred loading spinner component
    // }

    return (
        <div className="grid grid-cols-3 mt-10">
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
                        <Link to={`/single-food-details/${food._id}`} className="w-full text-center py-2 mt-4 font-semibold text-white uppercase bg-pink-500 border border-pink-500 rounded hover:bg-transparent hover:text-pink-500 transition duration-300">
                            View Detail
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyFoodRequest;
