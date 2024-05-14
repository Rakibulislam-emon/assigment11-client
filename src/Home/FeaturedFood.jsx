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
       <div  >
        <h1 className="text-center text-6xl font-lato mt-8">Explore Our Featured Foods</h1>
        <div className='grid grid-cols-3 gap-10 mt-20 mx-10'>

            {
                foods.map(food => <FeaturedFoodCard food={food} key={food._id}></FeaturedFoodCard>)
            }
        </div>
       </div>
    );
};

export default FeaturedFood;