import React, { act, useState } from "react";
import { productData } from "../../static/data";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import RelatedProducts from "./RelatedProducts";

function ProductDetailsCard({ product }) {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("detail");
  const handleSelect = (img) => {
    setSelectedImage(img.url);
  };

  return (
    <>
      <div className=" w-full flex p-8 flex-col md:flex-row">
        <div className=" md:w-[50%]  items-center flex justify-center">
          <div className=" flex flex-col items-center justify-center  w-full h-[70vh]">
            <div className=" w-[80%] h-[60%] items-center justify-center flex ">
              <img
                src={
                  selectedImage
                    ? selectedImage
                    : product
                    ? product.image_Url[0].url
                    : ""
                }
                alt=""
                className=" min-h-[80%] max-h-[90%]  w-[90%]"
              />
            </div>
            <div className=" flex items-center justify-center p-4  gap-4 max-h-[40%]">
              {product &&
                product.image_Url.map((img) => (
                  <div
                    onClick={() => handleSelect(img)}
                    className=" cursor-pointer  h-[80%] border p-2 hover:scale-95"
                  >
                    <img src={img.url} alt="" className="h-full" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className=" md:w-[50%] p-8 flex flex-col gap-5">
          <div className=" w-[80%]">
            <h1 className=" md:font-bold font-semibold text-xl md:text-3xl line-clamp-2">
              {product && product.name}
            </h1>
            <p className=" md:font-semibold text-sm md:text-lg line-clamp-[14] md:line-clamp-[20] lg:line-clamp-none">
              {product && product.description}
            </p>
          </div>
          <div className=" flex gap-2">
            <p className=" font-semibold md:font-bold  text-2xl">
              {" "}
              ${product && product.price}
            </p>
            {product && product.discount_price && (
              <span className=" text-red-500 line-through">
                {" "}
                ${product && product.discount_price}
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
          <button className=" p-1  md:p-4 mt-5 rounded-md hover:opacity-95 bg-blue-900 transition-none duration-200 w-36 md:w-44 text-white md:font-bold  md:font-serif  flex  md:gap-2 items-center justify-center">
            Add to Cart <AiOutlineShoppingCart className="ml-1" />
          </button>

          <div className=" flex gap-2 md:gap-4 mt-5 items-center">
            <img
              src={product && product.shop.shop_avatar.url}
              alt=""
              className=" md:w-20 md:h-20 w-11 h-11 rounded-full"
            />
            <div className="">
              <p className=" font-semibold text-blue-500 md:font-bold text-lg md:text-xl">
                {product && product.shop.name}
              </p>
              <p className="text-sm  md:text-lg">
                ({product && product.shop.ratings}) ratings
              </p>
            </div>
            <button className="p-1  md:p-4 rounded-md hover:opacity-95 bg-black transition-none duration-200 w-36 md:w-44 text-white md:font-bold  md:font-serif flex  md:gap-2 justify-center items-center">
              {" "}
              Send message <AiOutlineMessage className="ml-1" />
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-around p-6 w-full md:w-[90%] bg-slate-200 mx-auto shadow-sm min-h-[300px] mb-10">
        <div className=" w-full flex  flex-col">
          <div className=" w-full flex justify-around items-start">
            <h1
              onClick={(e) => setActiveTab(e.target.id)}
              id="detail"
              className={` ${
                activeTab === "detail" ? " border-b-[4px] border-red-600" : ""
              } md:font-bold font-semibold text-xl md:text-2xl cursor-pointer`}
            >
              Product Details{" "}
            </h1>
            <h1
              id="review"
              onClick={(e) => setActiveTab(e.target.id)}
              className={` ${
                activeTab === "review" ? " border-b-[4px] border-red-600" : ""
              } md:font-bold font-semibold text-xl md:text-2xl cursor-pointer`}
            >
              Product Reviews
            </h1>

            <h1
              onClick={(e) => setActiveTab(e.target.id)}
              id="seller"
              className={` ${
                activeTab === "seller" ? " border-b-[4px] border-red-600" : ""
              } md:font-bold font-semibold text-xl md:text-2xl cursor-pointer`}
            >
              Seller Info
            </h1>
          </div>

          {activeTab === "detail" && (
            <div className=" p-2 md:p-4 h-full">
              <p className=" text-sm md:text-xl">
                Product details are a crucial part of any eCommerce website or
                online marketplace. These details help the potential customers
                to make an informed decision about the product they are
                interested in buying. A well-written product description can
                also be a powerful marketing tool that can help to increase
                sales.Product details typically include information about the
                product's features, specifications, dimensions, weight,
                materials, and other relevant information that can help
                customers to understand the product better. The product details
                interested in buying. A well-written product description can
                also be a powerful marketing tool that can help to increase
                sales.Product details typically include information about the
                product's features, specifications, dimensions, weight,
                materials, and other relevant information that can help
                customers to understand the product better. The product details
                section should also include high-quality images and videos of
                the product, as well as customer reviews and ratings. product's
                product's features, specifications, dimensions, weight,
                materials, and other relevant information that can help
                customers to understand the product better. The product details
                section should also include high-quality images and videos of
                the product, as well as customer reviews and ratings. product's
                features, specifications, dimensions, weight, materials, and
                other relevant information that can help customers to understand
                the product better. The product details section should also
                include high-quality images and videos of the product, as well
                as customer reviews and ratings.
              </p>
            </div>
          )}

          {activeTab === "review" && (
            <div className=" flex  items-center justify-center md:p-4 p-2 h-full">
              <p className=" text-xl ">no reviews</p>
            </div>
          )}

          {activeTab === "seller" && (
            <div className=" flex p-4 justify-between">
              <div className=" flex gap-2 md:gap-4 mt-5  flex-col w-[50%]">
                <div className=" flex gap-2 items-center">
                  <img
                    src={product && product.shop.shop_avatar.url}
                    alt=""
                    className=" md:w-20 md:h-20 w-11 h-11 rounded-full"
                  />
                  <div className="">
                    <p className=" font-semibold text-blue-500 md:font-bold text-lg md:text-xl">
                      {product && product.shop.name}
                    </p>
                    <p className="text-sm  md:text-lg">
                      ({product && product.shop.ratings}) ratings
                    </p>
                  </div>
                </div>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, vitae et. Reprehenderit ad recusandae incidunt
                  quaerat sequi commodi rerum at animi laudantium.
                </p>
              </div>
              <div className=" flex flex-col gap-3 justify-center items-center">
                <span className=" font-semibold md:text-xl text-lg  ">
                  Joind At 23 june, 2012
                </span>
                <span className=" font-semibold md:text-xl text-lg  ">
                  Total products: 3434
                </span>
                <span className=" font-semibold md:text-xl text-lg  ">
                  Total reviews:(3434)
                </span>
                <button className=" p-1  md:p-4 mt-5 rounded-md hover:opacity-95 bg-blue-900 transition-none duration-200 w-36 md:w-44 text-white md:font-bold  md:font-serif  flex  md:gap-2 items-center justify-center">
                  Visit Shop
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <RelatedProducts product={product} />
    </>
  );
}

export default ProductDetailsCard;
