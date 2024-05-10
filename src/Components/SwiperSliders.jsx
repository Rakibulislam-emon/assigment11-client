
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const img1 = 'https://i.ibb.co/zfyzYyK/explore-world-through-delectable-culinary-diversity-128650-5519.jpg'
const img2 = 'https://i.ibb.co/ZY4M3HN/people-group-catering-buffet-food-indoor-restaurant-916191-57148.jpg'
const img3 = 'https://i.ibb.co/g7rNLrk/nutrientrich-revelry-944420-3689.jpg'
const text =<>
<p>Spread Joy <br /> Donate or Share the Love</p>
</>
const text2 = <>
  <p>Share a Meal, Share a Smile <br /> Join Our Food Share Hub</p>
</>
const text3 =<>
<p>Harvesting Hope <br /> Empower Others Through Food Generosity</p>
</>
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

const SwiperSliders = () => {
  return (
    <div>
       <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide image={img1} text={text}></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={img2} text={text2}></Slide>
          </SwiperSlide>
        <SwiperSlide>
          <Slide image={img3} text={text3}></Slide>
          </SwiperSlide>
        
      </Swiper>
    </div>
    </div>
  );
};

export default SwiperSliders;