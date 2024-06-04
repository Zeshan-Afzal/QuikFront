import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductDetailsCard from "../components/productDetails/ProductDetailsCard";

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const data = productData.find((pro) => pro.id == id);
    window.scrollTo(0, 0);
    setProduct(data);
  }, [id]);

  return <ProductDetailsCard product={product} />;
}
