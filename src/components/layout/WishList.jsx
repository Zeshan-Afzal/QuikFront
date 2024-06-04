import React, { useEffect, useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function WishList({ setOpenWishList }) {
  const data = [
    {
      name: "this is product one",
      price: 345,
      image: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
    },
    {
      name: "this is product two",
      price: 345,
      image: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
    },
    {
      name: "this is product three",
      price: 345,
      image: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
    },
    {
      name: "this is product three",
      price: 345,
      image: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
    },
    {
      name: "this is product three",
      price: 345,
      image: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
    },
    {
      name: "this is product three",
      price: 345,
      image: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
    },
    {
      name: "this is product three",
      price: 345,
      image: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
    },
    {
      name: "this is product three",
      price: 345,
      image: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
    },
    {
      name: "this is product three",
      price: 345,
      image: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
    },
  ];

  return (
    <div className=" w-full fixed h-screen top-0 left-0 bg-[#00000044] z-20">
      <div className=" overflow-auto scrollbar-hide flex flex-col p-4 w-[70%] md:w-[25%] h-screen bg-white shadow-sm fixed top-0 right-0 z-30">
        {" "}
        <RxCross1
          size={30}
          color="black"
          className="absolute right-3 top-3  cursor-pointer z-40"
          onClick={() => setOpenWishList(false)}
        />
        <div
          onClick={() => setOpenWishList(true)}
          className=" flex items-center gap-4 mt-6  border-b pb-4"
        >
          <AiOutlineHeart size={25} color="black" />
          <span className=" text-black  text-2xl font-semibold">
            {data.length} items
          </span>
        </div>
        <div className=" flex flex-col  gap-3">
          {data.map((item, i) => (
            <div
              className=" flex  gap-3 border-b items-center justify-center p-3 "
              key={i}
            >
              <RxCross1 size={15} color="black" className="" />
              <div className=" flex gap-4 items-center">
                <div className=" flex items-center">
                  <img src={item.image} className=" w-20 h-20 " alt="" />
                </div>
                <div className=" flex flex-col gap-3">
                  <span className=" text-black font-semibold text-xl">
                    {item.name}
                  </span>
                  <span className=" font-semibold text-black">
                    ${item.price}
                  </span>
                </div>
                <AiOutlineShoppingCart size={40} color="black" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishList;
