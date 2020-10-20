import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { insertProduct } from "../../modules/product";

import TopHeader from "../../components/TopHeader";
import Footer from "../../components/Footer";

const Products = () => {
  //전역데이터 공간에서 product
  const globalProducts = useSelector((state) => state.product.products);

  return (
    <div>
      <TopHeader />
      <h1>상품 목록 페이지</h1>
      전역 데이터 상품은 {globalProducts.length}건이 존재합니다.
      <Footer />
    </div>
  );
};

export default Products;
