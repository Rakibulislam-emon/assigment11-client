import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layouts/Main'
import Registration from '../Pages/Registration';
import Login from '../Pages/Login';
import AvilableFood from '../Components/AvilableFood';
import AddFood from '../Components/AddFood';
import ManageMyFood from '../Components/ManageMyFood';
import MyFoodRequest from '../Components/MyFoodRequest';
import Home from '../Home/Home';
import ErrorPage from '../Components/ErrorPage';
import SingleFoodDetails from '../Pages/SingleFoodDetails';
import UpdateMyFoodRequest from '../Pages/UpdateMyFoodRequest';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:'/register',
                element:<Registration/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/available-food",
                element:<AvilableFood/>,
                
            },
            {
                path:"/add-food",
                element:<AddFood/>
            },
            {
                path:"/manage-my-food",
                element:<ManageMyFood/>
            },
            {
                path:"/my-food-Request",
                element:<MyFoodRequest/>
            },
            {
                path:'/single-food-details/:id',
                element:<SingleFoodDetails/>,
                loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/api/foods/${params.id}`)
            },
            {
                path: '/update-foods/:id',
                element: <UpdateMyFoodRequest/>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/update-food/${params.id}`)
            }
        ]
    }
])

export default router;