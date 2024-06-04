import React from "react";
import { productData } from "../../static/data";
import ProductCard from "../productCard/ProductCard";

function FeaturedProducts() {
  return (
    <div className="  w-[90%] p-4 shadow-sm mx-auto rounded-md">
      <h1 className=" font-semibold md:font-bold font-serif text-xl md:text-3xl mb-7">
        Featured Products
      </h1>
      <div className=" flex flex-wrap justify-center md:justify-normal  gap-5 md:gap-8">
        {productData.length > 0 &&
          productData.map((item, i) => <ProductCard key={i} product={item} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
