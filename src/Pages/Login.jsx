
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
    const { signIn, signInWithGoogle } = useAuth();
    const { register, handleSubmit } = useForm();

    const handleSignIn = async (data) => {
        try {
            // User Login
            const result = await signIn(data.email, data.password);
            // Assuming signIn returns the user data upon successful authentication
            const { data: jwtData } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: result?.user?.email }, { withCredentials: true });
            console.log(jwtData);
            toast.success('Signin Successful');
             // Show success toast
             navigate('/')
            // Navigate to home page or redirect to previous page
        } catch (err) {
            console.error(err);
            toast.error('Email/Password Signin Failed'); // Show error toast
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle();
            // Assuming signInWithGoogle returns the user data upon successful authentication
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: result?.user?.email }, { withCredentials: true });
            console.log(data);
            toast.success('Signin Successful'); // Show success toast
            navigate('/')
            // Navigate to home page or redirect to previous page
        } catch (err) {
            console.error(err);
            toast.error('Google Signin Failed'); // Show error toast
        }
    };

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url('https://i.ibb.co/fx1Hm2X/realistic-style-technology-particle-background-23-2148426704.jpg')`,
                    }}
                ></div>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-7 sm:h-8'
                            src='https://merakiui.com/images/logo.svg'
                            alt=''
                        />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>Welcome back!</p>

                    <div onClick={handleGoogleSignIn} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 '>
                        <div className='px-4 py-2'>
                            <svg className='w-6 h-6' viewBox='0 0 40 40'>
                                {/* Google icon SVG */}
                            </svg>
                        </div>

                        <span className='w-5/6 px-4 py-3 font-bold text-center'>Sign in with Google</span>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase hover:underline'>
                            or login with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>

                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <div className='mt-4'>
                            <label htmlFor='LoggingEmailAddress' className='block mb-2 text-sm font-medium text-gray-600'>Email Address</label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                {...register('email', { required: true })}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label htmlFor='loggingPassword' className='block mb-2 text-sm font-medium text-gray-600'>Password</label>
                            </div>

                            <input
                                id='loggingPassword'
                                autoComplete='current-password'
                                {...register('password', { required: true })}
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                        </div>

                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b md:w-1/4'></span>

                        <Link to='/register' className='text-xs text-gray-500 uppercase hover:underline'>or sign up</Link>

                        <span className='w-1/5 border-b md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
