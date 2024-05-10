import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className="bg-white"  style={{
            backgroundImage: `url('https://i.ibb.co/ysvh0CB/1-h-Fww-QAW45673-VGKr-MPE2q-Q.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment:'scroll',
            backgroundBlendMode: 'normal',
          }}>
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="w-full lg:w-full   ">
                   <div className="">
                   <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn t exist. </p>

                    <div className="flex items-center mt-6 gap-x-3">


                        <Link to={'/'} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                            Take me home
                        </Link>
                    </div>
                   </div>
                </div>

                
            </div>
        </section>

    );
};

export default ErrorPage;