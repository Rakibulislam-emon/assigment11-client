// import React from 'react';
import { useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import RequestModal from '../Components/RequestModal';

const SingleFoodDetails = () => {
    const [showModal,setShowModal]= useState(false)
    const foods = useLoaderData();
    const { foodName, foodUrl, donator, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, } = foods;
    const { displayName } = donator || {};
    console.log(donator)
    return (

            <div className="max-w-lg mt-10 mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="relative">
                    <img className="object-cover w-full h-64" src={foodUrl} alt="Food" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="p-8">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">{foodName}</h1>
                        <p className="text-sm text-gray-700">Donator: {displayName ? displayName : "Unknown"}</p>
                        {pickupLocation && <p className="text-sm text-gray-700">Location : {pickupLocation}</p>}
                    </div>
                    <div className="mb-6">
                        <p className="text-sm text-gray-700">Quantity: {foodQuantity} servings</p>
                        <p className="text-sm text-gray-700">Location: {pickupLocation}</p>
                        <p className="text-sm text-gray-700">Expired: {expiredDateTime}</p>
                    </div>
                    {additionalNotes && (
                        <p className="text-sm text-gray-700 mb-6">
                            Notes: {additionalNotes.length > 40 ? `${additionalNotes.substring(0, 40)}...` : additionalNotes}
                        </p>
                    )}
                    <button onClick={()=> setShowModal(true)} className="w-full block py-3 font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 border border-pink-500 rounded hover:bg-transparent hover:text-pink-500 transition duration-300 text-center">
                        Request
                    </button>
                    {showModal && <RequestModal foods={foods} onClose={()=> setShowModal(false)}/>}
                </div>
            </div>
        
    );
};

export default SingleFoodDetails;
