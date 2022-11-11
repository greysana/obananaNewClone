import React from 'react'
import styled from 'styled-components'

import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList, AiFillThunderbolt } from "react-icons/ai";
import { TfiAngleDown } from "react-icons/tfi";

import { FaBalanceScale, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import saleIcon from "../../assets/saleIcon.svg"

const navs = [
  {
    name: "Home",
  },
  {
    name: "Sell On Obanana",
  },
  {
    name: "Feedback",
  },
  {
    name: "FAQs",
  },
  {
    name: "My Account",
  },
];

const MainNav = () => {
  return (
    <Con>
      <div className="conWrap">
        <div className="imgWrap">
          <img
            src="https://obanana.com/wp-content/uploads/2022/03/new-logo.png"
            alt=""
          />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            //value={"name"}
            // onChange={(e) => setName(e.target.value)}
          />
          <FiSearch className="icon" />
        </div>
        <div className="right">
          <div className="contact">
            <IoCallOutline className="phone" />
            <div className="cont">
              <h1>
                Live Chat <span>or dial:</span>
              </h1>
              <p>+63 917 722 6002</p>
            </div>
          </div>
          <div className="notif">
            <span>
              <FaBalanceScale className="icon" /> Compare
            </span>
            <span>
              <FaRegHeart className="icon" /> Wishlist
            </span>
          </div>
          <div className="cart">
            <p>₱0.00</p>
            <FaShoppingCart className="icon" />
          </div>
        </div>
      </div>
      <div className="navCon">
        <div className="categories">
          <AiOutlineUnorderedList className="list" />{" "}
          <p>
            Our Categories{" "}
            <span>
              <TfiAngleDown className="down" />
            </span>
          </p>
        </div>
        <div className="navLinks">
          {navs.map((link, index) => (
            <div key={index} className="navLink">
              {link.name}
            </div>
          ))}
        </div>
        <div className="right">
          <AiFillThunderbolt />
       <img src={saleIcon} alt="" />
        </div>
      </div>
    </Con>
  );
}

    const Con = styled.div`
      display: flex;
      flex-direction: column;
      // justify-content: space-around;
      padding: 22px 0px 10px 0px;
      width: 100vw;
      // justify-content: space-between;
      & .conWrap {
        display: flex;
        align-content: center;
        align-items: center;
        padding: 10px;
        width: 100%;
        justify-content: center;
        & .imgWrap {
          width: 15%;
          & img {
            //  margin-top: 2rem;
            width: 144px;
            margin: auto;
            display: block;
          }
        }

        & .search {
          position: relative;
          display: inline-flex;
          margin: auto 1.2rem;
          height: 47px;
          width: 57%;
          position: relative;
          background-color: transparent;
          // box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
          padding: 0 1rem 0 1rem;
          font-family: inherit;
          border-radius: 15px;
          //  margin-top: 1rem;
          border-radius: 5px;
          border: 2px solid #ec7a5c;

          & .icon {
            margin: auto;
            margin-left: 0.5rem;
          }
          input {
            width: 90%;
            padding: 10px;
            //margin: 0;
            //  flex: 1;
            // min-width: 40px;
            font-size: 1.2rem;
            display: block;
            font-family: monospace;
            font-size: 14px;
            transition: all 0.3s ease-in-out;
            background-color: transparent;
            border: none;
          }
          input:focus {
            outline: none;
            width: 80%;
            transition: all 0.3s ease-in-out;
          }
        }
        & .right {
          display: inline-flex;
          position: relative;
          // right: 0;
          width: 33%;
          justify-content: flex-end;
          margin-right: 1rem;
          padding: 1rem;

          & .contact {
            display: inline-flex;
            height: 47px;
            & .phone {
              margin: auto;
              font-size: 30px;
            }
            & .cont {
              margin-left: 0.6rem;
              & h1 {
                font-size: 0.9rem;
                font-weight: 100;
                // margin: 1rem auto;
                & span {
                  color: var(--obanana-light-color);
                }
              }
              & p {
                font-size: 1rem;
                font-weight: 800;
                position: relative;
                top: -18px;
              }
            }
          }
          & .notif {
            display: flex;
            height: 47px;
            margin: auto 1rem;
            border-right: 1px solid var(--obanana-light-color);
            border-left: 1px solid var(--obanana-light-color);
            padding: 0rem;
            & span {
              display: flex;
              flex-direction: column;
              font-size: 13px;
              font-weight: 100;
              color: var(--obanana-secondary-color);
              margin: auto 1rem;
              position: relative;
              top: 5px;

              & .icon {
                font-size: 30px;
                position: relative;
                left: 0.6rem;
              }
            }
          }
          & .cart {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            & p {
              font-size: 1rem;
              font-weight: 600;
              color: #ff0000;
            }
            & .icon {
              color: var(--obanana-secondary-color);
              font-size: 30px;
              margin-left: 0.3rem;
            }
          }
        }
      }
      & .navCon {
        display: flex;
        align-items: center;
        letter-spacing: 0.1px;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
        color: var(--obanana-dark-color);
        & .categories {
          display: flex;
          & .list {
            margin: auto 0.5rem;
            font-size: 20px;
          }
          & .down {
            font-size: 10px;
          }
        }
        & .navLinks {
          display: inline-flex;
          margin: auto 1rem;
          margin-left: 5rem;
          & .navLink {
            margin: auto 1rem;
            text-transform: capitalize;
          }
        }
      }
      & .right{
        & img{
            width: 30px;
            height: 50px;
            transform: rotateX('180');
        }
      }
    `;
export default MainNav