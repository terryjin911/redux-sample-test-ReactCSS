import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import TopHeader from "../../components/TopHeader";
import Footer from "../../components/Footer";

//리덕스의 디스패치를 하기 위한 액션생성함수를 불러와서 하기 코드에서 실행해 액션실행함수를 실행시킨다.
import { insertProduct } from "../../modules/product";
//useSelector 는 전역데이터의 값을 조회할때 사용하거나 화면에 출력할때 사용
//useDispatch 는 컴포넌트에서 액션 실행함수를 호출하여 화면 데이터를 액션생성함수를 거쳐 리듀서로 전달하여 전역데이터값을 제어한다.
import { useSelector, useDispatch } from "react-redux";

const ProductAdd = () => {
  //단일 상품 등록 객체에 대한 구조 정의 및 초기값 세팅
  const [product, setProduct] = useState({
    idx: 0,
    productName: "",
    productDesc: "",
    productImgURL: "/img/logo192.png",
  });

  //저장된 상품목록 데이터 구조 정의
  //해당 페이지 컴포넌트 자체에서만 사용하는 데이터 구조: 리덕스로 대체예정
  const [products, setProducts] = useState([]);

  //useDispatch를 이용해 dispatch 함수를 정의한다.
  const dispatch = useDispatch();

  //현재 화면의 제품정보를 전역 제품목록 데이터에 저장한다.
  //전역 데이터 저장 처리 함수
  const onAddProduct = () => {
    //실행시킬 액션 실행함수에 화면의 값을 전달한다. +1 건
    dispatch(insertProduct(product));
  };

  //상품정보 데이터 바인딩 변경적용
  const onProductChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  //신규 제품 정보 로컬 저장 이벤트 함수
  const onSave = () => {
    //현재 입력한 단일 제품을 기존 등록 배열에 추가한다.

    //dispatch(insertProduct(product));
    setProducts([...products, product]);
  };

  return (
    <div>
      <TopHeader />
      <h1>상품등록 페이지 컴포넌트</h1>

      <table>
        <tbody>
          <tr>
            <td>상품번호</td>
            <td>
              <input
                type="text"
                name="idx"
                value={product.idx}
                onChange={(e) => onProductChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>상품명</td>
            <td>
              <input
                type="text"
                name="productName"
                value={product.productName}
                onChange={(e) => onProductChange(e)}
              />
            </td>
          </tr>

          <tr>
            <td>상품설명</td>
            <td>
              <input
                type="text"
                name="productDesc"
                value={product.productDesc}
                onChange={(e) => onProductChange(e)}
              />
            </td>
          </tr>

          <tr>
            <td>상품이미지URL</td>
            <td>
              <input
                type="text"
                name="productImgURL"
                value={product.productImgURL}
                onChange={(e) => onProductChange(e)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      {/* <button onClick={onSave}>저장</button> */}
      <button onClick={onAddProduct}>저장</button>
      <Link to={"/products/"}>목록이동</Link>
      {/* 왜 이게 globalProducts가 아니지? 그리고 왜 적용이 안되지? */}
      <h1>총 {products.length} 건이 저장되었습니다.</h1>
      <Footer />
    </div>
  );
};

export default ProductAdd;
