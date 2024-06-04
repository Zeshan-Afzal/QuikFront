import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ProductDetails from "./ProductDetails";

function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  useEffect(() => {
    console.log(product.image_Url[0]);
  }, []);
  return (
    <>
      <div className="  w-full  min-h-[370px] bg-white rounded-md shadow-sm p-3 sm:w-[270px] flex flex-col gap-4 relative">
        <Link to={`/product/${product.id}`}>
          <img
            className=" w-56 h-52  mx-auto"
            src={product.image_Url[0].url}
            alt=""
          />
        </Link>
        <Link to={"/"}>
          <p className=" font-serif font-semibold text-blue-600 text-lg">
            {product.shop.name}
          </p>
        </Link>
        <Link to={`/product/${product.name}`}>
          <p className=" font-semibold line-clamp-2 text-lg ">{product.name}</p>
          <div className=" flex gap-1">
            <FaStar size={25} color="#F6BA00" />
            <FaStar size={25} color="#F6BA00" />
            <FaStar size={25} color="#F6BA00" />
            <FaStar size={25} color="#F6BA00" />
            <FaStar size={25} color="#F6BA00" />
          </div>

          <div className=" flex justify-between  pb-3 ">
            <div className=" flex gap-2">
              <p className=" font-semibold md:font-bold  text-xl">
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
            <p className=" font-semibold font-serif text-green-600 ">
              {product.total_sell} Sold
            </p>
          </div>
        </Link>
        <div className=" absolute top-2 right-3 bg-white z-30">
          {isLiked ? (
            <AiFillHeart
              onClick={() => setIsLiked(false)}
              size={28}
              className="cursor-pointer absolute right-2 top-5"
              color={"red"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              onClick={() => setIsLiked(true)}
              size={28}
              className="cursor-pointer absolute right-2 top-5"
              color={"#333"}
              title="Add to wishlist"
            />
          )}

          <AiOutlineEye
            size={28}
            className="cursor-pointer absolute right-2 top-14"
            color="#333"
            title="Quick view"
            onClick={() => setViewDetail(true)}
          />
          <AiOutlineShoppingCart
            size={28}
            className="cursor-pointer absolute right-2 top-24"
            color="#444"
            title="Add to cart"
          />
        </div>
        {viewDetail && (
          <ProductDetails
            setViewDetail={setViewDetail}
            product={product}
            setIsLiked={setIsLiked}
            isLiked={isLiked}
          />
        )}
      </div>
    </>
  );
}

export default ProductCard;
