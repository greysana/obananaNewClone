import React, { useState } from 'react'
import styled from 'styled-components'
import { product } from './productsAssets/products'
import {
  FaBalanceScale,
 
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
const  navs = ["Groceries & Merchandise",
"Food & Beverages",
"Construction Services",
"Apparels",
"Home & Living"]

const LatesProduct = () => {
  const [prodHover, setprodHover] = useState()
  return (
    <Con><div className="header">
      <h1>Latest product For You</h1>
      <div className="navLatest">
        {navs.map((nav,i)=>{
          return (
            <h6 key={i}>{nav}</h6>
          )
        })}
      </div>
      </div>
      <div className="contentsCon">
        {
          product.map((prod,i)=>{
            return (
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
                {prodHover === i && prod.img.length>1? (
                  <img src={prod.img[1]} alt="" />
                ) : (
                  <img src={prod.img[0]} alt="" />
                )}
                <div className={prodHover === i ? "details active" : "details"}>
                  <p>{prod.productName}</p>
                  <h4>₱{prod.price}.00</h4>
                 
                    <FaBalanceScale
                      className={prodHover === i ? "icon active" : "icon"}
                    />
                 
                </div>
              </div>
            );
          })
        }
      </div>
      
      </Con>
  )
}
const Con = styled.div`
 // padding: 2rem 1rem;
  height: auto;
  & .header {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: auto;
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
  & .contentsCon {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 95vw;
    margin: auto;
    & .prodCard {
      width: 16%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      @media (max-width: 1200px) {
        width: 22%;
      }
      @media (max-width: 992px) {
        width: 42%;
      }
      & img {
        width: 100%;
        -webkit-animation: opacity-low 0.5s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: opacity-low 0.3s cubic-bezier(0.95, 0.59, 0.07, 0.94) both
          ease-in-out;
        cursor: pointer;
        @keyframes opacity-low {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      }
      & .search {
        position: relative;
        align-self: flex-end;
        top: 1rem;
        border-radius: 100%;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
        padding: 0.5rem;
        visibility: hidden;
        background-color: #fff;
        z-index: 26;
        &.active {
          visibility: visible;
        }
      }
      & .details {
        padding: 1rem;
        background-color: #fff;
        //animation: slide-down 4s ease-in-out;
        &.active {
          position: relative;

          animation: slide-up 0.5s ease-in-out both;

          top: -2rem;
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
            animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              both;

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
`;
export default LatesProduct