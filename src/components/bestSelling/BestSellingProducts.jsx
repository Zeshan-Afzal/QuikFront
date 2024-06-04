import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import { productData } from "../../static/data";

function BestSellingProducts() {
  const [dealsData, setDealsData] = useState([]);

  useEffect(() => {
    const data = productData.sort((a, b) => b.total_sell - a.total_sell);
    const limitData = data.slice(0, 8);
    setDealsData(limitData);
  }, []);

  return (
    <div className="  w-[90%] p-4 shadow-sm mx-auto rounded-md">
      <h1 className=" font-semibold md:font-bold font-serif text-xl md:text-3xl mb-7">
        Best Selling Products
      </h1>
      <div className=" flex flex-wrap justify-center md:justify-normal gap-3 md:gap-8">
        {dealsData.length > 0 &&
          dealsData.map((item, i) => <ProductCard key={i} product={item} />)}
      </div>
    </div>
  );
}

export default BestSellingProducts;
