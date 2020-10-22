import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//쿠키기반 로그인 사용자 정보조회 공통모듈함수 참조
import { getLoggedInUser } from "../helpers/authUtils";

const TopHeader = () => {
  //전역데이터 공간에서 product
  //기초 데이터를 불러오는 기능
  //const globalProducts = useSelector((state) => state.product.products);

  //리덕스 전역데이터가 변경되는 시점에서 무언가 추가작업을 하고 싶을떄
  const globalProducts = useSelector(
    (state) => state.product.products,
    (newitem, previousItem) => {
      console.log(
        "신규 상품이 추가 또는 변경되었습니다.",
        newitem,
        previousItem
      );
      //추가작업 진행
      //setUseState('샘플');
    }
  );

  //로그인 한 상태라면 getLoggedInUser()를 통해 쿠키에 저장된 로그인 사용자 객체 조회
  const loginUser = getLoggedInUser();

  return (
    <div>
      <br />
      <br />
      상단 헤더 공통영역 컴포넌트 <br></br>
      현재 총 제품 건수는 {globalProducts.length}건입니다.<br></br>
      {/* 로그인 쿠키정보 존재에 따른 UX 분기처리 */}
      {getLoggedInUser() == undefined ? (
        <div>
          <Link to={"/"}>Main</Link> |<Link to={"/login"}>로그인</Link>|
        </div>
      ) : (
        <div>
          <Link to={"/"}>Main</Link> |<Link to={"/logout"}>로그아웃</Link>
        </div>
      )}
      <Link to={"/products"}>products</Link> |
      <Link to={"/product/add"}>Add Product</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default TopHeader;
