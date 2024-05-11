import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";


const FeaturedFood = () => {
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
       <div  className='grid grid-cols-3 gap-10 mx-10'>
            {
                foods.map(food => <FeaturedFoodCard food={food} key={food._id}></FeaturedFoodCard>)
            }
       </div>
    );
};

export default FeaturedFood;