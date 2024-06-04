import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
function Cart({ setOpenCart }) {
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
  const [quantities, setQuantities] = useState(data.map(() => 1));

  const handleQauntitiesChange = (index, value) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? value : qty))
    );
  };

  return (
    <div className=" w-full fixed h-screen top-0 left-0 bg-[#00000044] z-50">
      <div className=" overflow-auto scrollbar-hide flex flex-col p-4 w-[70%] md:w-[25%] h-screen bg-white shadow-sm fixed top-0 right-0 z-30">
        {" "}
        <RxCross1
          size={30}
          color="black"
          className="absolute right-3 top-3  cursor-pointer z-40"
          onClick={() => setOpenCart(false)}
        />
        <div
          onClick={() => setOpenCart(true)}
          className=" flex items-center gap-4 mt-6  border-b pb-4"
        >
          <AiOutlineShoppingCart size={40} color="black" />
          <span className=" text-black  text-2xl font-semibold">
            {data.length} items
          </span>
        </div>
        <div className=" flex flex-col gap-3">
          {data.map((item, i) => (
            <div
              className=" flex  gap-3 border-b items-center justify-center p-3 "
              key={i}
            >
              <div className="flex flex-col gap-">
                <div
                  onClick={() => handleQauntitiesChange(i, quantities[i] + 1)}
                  className=" flex cursor-pointer justify-center p-1 rounded-md  border border-red-500 w-10"
                >
                  <HiPlus size={18} color="red" />
                </div>

                <span className="ml-1 pl-[10px] text-black">1</span>

                <div
                  onClick={() =>
                    handleQauntitiesChange(
                      i,
                      quantities[i] > 1 ? quantities[i] - 1 : 1
                    )
                  }
                  className=" flex cursor-pointer  justify-center p-1 rounded-md  border border-red-500 w-10 "
                >
                  <HiOutlineMinus size={18} color="red" />
                </div>
              </div>
              <div className=" flex gap-4">
                <div className=" flex items-center">
                  <img src={item.image} className=" w-20 h-20 " alt="" />
                </div>
                <div className=" flex flex-col gap-3">
                  <span className=" text-black font-semibold text-xl">
                    {item.name}
                  </span>
                  <span className=" font-semibold text-black">
                    ${item.price * quantities[i]}
                  </span>
                </div>
                <RxCross1
                  size={15}
                  color="black"
                  className=""
                  onClick={() => setOpenCart(false)}
                />
              </div>
            </div>
          ))}
        </div>
        <Link
          onClick={() => setOpenCart(false)}
          className=" flex gap-4 items-center justify-center p-2 rounded-lg capitalize border border-red-500 "
          to={"/check-out"}
        >
          <span className="text-red-500 font-semibold text-xl md:text-2xl">
            Check Out
          </span>
          <span className="text-red-500 font-semibold text-xl md:text-2xl">
            ${545}{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
