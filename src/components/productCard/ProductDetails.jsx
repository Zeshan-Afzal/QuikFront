import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
function ProductDetails({ setViewDetail, product, setIsLiked, isLiked }) {
  const [count, setCount] = useState(0);
  return (
    <div className="w-[90%] md:w-[70%] max-h-[70%] overflow-auto scrollbar-hide bg-white fixed top-[10%]  md:left-[15%] left-[5%] z-50  mx-auto rounded-lg shadow-md ">
      <div className=" flex">
        <div className="  w-[50%] p-1 md:p-4 flex flex-col gap-5">
          <img
            src={product.image_Url[0].url}
            alt=""
            className=" w-[80%] h-[80%] mx-auto"
          />
          <div className=" flex gap-2">
            <img
              src={product.shop.shop_avatar.url}
              alt=""
              className=" md:w-20 md:h-20 w-11 h-11 rounded-full"
            />
            <div className="">
              <p className=" font-semibold text-blue-500 md:font-bold text-lg md:text-xl">
                {product.shop.name}
              </p>
              <p className="text-sm  md:text-lg">
                ({product.shop.ratings}) ratings
              </p>
            </div>
          </div>

          <button className="p-1  md:p-4 rounded-md hover:opacity-95 bg-blue-900 transition-none duration-200 w-36 md:w-44 text-white md:font-bold  md:font-serif flex  md:gap-2 justify-center items-center">
            {" "}
            Send message <AiOutlineMessage className="ml-1" />
          </button>

          <p className=" md:font-semibold md:text-xl text-red-500">
            ({product.total_sell}) Sold Out
          </p>
        </div>
        <div className=" w-[50%] p-4 flex flex-col gap-7 md:gap-5">
          <div className=" w-[80%]">
            <h1 className=" md:font-bold font-semibold text-xl md:text-3xl line-clamp-2">
              {product.name}
            </h1>
            <p className=" md:font-semibold text-sm md:text-lg line-clamp-[14] md:line-clamp-[20] lg:line-clamp-none">
              {product.description}
            </p>
          </div>
          <div className=" flex gap-2">
            <p className=" font-semibold md:font-bold  text-2xl">
              {" "}
              ${product.price}
            </p>
            {product.discount_price && (
              <span className=" text-red-500 line-through">
                {" "}
                ${product.discount_price}
              </span>
            )}
          </div>
          <div className="  flex justify-between">
            <div className=" flex">
              <button
                onClick={() => setCount((prev) => (prev -= 1))}
                className=" bg-violet-400  w-7 md:w-14 rounded-tl-md rounded-bl-md p-1 md:p-2 text-white font-semibold md:text-xl"
              >
                -
              </button>
              <p className=" flex items-center justify-center bg-gray-300 w-7  md:w-14 text-black font-semibold md:text-xl">
                {count}
              </p>
              <button
                onClick={() => setCount((prev) => (prev += 1))}
                className=" bg-violet-400  w-7 md:w-14 rounded-tr-md rounded-br-md p-1 md:p-2 text-white font-semibold md:text-xl"
              >
                +
              </button>
            </div>

            {isLiked ? (
              <AiFillHeart
                onClick={() => setIsLiked(false)}
                size={35}
                className="cursor-pointer mr-1  md:mr-7"
                color={"red"}
                title="Remove from wishlist"
              />
            ) : (
              <AiOutlineHeart
                onClick={() => setIsLiked(true)}
                size={35}
                className="cursor-pointer mr-1  md:mr-7"
                color={"#333"}
                title="Add to wishlist"
              />
            )}
          </div>
          <button className=" p-1  md:p-4 rounded-md hover:opacity-95 bg-blue-900 transition-none duration-200 w-36 md:w-44 text-white md:font-bold  md:font-serif  flex  md:gap-2 items-center justify-center">
            Add to Cart <AiOutlineShoppingCart className="ml-1" />
          </button>
        </div>
        <RxCross1
          size={30}
          className="absolute right-3 top-3 z-50 cursor-pointer"
          onClick={() => setViewDetail(false)}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
