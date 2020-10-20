//로그인 사용자 정보 로컬 저장을 위한 리액키 쿠키 팩키지참조
import { Cookies } from "react-cookie";

//전역 회원정보 및 로그인  정보  관리 리덕스 모듈

//1.액션 타입정의
const MEMBER_INSERT = "MEMBER_INSERT";
const MEMBER_LOGIN = "MEMBER_LOGIN";

//2.액션 생성함수 정의

//단일 사용자 정보를 저장하기 위한 액션 생성함수
//컴포넌트에서 단일 회원정보(member)를 전달받아 리듀서함수에 전달한다.
export const insertMember = (member) => ({
  type: MEMBER_INSERT,
  member: member, //화면에서 받은 신규 회원정보를 member이란 속성이름으로 전달한다.
});

export const login = (memberId, memberPwd) => ({
  type: MEMBER_LOGIN,
  memberId: memberId,
  memberPwd: memberPwd,
});

//3.리듀서 함수 기능 정의
//Step1: 해당 리듀서에서 관리하는 전역데이터 구조를 정의하고 초기값을 세팅한다.
//Step2: 액션 타입에 따라 화면에서 액션생성함수를 통해 전달된 값으로 전역데이터 값을 변경적용한다.

//리듀서에서 관리하는 전역데이터 구조를 정의하고 초기값을 세팅한다.
const initialState = {
  members: [
    {
      memberId: "test1",
      memberPwd: "test1",
      name: "test1",
      email: "test1@test.co.kr",
    },
    {
      memberId: "test2",
      memberPwd: "test2",
      name: "test2",
      email: "test2@test.co.kr",
    },
  ],
  // loginUser: {},
  // isLogin: false,
};

//리듀서 함수 정의
//리듀서함수의 첫번쨰 파라메터는 해당 리듀서 함수에서 관리하는 전역상태값을 세팅합니다.
//리듀서함수의 두번쨰 파라메터는 액션생성함수에 의해서 전달되는 화면에서 전달해오는 데이터 값
function member(state = initialState, action) {
  switch (action.type) {
    case MEMBER_INSERT:
      return { ...state, members: state.members.concat(action.member) };
    case MEMBER_LOGIN:
      //아이디/암호가 동일한 사용자 배열 조회
      var loginMember = state.members.filter(
        (user) =>
          user.memberId == action.memberId && user.memberPwd == action.memberPwd
      );

      if (loginMember.length == 1) {
        console.log("리덕스 로그인 일치 사용자:", loginMember[0]);

        //쿠키로 프론트엔드 세션 로그인 사용자 정보저장
        setSession(loginMember[0]);

        //동일 사용자 있으면 해당 사용자 정보로 로그인 상태 및 로그인 사용자 정보 갱신
        return state;
        //return { ...state, loginUser: loginMember[0], isLogin: true };
      } else {
        //동일 사용자가 없으면 로그인 실패
        let cookies = new Cookies();
        cookies.remove("user");
        return state;
      }
    default:
      return state;
  }
}

/**
 * 프론트 로그인 세션정보 저장함수
 * @param {*} user
 */
const setSession = (user) => {
  let cookies = new Cookies();
  if (user) cookies.set("user", JSON.stringify(user), { path: "/" });
  else cookies.remove("user");
};

//리듀서 함수 모듈 내보내기
export default member;
