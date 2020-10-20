//전역 제품목록 정보  관리 리덕스 모듈

//1.액션 타입정의
const PRODUCT_INSERT = "PRODUCT_INSERT";

//2.액션 생성함수 정의

//단일 제품정보를 저장하기 위한 액션 생성함수
//컴포넌트에서 단일 제품정보(product)를 전달받아 리듀서함수에 전달한다.
export const insertProduct = (product) => ({
  type: PRODUCT_INSERT,
  product: product, //화면에서 받은 단일제품정보를 product이란 속성이름으로 전달한다.
});

//3.리듀서 함수 기능 정의
//Step1: 해당 리듀서에서 관리하는 전역데이터 구조를 정의하고 초기값을 세팅한다.
//Step2: 액션 타입에 따라 화면에서 액션생성함수를 통해 전달된 값으로 전역데이터 값을 변경적용한다.

//리듀서에서 관리하는 전역데이터 구조를 정의하고 초기값을 세팅한다.
const initialState = {
  products: [
    {
      idx: 1,
      productName: "전역상품데이터1",
      productDesc: "전역상품데이터 설명1",
      productImgURL: "/img/logo192.png",
    },
    {
      idx: 2,
      productName: "전역상품데이터2",
      productDesc: "전역상품데이터 설명2",
      productImgURL: "/img/logo512.png",
    },
  ],
};

//리듀서 함수 정의
//리듀서함수의 첫번쨰 파라메터는 해당 리듀서 함수에서 관리하는 전역상태값을 세팅합니다.
//리듀서함수의 두번쨰 파라메터는 액션생성함수에 의해서 전달되는 화면에서 전달해오는 데이터 값
function product(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_INSERT:
      console.log("모시냐????", action);
      return { ...state, products: state.products.concat(action.product) };
    default:
      return state;
  }
}

//리듀서 함수 모듈 내보내기
export default product;
