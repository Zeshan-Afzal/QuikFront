import React, { useEffect, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import NavItems from "./NavItems";
import NavMobileItems from "./MobleNavItems";
import { useSelector } from "react-redux";

function MobileSideBar({ setOpenMenu, navItems, setOpenWishList }) {
  const { isAuthenticated, userData } = useSelector((state) => state.user);
  return (
    <div className=" w-full fixed h-screen top-0 left-0 bg-[#00000044] z-20">
      <div className=" overflow-auto scrollbar-hide flex flex-col p-4 w-[70%] md:w-[25%] h-screen bg-white shadow-sm fixed top-0 left-0 z-30 ">
        {" "}
        <RxCross1
          size={30}
          color="black"
          className="absolute right-3 top-3  cursor-pointer z-40"
          onClick={() => setOpenMenu(false)}
        />
        <AiOutlineHeart
          className="  ml-3 cursor-pointer"
          onClick={() => {
            setOpenMenu(false);
            setOpenWishList(true);
          }}
          size={45}
        />
        <div onClick={() => setOpenMenu(true)} className=" ">
          <NavMobileItems navItems={navItems} />
        </div>
        <div className=" w-full h-full  ">
          {isAuthenticated ? (
            <Link to={"/profile"} className=" flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                alt="sdf"
                className=" w-20 h-20 rounded-full border-t-red-500 border "
              />
              <span className=" font-semibold text-2xl"> zeshan</span>
            </Link>
          ) : (
            <div className=" flex gap-3">
              <Link
                to={"/login"}
                className=" text-center p-2 rounded-lg bg-black text-white font-semibold w-32 "
              >
                Login
              </Link>

              <Link
                to="/sign-up"
                className=" text-center p-2 rounded-lg border-blue-500 border w-32  text-black font-semibold "
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileSideBar;
