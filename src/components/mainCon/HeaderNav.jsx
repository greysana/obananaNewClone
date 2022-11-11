import React from 'react'
import styled from 'styled-components'
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineExclamationCircle, AiOutlineUser } from "react-icons/ai";

const HeaderNav = () => {
  return (
    <Con>
      <div className="left">
        <span>
          <a href="#">
            <CiLocationOn className="icon" />
            Find Obanana Store
          </a>
        </span>
        <span>
          <a href="#">
            <AiOutlineExclamationCircle className="icon" />
            Free Standard Shipping
          </a>
        </span>
      </div>
      <div className="right">
        <a href="#">Order Tracking</a>
        <a href="#">New & Updates</a>
        <a href="#">Help Center</a>
        <a href="#">
          <AiOutlineUser className="icon" />
          Sign in / Register
        </a>
      </div>
    </Con>
  );
}
const Con = styled.div`
  display: flex;
  justify-content: space-between;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #eeeeee;
  padding: .8rem 0px 7px 0px;
  & .left{
    margin-left: 1rem;
  }
  & a {
    text-decoration: none;
    display: inline-flex;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.275px;
    padding: 0px 30px 0px 0px;
    color: var(--obanana-secondary-color);
    cursor: pointer;
    font-weight: 400;
    letter-spacing: -0.275px;
    & .icon{
       // margin: auto;
            font-size: 16px;
    margin: 0px 4px 0px 0px;
}
    }
      //  transition: background 0.3s, border 0.3s, border-radius 0.3s,
    
  
  & .left {
    display: inline-flex;
    & h1 {
    }
  }
`;

export default HeaderNav