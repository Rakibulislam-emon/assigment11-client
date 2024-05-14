import SwiperSliders from "../Components/SwiperSliders";
import useTitle from "../Hooks/useTitle";
import AboutUs from "./AboutUs";
import Faq from "./Faq";
import FeaturedFood from "./FeaturedFood";
import Testimonials from "./Testimonias";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <SwiperSliders></SwiperSliders>
            <FeaturedFood/>
            <Faq/>
            <Testimonials/>
            <AboutUs/>
        </div>
    );
};

export default Home;