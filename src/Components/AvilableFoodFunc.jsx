// // import axios from "axios";
// // import { useState } from "react";

// // const AvilableFoodFunc = () => {
// //     const [query, setQuery] = useState('');
// //     const [searchResults, setSearchResults] = useState([]);
// //     const [searched, setSearched] = useState(false);

// //     const handleSearch = async (searchQuery) => {
// //         try {
// //             const { data } = await axios.get(`http://localhost:5000/api/foods/search?foodName=${searchQuery}`);
// //             setSearchResults(data);
// //             setSearched(true);
// //         } catch (error) {
// //             alert(error.message);
// //         }
// //     };

// //     const handleChange = (e) => {
// //         setQuery(e.target.value);
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         handleSearch(query);
// //     };

// //     return (
// //         <div>
// //             <form onSubmit={handleSubmit} className="text-center my-8">
// //                 <input onChange={handleChange} value={query} className="w-80 h-8 border-4 border-black" type="text" name="" id="" />
// //                 <button type='submit'>Search</button>
// //             </form>
// //             {searched && searchResults.length === 0 && <p>No items found matching the search query.</p>}
// //             {searchResults.map((food) => (
// //                 <div key={food._id} className="max-w-md w-full h-[600px] mx-auto overflow-hidden bg-white rounded-lg shadow-md flex flex-col">
// //                     <div className="w-full h-3/5">
// //                         <img src={food.foodUrl} alt="Food" className="object-cover w-full h-full" />
// //                     </div>
// //                     <div className="flex flex-col justify-between p-6">
// //                         <div>
// //                             <h1 className="text-xl font-bold text-gray-800">FoodName: {food.foodName}</h1>
// //                             <p className="mt-2 text-sm text-gray-600">Donator: {food.displayName ? food.displayName : "Unknown"}</p>
// //                             <p className="text-sm text-gray-600">{food.email && food.email}</p>
// //                             <p className="mt-2 text-sm text-gray-600">Food Quantity: {food.foodQuantity} servings</p>
// //                             <p className="text-sm text-gray-600">Pickup Location: {food.pickupLocation}</p>
// //                             <p className="text-sm text-gray-600">Expired Date/Time: {food.expiredDateTime}</p>
// //                             <p className="mt-2 text-sm text-gray-600">
// //                                 Additional Notes: {food.additionalNotes && food.additionalNotes.length > 40 ? `${food.additionalNotes.substring(0, 40)}...` : food.additionalNotes}
// //                             </p>
// //                         </div>
// //                         <button className="w-full py-2 mt-4 font-semibold text-white uppercase bg-pink-500 border border-pink-500 rounded hover:bg-transparent hover:text-pink-500 transition duration-300">
// //                             View Detail
// //                         </button>
// //                     </div>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default AvilableFoodFunc;


// <div className="max-w-2xl mx-auto">

// <form  onSubmit={handleSubmit}>
//     <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
//     <div className="relative">
//         <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//             <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//         </div>
//         <input  onChange={handleChange} value={query} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
//         <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
//     </div>
// </form>

// <p className="mt-5">This search input component is part of a larger, open-source library of Tailwind CSS components. Learn
//     more
//     by going to the official <a className="text-blue-600 hover:underline"
//         href="#" target="_blank">Flowbite Documentation</a>.
// </p>
// </div>


// <form onSubmit={handleSubmit} className="text-center my-8">
//                     <input onChange={handleChange} value={query} className="w-80 h-8 border-4 border-black" type="text" name="" id="" />
//                     <button type='submit'>Search</button>
//                 </form>