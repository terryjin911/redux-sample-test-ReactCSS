import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../modules/member";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const dispatch = useDispatch();

  const onUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const onUserPwdChange = (e) => {
    setUserPwd(e.target.value);
  };

  const onLogin = () => {
    //전역 리덕스 정보를 이용한 로그인 처리

    //로그인 액션생성함수에 현재 사용자가 입력한 아이디/암호전달 실행
    dispatch(login(userId, userPwd));

    //메인 페이지로 이동
    window.location = "/";
  };

  return (
    <div>
      로그인 페이지
      {/* 해님이 알려준 margin : "auto" ^_^ */}
      <table style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                name="userId"
                value={userId}
                onChange={(e) => onUserIdChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>암호</td>
            <td>
              <input
                type="password"
                name="userPwd"
                value={userPwd}
                onChange={(e) => onUserPwdChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={onLogin}>로그인</button>
              <Link to={"/"}>메인이동</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Login;
