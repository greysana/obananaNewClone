import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineUnorderedList,
  AiFillThunderbolt,
  AiOutlineTag,
} from "react-icons/ai";
import { TfiAngleDown } from "react-icons/tfi";

import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

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
const categories = [
  {
    catName: "Apparels & Clothings",
    subCategory: [
      {
        subName: "Men",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
      {
        subName: "Women",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
    ],
  },
  {
    catName: "Gadgets & Electronics",
    subCategory: [
      {
        subName: "Men",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
      {
        subName: "Women",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
    ],
  },
  {
    catName: "Foods & Beverages",
    subCategory: [
      {
        subName: "Men",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
      {
        subName: "Women",
        subLinks: [
          {
            name: "Clothing",
          },
          {
            name: "Under Clothes",
          },
          {
            name: "Footwear",
          },
        ],
      },
    ],
  },
];

const SideNav = () => {
    const [activeTab, setactiveTab] = useState("home")
  const [active, setActive] = useState("Home");
  const [activeCategory, setActiveCategory] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState("");
  
  const [activeSubLinks, setActiveSubLinks] = useState("");
  return (
    <Con>
      {" "}
      <div className="navCon">
        <div className="left">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              //value={"name"}
              // onChange={(e) => setName(e.target.value)}
            />
            <FiSearch className="icon" />
          </div>
          <div className="tabWrap">
            <div
              className={activeTab === "home" ? "tab active" : "tab"}
              onClick={() => {
                setactiveTab("home");
              }}
            >
              Main Menu
            </div>
            <div
              className={activeTab === "categories" ? "tab active" : "tab"}
              onClick={() => {
                setactiveTab("categories");
              }}
            >
              Categories
            </div>
          </div>
          <div className="catCon">
            <div
              className={
                activeTab=== "categories" ? "categories active" : "categories"
              }
            >
            
                <div
                  className={activeCategory === true ? "popUp active" : "popUp"}
                  onMouseLeave={() => {
                    setActiveCategory(false);
                  }}
                >
                  <div className="nestPop">
                    {categories.map((cat, i) => {
                      return (
                        <div className="nestWrap">
                          <div className="nestLinks">
                            <span
                              className={
                                activeSubCategory === cat.catName
                                  ? "active"
                                  : ""
                              }
                            >
                              <p>{cat.catName}</p>
                              {activeSubCategory === cat.catName ? (
                                <FaAngleDown
                                  className="icon"
                                  onClick={() => {
                                    setActiveSubCategory("");
                                  }}
                                />
                              ) : (
                                <FaAngleRight
                                  className={
                                    activeSubCategory === cat.catName
                                      ? "icon active"
                                      : "icon"
                                  }
                                  onClick={() => {
                                    if (activeSubCategory !== cat.catName) {
                                      setActiveSubCategory(cat.catName);
                                    } else {
                                      setActiveSubCategory("");
                                    }
                                  }}
                                />
                              )}
                            </span>
                          </div>
                          <div
                            className={
                              activeSubCategory === cat.catName &&
                              activeTab === "categories"
                                ? "linksWrap active"
                                : "linksWrap"
                            }
                          >
                            {cat?.subCategory?.map((sub, i) => {
                              return (
                                <div className="links">
                                  <span>
                                    <h1>{sub.subName} </h1>
                                    {activeSubLinks === sub.subName ? (
                                      <FaAngleDown
                                        onClick={() => {
                                          setActiveSubLinks("");
                                        }}
                                      />
                                    ) : (
                                      <FaAngleRight
                                        className={
                                          activeSubCategory === sub.subName
                                            ? "icon active"
                                            : "icon"
                                        }
                                        onClick={() => {
                                          if (activeSubLinks !== sub.subName) {
                                            setActiveSubLinks(sub.subName);
                                          } else {
                                            setActiveSubLinks("");
                                          }
                                        }}
                                      />
                                    )}
                                  </span>

                                  <ul
                                    className={
                                      activeSubLinks === sub.subName
                                        ? "active"
                                        : ""
                                    }
                                  >
                                    {sub?.subLinks?.map((subL, i) => {
                                      return <li>{subL.name}</li>;
                                    })}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
             
            </div>
          </div>
          <div
            className={activeTab === "home" ? "navLinks active" : "navLinks"}
          >
            {navs.map((link, index) => (
              <div
                key={index}
                className={active === link.name ? "navLink active" : "navLink"}
                onClick={() => {
                  setActive(link.name);
                }}
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <span>
            <AiFillThunderbolt className="icon" />
            <h1>Flash Sales</h1>
          </span>
          <span>
            <AiOutlineTag className="icon" />
            <h1>Special Offers</h1>
          </span>
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  width: 350px;
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  /* & .navCon {
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    text-transform: uppercase;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
    width: 100vw;
    color: var(--obanana-dark-color);

    & .left {
      margin-left: 1rem;
      display: flex;
      align-items: center;
      & .categories {
        display: flex;
        cursor: pointer;
        &.active {
          color: var(--obanana-primary-color-hover);
        }
        & .list {
          margin: auto 0.5rem;
          font-size: 20px;
        }
        & .down {
          font-size: 10px;
        }
        & .popUp {
          position: absolute;
          padding: 1rem;
          visibility: hidden;
          &.active {
            visibility: visible;
          }
          & .nestPop {
            //padding: 1rem;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            background-color: var(--obanana-site-bg-color);
            color: var(--obanana-dark-color);
            & .nestWrap {
              display: inline-flex;
              & .nestLinks {
                border-radius: 4px;
                & span {
                  display: inline-flex;
                  margin: 0.6rem 1rem;
                  width: 200px;
                  cursor: pointer;
                  justify-content: space-between;
                  line-height: 30px;
                  border-bottom: solid 1px;
                  &.active {
                    color: var(--obanana-primary-color-hover);
                  }
                  & .icon {
                    position: relative;
                    display: flex;
                    align-self: flex-end;
                    // float: right;
                    top: -10px;
                    // transition: 3s ease-in-out;
                    &.active {
                      transition: left 2s ease-in-out;
                      left: 5px;
                    }
                  }
                }
              }
              & .linksWrap {
                border-radius: 5px;
                position: absolute;
                //  width: 300px;
                left: 240px;
                box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);

                background-color: var(--obanana-site-bg-color);
                display: inline-flex;
                visibility: hidden;
                opacity: 0.8;
                transition: opacity 0.3s ease-in-out;
                &.active {
                  visibility: visible;
                  opacity: 1;
                }
                & .links {
                  // position: relative;
                  text-align: left;
                  margin: 0 1rem;
                  width: 130px;
                  & h1 {
                    color: var(--obanana-dark-color);
                    font-size: 1rem;
                  }
                  & ul {
                    text-align: left;
                    position: relative;
                    left: 0;
                    padding: 0;
                    margin: 1rem auto;
                    & li {
                      text-align: left;
                      list-style: none;
                      line-height: 30px;
                      cursor: pointer;

                      &:hover {
                        color: var(--obanana-primary-color-hover);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      & .navLinks {
        display: inline-flex;
        margin: auto 1rem;
        margin-left: 5rem;
        & .navLink {
          margin: auto 1rem;
          text-transform: capitalize;
          cursor: pointer;
          &.active {
            color: #ec7a5c;
            border-bottom: 3px solid;
          }
          &:hover {
            position: relative;
            top: -2px;
            color: #ec7a5c;
            border-bottom: 3px solid;
          }
        }
      }
    }
    & .right {
      display: flex;
      justify-content: flex-end;
      position: relative;
      left: 0;
      margin-right: 1rem;
      & span {
        display: flex;
        & .icon {
          margin: auto 1rem;
          font-size: 1.6rem;
        }
        & h1 {
          font-size: 1rem;
          @media (max-width: 1068px) {
            visibility: hidden;
            width: 0;
          }
        }
      }
    }
  } */
  & .navCon {
    @media (max-width: 1024px) {
      width: 90%;
      margin: auto;

      color: #fff;
      height: 100vh;
      position: relative;
      padding: 2rem 0;
      top: 0px;
      & .search {
        position: relative;
        display: inline-flex;
        margin: auto 1.2rem;
        height: 47px;
        width: 85%;
        position: relative;
        background-color: transparent;
        // box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
        padding: 0 1rem 0 1rem;
        font-family: inherit;
        border-radius: 15px;
        //  margin-top: 1rem;
        border-radius: 5px;
        border: 1px solid #7a7a7a;

        & .icon {
          margin: auto;
          margin-left: 0.5rem;
          font-size: 2rem;
          color: #fff;
        }
        input {
          width: 100%;
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
      & .tabWrap {
        display: inline-flex;
        color: #fff;
        margin: auto;
        margin-top: 2rem;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        & .tab {
          border-bottom: 2px solid #949494;
          padding: 0.5rem 1rem;
          margin: auto;
          margin-bottom: 1rem;
          font-size: 1.05rem;
          color: #fff;
          cursor: pointer;
          &:hover {
            color: #ff9d2d;
          }
          &.active {
            border-bottom: 2px solid #ff9d2d;
          }
        }
      }
      & .left {
        -webkit-animation: slide-in-left 0.5s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        max-width: 350px;
        display: flex;
        flex-direction: column;
        & .categories {
          visibility: hidden;
          height: 0;
          // width: 0;
          color: #fff;
          &.active {
            visibility: visible;
            height: auto;
            width: auto;
          }
          & .nestWrap {
            & .nestLinks {
              & span {
                display: inline-flex;
                justify-content: space-between;
                width: 280px;
                padding: 10px 20px;
                cursor: pointer;
                & p {
                  margin: auto 0rem;
                  text-align: left;
                }
              }
              border-bottom: 1px solid #c9c9c99b;
              &:hover {
                border-bottom: 1px solid #ff9d2d;
              }
            }
          }
          & .linksWrap {
            visibility: hidden;
            display: none;
            cursor: pointer;
            &.active {
              visibility: visible;
              width: auto;
              display: block;
            }
            & .links {
              margin: 0;
              padding: 10px 20px;
              margin-left: 1rem;
              height: auto;
              justify-content: center;
              align-items: center;
              display: block;
              justify-content: space-between;
              width: 100%;
              & span {
                display: inline-flex;
                width: 250px;
                justify-content: space-between;
                & h1 {
                  color: #fff;
                  font-size: 1rem;
                  font-weight: 100;
                  margin: 0;
                }
              }
              & ul {
                visibility: hidden;
                display: none;
                &.active {
                  visibility: visible;
                  height: auto;
                  width: auto;
                  display: block;
                }
                & li {
                  list-style: none;
                  padding: 5px 20px;
                  cursor: pointer;
                  &:hover {
                    color: #ff9d2d;
                  }
                  & h1 {
                    color: #fff;
                    font-size: 1rem;
                  }
                }
              }
            }
          }
        }
        & .navLinks {
          flex-direction: column;
          width: 100%;
          visibility: hidden;
          &.active {
            visibility: visible;
          }
          & .navLink {
            padding: 13px 1rem;
            border-bottom: 1px solid #7575757b;
            display: flex;
            color: var(--obanana-light-color);
            &.active {
              color:#ff9d2d;
              border-bottom: 2px solid;
            }
          }
        }
      }
      & .right {
        visibility: hidden;
      }
    }
  }
  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
export default SideNav;
