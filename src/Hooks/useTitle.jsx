import { useEffect } from "react";


const useTitle = (title) => {
    return (
        useEffect(() =>{
            document.title =`FoodShareHub | ${title}`
        },[title])
    );
};

export default useTitle;