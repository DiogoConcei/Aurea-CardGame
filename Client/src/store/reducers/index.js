import { combineReducers } from "redux";
import { baralhosReducer } from "./baralhosReducer";
import { submenuReducer } from './submenuReducer';

const rootReducer = combineReducers({
  submenu: submenuReducer,
  baralhos: baralhosReducer,
});

export default rootReducer;
