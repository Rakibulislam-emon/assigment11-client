/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RequestModal = ({ onClose, foods }) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { foodName, foodUrl, donator, pickupLocation, expiredDateTime, _id } = foods;
    const { email } = donator || {};
 
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        // Add leading zero if month or day is single-digit
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;

        return `${year}-${month}-${day}`;
    };

    const [defaultDate, setDefaultDate] = useState(getTodayDate());

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const requestedDate = form.requestDate.value;
        const userEmail = user?.email;
        const additionalNotes = form.additionalNotes.value;
        const status = 'requested';
    
        try {
            if (user?.email === email) {
                return toast.error('Donator cannot request their own food');
            }
    
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/foods/${_id}`, {
                userEmail,
                _id,
                email,
                requestedDate,
                status,
                additionalNotes
            });
    
            console.log(data);
            navigate('/available-food');
            toast.success("Your request has been sent");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-700 bg-opacity-50 fixed top-0 right-0 bottom-0 left-0">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Request Food</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="foodName" className="block text-sm font-semibold text-gray-600 uppercase">Food Name</label>
                            <input id="foodName" type="text" name="foodName" value={foodName} className="w-full p-3 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400" readOnly />
                        </div>
                        <div>
                            <label htmlFor="foodImage" className="block text-sm font-semibold text-gray-600 uppercase">Food Image</label>
                            <img className="w-20 h-16 object-cover mt-2 rounded-md" src={foodUrl} alt="Food" />
                        </div>
                        <div>
                            <label htmlFor="pickupLocation" className="block text-sm font-semibold text-gray-600 uppercase">Pickup Location</label>
                            <input id="pickupLocation" type="text" name="pickupLocation" value={pickupLocation} className="w-full p-3 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400" readOnly />
                        </div>
                        <div>
                            <label htmlFor="expireDate" className="block text-sm font-semibold text-gray-600 uppercase">Expire Date</label>
                            <input id="expireDate" type="text" name="expireDate" value={expiredDateTime} className="w-full p-3 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400" readOnly />
                        </div>
                        <div>
                            <label htmlFor="requestDate" className="block text-sm font-semibold text-gray-600 uppercase">Request Date</label>
                            <input id="requestDate" type="text" name="requestDate" value={defaultDate} className="w-full p-3 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400" readOnly />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-600 uppercase">Additional Notes</label>
                        <textarea id="additionalNotes" name="additionalNotes" rows="3" placeholder="Enter any additional notes..." className="w-full p-3 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"></textarea>
                    </div>
                    <div className="flex justify-around">
                        <button type="submit" className="w-52 py-3 font-semibold text-white uppercase bg-green-400 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-400">
                            Request
                        </button>
                        <button onClick={onClose} type="button" className="w-52 py-3 font-semibold text-white uppercase bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-400">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RequestModal;
