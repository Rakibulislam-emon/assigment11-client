import logo from '../assets/images/images.png';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();

    // className={({ isActive }) => isActive ? 'btn btn-ghost border-green-400 text-green-400' : 'btn w-32 btn-ghost'}

  
    return (
        <div className='navbar shadow-lg bg-black  px-4 w-screen transition-colors duration-300'>
            <div className='flex items-center justify-center '>
                <Link to='/' className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <span className='font-bold text-3xl text-white'>FoodShareHub</span>
                </Link>
            </div>
            <div className='flex items-center justify-center flex-1'>
                <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost border-green-400 text-green-400' : 'btn w-32 btn-ghost text-white'} to='/'>Home</NavLink>
                <NavLink  className={({ isActive }) => isActive ? 'btn btn-ghost border-green-400 text-green-400' : 'btn w-32 btn-ghost text-white'} to='/available-food'>Available Food</NavLink>
                <NavLink  className={({ isActive }) => isActive ? 'btn btn-ghost border-green-400 text-green-400' : 'btn w-32 btn-ghost text-white'} to='/add-food'>Add Food</NavLink>
                <NavLink  className={({ isActive }) => isActive ? 'btn btn-ghost border-green-400 text-green-400' : 'btn w-32 btn-ghost text-white'} to='/manage-my-food'>Manage My Foods</NavLink>
                <NavLink  className={({ isActive }) => isActive ? 'btn btn-ghost border-green-400 text-green-400' : 'btn w-32 btn-ghost text-white'} to='/my-food-Request'>My Food Request</NavLink>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <h1 className='text-white'>{user?.displayName}</h1>
                    {!user && (
                        <li>
                            <Link className='btn btn-outline  text-white transition-colors duration-300' to='/login'>Login</Link>
                        </li>
                    )}
                </ul>

                {user && (
                    <div className='dropdown dropdown-end z-50'>
                        <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
                            
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                
                                <img referrerPolicy='no-referrer' alt='User Profile Photo' src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>

                            <li className='mt-2'>
                                <button onClick={logOut} className='bg-gray-200 block text-center transition-colors duration-300'>Logout</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
