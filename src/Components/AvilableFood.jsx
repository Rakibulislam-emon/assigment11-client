import  { useState, useEffect } from 'react';
import axios from 'axios';
import AddedFoodsCard from './AddedFoodsCard';
import useTitle from '../Hooks/useTitle';
import { motion } from 'framer-motion';

const AvilableFood = () => {
    useTitle('Available foods');

    const [foods, setFoods] = useState([]);
    const [query, setQuery] = useState('');
    const [searched, setSearched] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');
    const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true);

    useEffect(() => {
        fetchFoods();
    }, []);

    useEffect(() => {
        if (searched) {
            handleSearch(query);
        } else {
            fetchFoods();
        }
    }, [query, searched]);

    const fetchFoods = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
            const availableFoods = response.data.filter(food => food.status === 'available');
            setFoods(availableFoods);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = async (searchQuery) => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/foods/search?foodName=${searchQuery}`);
            setFoods(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearched(true);
    };

    const handleSortChange = async (e) => {
        setSortOrder(e.target.value);
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/sortedFoods?order=${e.target.value}`);
            setFoods(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const toggleLayout = () => {
        setIsThreeColumnLayout(prevState => !prevState);
    };

    return (
        <div className=''>
            <div>
                <div className="mb-20 mt-20  ">
                    <div className='flex justify-center'>
                        <form className=' w-[800px]' onSubmit={handleSubmit}>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input onChange={handleChange} value={query} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Foods..." required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="SortingSection flex items-center space-x-4"
        >
            <label htmlFor="category" className="text-gray-700">Sort By:</label>
            <motion.select
                name="category"
                id="category"
                className="border p-4 rounded-md"
                onChange={handleSortChange}
                value={sortOrder}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <option value="asc">Ascending Order</option>
                <option value="dsc">Descending Order</option>
            </motion.select>
        </motion.div>
                        <button className="ml-4    hover:text-gray-900 py-2.5 px-6 text-sm rounded-lg bg-gradient-to-r from-violet-600 to-pink-300 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gradient-to-tr" onClick={toggleLayout}>
                            {isThreeColumnLayout ? 'Switch to Two Columns' : 'Switch to Three Columns'}
                        </button>
                    </div>
                </div>
                {searched && foods.length === 0 && <p>No items found matching the search query.</p>}
            </div>
            <div className={`grid ${isThreeColumnLayout ? 'grid-cols-3' : 'grid-cols-2'} gap-10 mx-10`}>
                {/* Render food items */}
                {foods.map(food => <AddedFoodsCard food={food} key={food._id}></AddedFoodsCard>)}
            </div>
        </div>
    );
};

export default AvilableFood;
