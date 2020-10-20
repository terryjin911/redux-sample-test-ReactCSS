//index.js 모듈의 목적은 업무별 리덕스 모듈을 통합해서 store에 일괄적용키 위함
import { combineReducers } from "redux";

import product from "./product";
import member from "./member";

const rootReducer = combineReducers({ product, member });

export default rootReducer;
