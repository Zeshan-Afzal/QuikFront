import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import { productData } from "../../static/data";

function RelatedProducts({ product }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const data = productData.filter((pro) => pro.category == product?.category);

    setRelatedProducts(data.filter((pro) => pro.id !== product.id));
  }, [product]);

  return (
    <div className="  w-[90%] p-4 shadow-sm mx-auto rounded-md">
      <h1 className=" font-semibold md:font-bold font-serif text-xl md:text-3xl mb-7">
        Related Products
      </h1>
      <div className=" flex flex-wrap justify-center md:justify-normal gap-3 md:gap-8">
        {relatedProducts.length > 0 &&
          relatedProducts.map((item, i) => (
            <ProductCard key={i} product={item} />
          ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
