import React from "react";
import logo from "./logo.svg";
import "./App.css";

//리액트 라우팅 팩키지 참조
import { BrowserRouter, Route, Link } from "react-router-dom";

//라우팅 페이지 컴포넌트 참조
import Main from "./pages/Main";

//1.회원 관리 페이지 컴포넌트 참조
import Login from "./pages/members/Login";

//2.상품 관리 페이지 컴포넌트 참조
import Products from "./pages/products/Products";
import ProductAdd from "./pages/products/ProductAdd";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Main} exact={true} />

          <Route exact path="/login" component={Login} />

          <Route exact path="/products" component={Products} />
          {/* <Route exact path="/products/categories/:cidx" component={Products} /> */}
          <Route exact path="/product/add" component={ProductAdd} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
