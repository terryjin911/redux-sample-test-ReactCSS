//사용자 인증관련 유틸리티 함수 제공 모듈
import { Cookies } from "react-cookie";

/**
 * 로그인 사용자 정보 조회 반환 함수
 */
const getLoggedInUser = () => {
  const cookies = new Cookies();
  const user = cookies.get("user");
  return user ? (typeof user == "object" ? user : JSON.parse(user)) : null;
};

export { getLoggedInUser };
