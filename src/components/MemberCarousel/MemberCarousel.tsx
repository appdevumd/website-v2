import { Swiper, SwiperSlide } from 'swiper/react';
import { Paper} from '@mui/material';
import { EffectCoverflow, Navigation, Pagination, Autoplay} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './styles.css';

import member_image_1 from './MemberImages/pexels-chloe-1043474.jpg'
import member_image_2 from './MemberImages/pexels-creation-hill-1681010.jpg'
import member_image_3 from './MemberImages/pexels-daniel-xavier-1239291.jpg'
import member_image_4 from './MemberImages/pexels-moose-photos-1587009.jpg'
import member_image_5 from './MemberImages/pexels-stefan-stefancik-91227.jpg'
import member_image_6 from './MemberImages/pexels-clem-onojeghuo-375880.jpg'


function MemberCarousel(){
    return (
    <Paper
        sx={{
          borderRadius: "35px",
          padding: "30px",
          display: "flex",
          gap: "15px",
          color: "#000000",
          bgcolor: "#ffffff",
          width: "100%",
          height: "100%",
        }}
      >
        <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect='coverflow'
            centeredSlides = {true}
            loop = {true}
            slidesPerView= {'auto'}
            spaceBetween={0}
            coverflowEffect={{
                rotate:0,
                stretch:0,
                depth:200,
                modifier:1,
            } 
            }
            autoplay = {{
                delay: 2000,
                disableOnInteraction: false,

            }}
            
            >
            <SwiperSlide><img src={member_image_1} alt = "member_image" /></SwiperSlide>
            <SwiperSlide><img src={member_image_2} alt = "member_image" /></SwiperSlide>
            <SwiperSlide><img src={member_image_3} alt = "member_image" /></SwiperSlide>
            <SwiperSlide><img src={member_image_4} alt = "member_image" /></SwiperSlide>
            <SwiperSlide><img src={member_image_5} alt = "member_image" /></SwiperSlide>
            <SwiperSlide><img src={member_image_6} alt = "member_image" /></SwiperSlide>
        </Swiper>
    </Paper>
    );
};




export default MemberCarousel;

