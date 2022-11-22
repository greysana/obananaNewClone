import React, { useState } from "react";
import styled from "styled-components";
import { product } from "./productsAssets/products";
import { FaBalanceScale } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import FeaturedBanner from "./banners/FeaturedBanner";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
const navs = [
  "Groceries & Merchandise",
  "Food & Beverages",
  "Construction Services",
  "Apparels",
  "Home & Living",
];

const BestSellers = () => {
  const [prodHover, setprodHover] = useState();
  return (
    <Con>
      <div className="header">
        <h1>Best Seller </h1>
        <div className="navLatest">
          {navs.map((nav, i) => {
            return <h6 key={i}>{nav}</h6>;
          })}
        </div>
      </div>
      <div className="contentCon">
        <div className="bannerCon">
          <FeaturedBanner />
        </div>
        <div className="productsCon">
          <div className="contentsCon">
            <Swiper
              modules={[Grid, Pagination]}
              slidesPerView={5}
              grid={{
                rows: 2,
              }}
              spaceBetween={30}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 576px
                1: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                  },
                },
                576: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                  },
                },
                992: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                  },
                },
                1299: {
                  slidesPerView: 4,
                  grid: {
                    rows: 2,
                  },
                  spaceBetween: 10,
                },
                1516: {
                  slidesPerView: 5,
                  grid: {
                    rows: 2,
                  },
                },
                1816: {
                  slidesPerView: 6,
                  grid: {
                    rows: 2,
                  },
                },
              }}
            >
              {product.map((prod, i) => {
                return (
                  <SwiperSlide className="perSlide">
                    <div
                      className="prodCard"
                      onMouseOver={() => {
                        setprodHover(i);
                      }}
                      onMouseLeave={() => {
                        setprodHover();
                      }}
                    >
                      <FiSearch
                        className={prodHover === i ? "search active" : "search"}
                      />
                      {prodHover === i && prod.img.length > 1 ? (
                        <img src={prod.img[1]} alt="" />
                      ) : (
                        <img src={prod.img[0]} alt="" />
                      )}
                      <div
                        className={
                          prodHover === i ? "details active" : "details"
                        }
                      >
                        <p>{prod.productName}</p>
                        <h4>₱{prod.price}.00</h4>

                        <FaBalanceScale
                          className={prodHover === i ? "icon active" : "icon"}
                        />
                      </div>
                    </div>{" "}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  //padding: 2rem 1rem;
  height: auto;
  & .header {
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
    & .navLatest {
      display: flex;
      flex-wrap: wrap;
      & h6 {
        margin: auto 0.4rem;
        font-size: 0.8rem;
        font-weight: 400;
        &:hover {
          cursor: pointer;
          color: var(--obanana-primary-color-hover);
        }
      }
    }
  }

  & .contentCon {
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    & .bannerCon {
      width: 30vw;
      max-width: 350px;
      margin: 0;
      @media (max-width: 768px) {
        width: 95vw;
        margin: auto;
        max-width: none;
      }
    }
    & .productsCon {
      // width: 75vw;
      height: auto;
      margin: 0 0rem;
      //margin-left: 3rem;
      @media (max-width: 768px) {
        width: 100vw;
        margin: 0;
      }
      & .contentsCon {
        // display: flex;
        /* flex-wrap: wrap;
    justify-content: center;
    align-items: center; */
        height: 600px;
        margin: 0;
        @media (max-width: 768px) {
          height: 650px;
        }
        & .mySwiper {
          height: 100%;
          width: 80vw;
          margin-top: 2rem;
          position: relative;
          z-index: 19;
          @media (max-width: 1816px) {
            width: 78vw;
          }
          @media (max-width: 1516px) {
            width: 75vw;
          }
          @media (max-width: 1420px) {
            width: 72vw;
          }
          @media (max-width: 1320px) {
            width: 70vw;
          }
          @media (max-width: 768px) {
            width: 90vw;
          }
          & .perSlide {
            height: calc((100% - 40px) / 2) !important;
            //  width: 90%;
            /* Center slide text vertically */
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
          }
        }
        & .prodCard {
          //width: 16%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          //  width: 250px;
          //overflow: hidden;
          margin: 0;
          @media (max-width: 992px) {
            width: 90%;
          }
          & img {
            cursor: pointer;
            height: 220px;
            width: 220px;
            margin: auto;
            position: relative;
            z-index: 20;
            @media (max-width: 768px) {
              width: 200px;
              height: auto;
            }
          }
          & .search {
            position: absolute;
            align-self: flex-end;
            top: 1rem;
            border-radius: 100%;
            box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
            padding: 0.5rem;
            background-color: #fff;
            visibility: hidden;
            z-index: 25;
            &.active {
              visibility: visible;
            }
          }
          & .details {
            padding: 10px;
            background-color: #fff;
            position: relative;
            z-index: 23;

            &.active {
              position: relative;
              animation: slide-up 0.5s ease-in-out both;
              top: -3rem;
              @keyframes slide-up {
                0% {
                  top: 0rem;
                }

                100% {
                  top: -2rem;
                }
              }
            }
            & p {
              font-size: 0.8rem;
              margin: 0 10px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            & h4 {
              color: red;
              margin: 0rem auto;
              margin-bottom: 0.5rem;
            }
            & .icon {
              color: var(--obanana-secondary-color);
              visibility: hidden;
              cursor: pointer;
              font-size: 1.3rem;
              height: 0;
              &.active {
                height: auto;
                visibility: visible;
                -webkit-animation: slide-in-left 0.3s
                  cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                animation: slide-in-left 0.5s
                  cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

                @keyframes slide-in-left {
                  0% {
                    -webkit-transform: translateX(-30px);
                    transform: translateX(-30px);
                    opacity: 0;
                  }
                  100% {
                    -webkit-transform: translateX(0);
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default BestSellers;
