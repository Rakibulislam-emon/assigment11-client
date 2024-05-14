import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Delete from "../Pages/Delete";
const ManageMyFood = () => {
    const {user} = useAuth()

    const [foods,setFoods]= useState([])
    useEffect(  () => {
        const getData = async () => {
            const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/posted-food/${user?.email}`,{withCredentials:true})
            setFoods(data)
        }
        getData()
    },[user?.email])
    console.log(foods)


    // update 
// delete
const [showModal,setShowModal]= useState(false)


   
    return (
        <section className='container px-4 mx-auto pt-12'>
        <div className='flex items-center gap-x-3'>
          <h2 className='text-lg font-medium text-gray-800 '>My Added Foods</h2>
  
          <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
            {foods.length} foods
          </span>
        </div>
  
        <div className='flex flex-col mt-6'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-lato font-extrabold text-left rtl:text-right text-gray-500'
                      >
                        <div className='flex items-center gap-x-3'>
                          <span>Food Name</span>
                        </div>
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-lato font-extrabold text-left rtl:text-right text-gray-500'
                      >
                        <span>Expire Date</span>
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-lato font-extrabold text-left rtl:text-right text-gray-500'
                      >
                        <button className='flex items-center gap-x-2'>
                          <span>Food Quantity</span>
                        </button>
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-lato font-extrabold text-left rtl:text-right text-gray-500'
                      >
                        Pickup Location
                      </th>
  
                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-lato font-extrabold text-left rtl:text-right text-gray-500'
                      >
                        Status
                      </th>
  
                      <th className='px-4 py-3.5 text-sm font-lato font-extrabold text-left rtl:text-right text-gray-500'>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  {
                    foods.map(food => <tbody key={food._id} className='bg-white divide-y divide-gray-200 '>
                    <tr>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                       {food.foodName}
                      </td>
                        {console.log(food)}
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {food.expiredDateTime}
                      </td>
  
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {food.foodQuantity}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          <p
                            className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                             text-xs'
                          >
                            {food.pickupLocation}
                          </p>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                        <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-green-100/60 text-green-500'>
                          <span className='h-1.5 w-1.5 rounded-full bg-green-500'></span>
                          <h2 className='text-sm font-normal '>{food.status}</h2>
                        </div>
                      </td>
                      <td className='px-4 py-4 flex space-x-8 text-sm whitespace-nowrap'>
                        <button 
                         onClick={()=> setShowModal(true)}
                          title='Delete'
                          className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed'
                        >
                           {showModal && <Delete foods={foods} onClose={()=> setShowModal(false)}/>}
                          <MdDelete className="size-6"/>
                        </button>
                        <Link  to={`/update-foods/${food._id}`}
                        
                         
                          title='Edit'
                          className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed'
                        >
                         <TbEdit className="size-6"/>
                        </Link >
                          
                      </td>
                    </tr>
                  </tbody>)
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ManageMyFood;