import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

export default combineReducers({
    move : movieReducer, //combineReducers를 통해 movieReducer가 store에 전달됨.
});