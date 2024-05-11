/* eslint-disable react/prop-types */

import { useState } from "react";

const RequestModal = ({ onClose,foods }) => {
    const { foodName, foodUrl, donator,  pickupLocation, expiredDateTime,_id } = foods;
    const { email } = donator || {};
    console.log(email)


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



    return (
        <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center" id="modal">
            <div role="alert" className="container mx-auto w-full md:w-3/4 lg:w-2/3 max-w-2xl">
                <div className="w-full p-12 bg-white rounded shadow-lg">
                    <h1 className="text-2xl font-semibold font-lato text-center mb-6">ADD YOUR FOOD HERE..</h1>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="foodName" className="block text-xs font-semibold text-gray-600 uppercase">Food Name</label>
                                <input id="foodName" type="text"  name="foodName" placeholder={foodName} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" readOnly />
                            </div>
                            <div>
                                <label htmlFor="foodImage" className="block text-xs font-semibold text-gray-600 uppercase">Food Image</label>
                                <img className="object-cover w-20 h-16" src={foodUrl} alt="Food" />
                            </div>
                            <div>
                                <label htmlFor="foodId" className="block text-xs font-semibold text-gray-600 uppercase">Food ID</label>
                                <input id="foodId" type="text" name="foodId" placeholder={_id} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" readOnly />
                            </div>
                            <div>
                                <label htmlFor="donatorEmail" className="block text-xs font-semibold text-gray-600 uppercase">Food Donator Email</label>
                                <input id="donatorEmail" type="text" name="donatorEmail" placeholder={email} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" readOnly />
                            </div>
                            <div>
                                <label htmlFor="donatorName" className="block text-xs font-semibold text-gray-600 uppercase">Food Donator Name</label>
                                <input id="donatorName" type="text" name="donatorName" placeholder="Enter food donator name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" readOnly />
                            </div>
                            <div>
                                <label htmlFor="userEmail" className="block text-xs font-semibold text-gray-600 uppercase">User Email</label>
                                <input id="userEmail" type="text" name="userEmail" placeholder="Enter user email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" readOnly />
                            </div>
                            <div>
                            <label htmlFor="requestDate" className="block text-xs font-semibold text-gray-600 uppercase">Request Date</label>
                            <input id="requestDate" type="text" name="requestDate" value={defaultDate} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" readOnly />
                        </div>
                            <div>
                                <label htmlFor="pickupLocation" className="block text-xs font-semibold text-gray-600 uppercase">Pickup Location</label>
                                <input id="pickupLocation" type="text" name="pickupLocation" placeholder={pickupLocation} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" readOnly />
                            </div>
                            <div>
                                <label htmlFor="expireDate" className="block text-xs font-semibold text-gray-600 uppercase">Expire Date</label>
                                <input id="expireDate" type="text" name="expireDate" placeholder={expiredDateTime} className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" readOnly />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="additionalNotes" className="block text-xs font-semibold text-gray-600 uppercase">Additional Notes</label>
                            <textarea id="additionalNotes" name="additionalNotes" rows="3" placeholder="Enter any additional notes..." className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"></textarea>
                        </div>
                        <div className="flex justify-around">
                            <button type="submit" className="w-52 py-3 font-medium tracking-widest text-white uppercase bg-green-400 shadow-lg focus:outline-none rounded-lg hover:shadow-none">
                                Request
                            </button>
                            <button onClick={onClose} type="submit" className="w-52 py-3 font-medium tracking-widest text-white rounded-lg uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                                Cancel
                            </button>
                        </div>
                    </form>
                  
                </div>
               
            </div>
        </div>
    );
};

export default RequestModal;
