import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { MainBannerImg } from './bannerAssets/main';
import styled from 'styled-components';


const MainBanner = () => {

  return (
    <Con>
      {" "}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
    //    spaceBetween={50}
        slidesPerView={1}   
        loop={true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
       // onSwiper={(swiper) => console.log(swiper)}
       // onSlideChange={() => console.log("slide change")}
        style={{ height: "auto" , width:"auto"}}
        className="swiper"
      >
        {MainBannerImg?.map((img, i) => {
          return (
            <SwiperSlide className='perSlide' key={i}>
              <img
                className="img"
                style={{ height: "auto", width: "100vw" }}
                src={img.images}
                alt=""
              />
            </SwiperSlide>
          //  <SwiperSlide>1</SwiperSlide>
          );
        })}
        
      </Swiper>
      
    
    </Con>
  );
}
const Con = styled.div`
  /* & .swiper {
    @media (max-width: 1024px) {
     // display: none;
      width: 100vw;
     
      & .swiper-pagination {
        display: none;
      }
    }

    & .img {
      object-fit: contain;
    }
  } */
  /* & .perSlide{
    height:500px;
  }
  .swiper {
    width: 100%;
    height: 100%;
  } */

  /* & .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

  
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  } */

  /* & .swiper-slide img.img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .swiper-pagination-bullet {
    background-color: var(--obanana-primary-color);
    height: 15px;
    width: 15px;
    animation: width-shrink 0.3s ease-in-out both;

    &.swiper-pagination-bullet-active {
      width: 25px;
      border-radius: 25px;
      animation: width-expand 0.3s ease-in-out both;
    }
  } */

  /* @keyframes width-expand {
    0% {
      -webkit-width: 15px;
      width: 15px;
    }
    50% {
      -webkit-width: 20px;
      width: 20px;
    }
    100% {
      -webkit-width: 25px;
      width: 25px;
    }
  }
  @keyframes width-shrink {
    0% {
      -webkit-width: 25px;
      width: 25px;
    }
    50% {
      -webkit-width: 20px;
      width: 20px;
    }
    100% {
      -webkit-width: 15px;
      width: 15px;
    }
  } */
`;

export default MainBanner