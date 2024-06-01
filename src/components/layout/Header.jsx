import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { productData, navItems, categoriesData } from "../../static/data";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import NavItems from "./NavItems";
import { useSelector } from "react-redux";
function Header() {
  const { isAuthenticated, userData } = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropDown, setDrowDown] = useState(false);
  const [active, setActive] = useState(false);

  const [resultData, setResultData] = useState(null);
  const handleOnInputChange = (e) => {
    const value = e.target.value;

    setSearchQuery(value);
    setResultData(
      productData.filter((item, index) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className=" h-20 w-full hidden md:flex  items-center justify-around shadow-lg">
        <Link to="/" className="flex items-center ">
          <span className=" font-bold text-blue-700 text-3xl font-serif ">
            Quick
          </span>
          <span className=" font-bold text-orange-600 text-3xl font-serif  ">
            Cart
          </span>
        </Link>

        <div className=" relative w-6/12 ">
          <input
            value={searchQuery}
            onChange={handleOnInputChange}
            type="text"
            className=" p-2 w-full border border-blue-400 outline-none bg-slate-100 rounded-sm "
            placeholder="Search products..."
          />
          <AiOutlineSearch
            size={20}
            className=" absolute right-2 top-3 bg-slate-100 z-10 cursor-pointer"
          />
          {resultData && searchQuery !== "" && (
            <div className=" w-full  max-h-[70vh] overflow-auto absolute top-11  bg-slate-100  z-20 scrollbar-hide   ">
              {resultData.map((item, i) => (
                <Link
                  key={i}
                  to="/product "
                  className=" w-full h-24 flex gap-2 p-2   items-center border-b "
                >
                  <img
                    src={item.image_Url[0].url}
                    alt=""
                    className=" w-20 h-20  "
                  />
                  <span className=" font-serif  font-semibold">
                    {" "}
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <button className=" p-3 gap-2 bg-blue-900  text-white rounded-lg flex  items-center font-serif ">
          {" "}
          Become seller
          <IoIosArrowForward />
        </button>
      </div>
      <div
        className={`${
          active ? "fixed top-0 left-0 z-50" : ""
        }  w-full hidden md:flex justify-around h-16 items-center  text-white transition-all duration-200 `}
        style={{ backgroundColor: "rgb(218 128 20)" }}
      >
        <div className="relative mt-[8px]  flex items-center justify-between bg-white p-2 w-52 rounded-tl-md rounded-tr-md cursor-pointer">
          <div
            className=" flex items-center gap-1 w-full justify-between "
            onClick={() => setDrowDown((prev) => !prev)}
          >
            <BiMenuAltLeft size={20} className="text-black" />
            <button className=" p-2 text-black rounded-lg font-bold font-serif ">
              All Catagories
            </button>
            <IoIosArrowDown size={20} className=" text-black "></IoIosArrowDown>
          </div>

          {dropDown && <DropDown categoriesData={categoriesData} />}
        </div>

        <NavItems navItems={navItems} />

        <div className="flex items-center gap-4">
          <div className=" relative cursor-pointer">
            <AiOutlineHeart size={25} />
            <span className=" absolute bottom-[13px] left-[20px] z-10  text-red-800 font-serif font-semibold text-lg">
              0
            </span>
          </div>
          <div className=" relative cursor-pointer">
            <AiOutlineShoppingCart size={25} />
            <span className=" absolute bottom-[13px] left-[20px] z-10 text-red-800 font-serif font-semibold text-lg">
              0
            </span>
          </div>
          {userData && isAuthenticated && isAuthenticated ? (
            <img src={userData.user.avatar} alt={userData.user.fullName} />
          ) : (
            <Link to="/login" className=" relative cursor-pointer">
              <CgProfile size={25} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
