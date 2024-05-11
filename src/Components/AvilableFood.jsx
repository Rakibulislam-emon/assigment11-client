import { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import AddedFoodsCard from './AddedFoodsCard';


const AvilableFood = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/foods`) // Axios GET request
            .then(response => {
                setFoods(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
   
   
    return (
        <div className=''>
            <h1>{foods.length}</h1>
           <div className='grid grid-cols-3 gap-10 mx-10  '>
           {
                foods.map(food => <AddedFoodsCard food={food} key={food._id}></AddedFoodsCard> )
            }
           </div>
        </div>
    );
};

export default AvilableFood;